const {format} = require('date-fns')
const {v4: uuid} = require('uuid')
const fsPromises = require('fs').promises
const {existsSync} = require('fs')

const path = require('path')

const logEvents = async(message, filee) => {
    const dateTime = `${format(new Date(), 'yyyy,MM,dd\tHH:mm:ss')}`
    const logItem = `\n${dateTime}\t${uuid()}\t${message}`
    console.log(logItem)
    try{
        if(!existsSync(path.join(__dirname), './logs')){
            await fsPromises.mkdir(path.join(__dirname),'./logs')
        } 
        await fsPromises.appendFile(path.join(__dirname,"logs",filee), logItem)
    }catch(err){
        console.log(err)
    }
}

module.exports = logEvents
