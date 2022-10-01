const fs = require('fs')

//check id directory exists and create if not
if(!fs.existsSync('./newdir')){
    fs.mkdir('./newdir', (err)=>{
    if(err) throw err
    console.log("successful")
})
}

//delete directory
fs.rmdir('./newdir',(err)=>{
    if(err) throw err
    console.log("file deleted")
})