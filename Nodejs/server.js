const http = require('http')
const path = require('path')
const fs = require('fs')
const fsPromises = require('fs').promises

const logEvents = require('./logEvents')
const eventEmmiter = require('events')

class Emmiter extends eventEmmiter{}

//initialize object
const myEmmiter = new Emmiter()
myEmmiter.on('log', (msg, filee)=> logEvents(msg, filee))

const PORT = process.env.PORT || 3500

const servefiles = async(filePath, contentType, response) => {
    try{
        const rawdata = await fsPromises.readFile(filePath, 
            !contentType.includes('image') ? 'utf8' : ''
            )
        const data = contentType === 'application/json'
            ? JSON.parse(rawdata) : rawdata
        response.writeHead(
            filePath.includes('404.html') ? 404 : 200,
             {'Content-Type': contentType})
        response.end(
            contentType === 'application/json' ? JSON.stringify(data) : data
        )
    }catch(err){
        console.log(err)
        myEmmiter.emit('log', `${err.name}: ${err.message}`, 'errorlog.txt')
        response.statusCode = 500
        response.end()
    }
}

const server = http.createServer((req,res)=>{
    console.log(req.url, req.method)
    myEmmiter.emit('log', `${req.url}\t${req.method}`, 'reqlog.txt')

    const extension = path.extname(req.url)
    let contentType

    switch (extension) {
        case '.css':
            contentType = "text/css"
            break;
        case '.js':
            contentType = "text/javascript"
            break;
        case '.png':
            contentType = "image/png"
            break;
        case '.jpg':
            contentType = "image/jpeg"
            break;
        case '.json':
            contentType = "application/json"
            break;
        case '.txt':
            contentType = "text/plain"
            break;
        
        default: 
            contentType = "text/html"
            break;
    }
    let filePath = 
        //set content type
        contentType=== 'text/html' && req.url === '/'
            ?path.join(__dirname,'view', 'index.html')
            :contentType === 'text/html' && req.url.slice(-1) === '/'
                ?path.join(__dirname,'view',req.url, 'index.html')
                :contentType === 'text/html'
                    ?path.join(__dirname, 'view', req.url)
                    :path.join(__dirname, req.url)

    //makes the .html not required
    if(!extension && req.url.slice(-1) !== '/') filePath += '.html'

    const fileexists = fs.existsSync(filePath)

    if(fileexists){
        servefiles(filePath, contentType, res)
    }else{
        //pssibilities
        //404 page does not exist
        //301 redirect
        switch(path.parse(filePath).base){
            case 'old-page.html':
                res.writeHead(301, {"location" : "/new-page.html"})
                res.end()
                break
             case 'www-page.html':
                res.writeHead(301, {"location" : "/"})
                res.end()
                break
            default:
                // serve a 404
                servefiles(path.join(__dirname,"view",'404.html'), 'text/html', res)
        }
    }
})
server.listen(PORT, ()=> console.log(`server running on port${PORT}`))
// //add a listener for log event

