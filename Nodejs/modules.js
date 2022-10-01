//os module
const os = require('os')
//path module
const path = require('path')
//custom module
const {add, subtract, divide} = require('./math')
//file system
// const fs = require('fs') without promises
const fsPromises = require('fs').promises


os.version()//os version
os.type() //os type
os.homedir() //home directory
__filename //filename
__dirname //directory name

//path
path.basename(__filename) //basename
path.dirname(__filename) // directory name - same as __dirname
path.extname(__filename) // extention name

path.parse(__dirname) //all dirname info in object

//custom module
add(1,2)
subtract(2,1)
divide(4,10)

//filesystem
//read file
// fs.readFile(path.join(__dirname, 'files', 'text1.txt'), 'utf8', (err, data)=>{
//     if (err) throw err
//     console.log(data)
// })

// //write file
// fs.writeFile(path.join(__dirname, 'files', 'reply'), "hello dear..", (err)=>{
//     if(err) throw err
//     console.log("file Written")
// })

// //append file
// fs.appendFile(path.join(__dirname, "files","another1.txt"), "another one", (err)=>{
//     if(err) throw err
//     console.log("file appended")
// })

// //rename file
// fs.rename(path.join(__dirname,"files","another1.txt"), path.join(__dirname,"files","djkhalid.txt"),(err)=>{
//     if(err) throw err
//     console.log("renamed")
// })

//file with promises

const fileOps = async() =>{
    try{
        const data = await fsPromises.readFile(path.join(__dirname,"files","djkhalid.txt"),'utf8')
        console.log(data)
        
        await fsPromises.appendFile(path.join(__dirname,"files","reply.txt"),data)
        await fsPromises.rename(path.join(__dirname,"files", "reply.txt"),path.join(__dirname,"files", "newone.txt"))
        const newdata = fsPromises.readFile(path.join(__dirname, "files","newone.txt"), "utf8")
    }catch(err){
        console.log(err)
    }
}

fileOps()