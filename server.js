const url = require('url')
const fs = require('fs')
const http = require('http')



const hostname = 'localhost'
const port = 8080

let ThePath = './views'
let extendfile = '.html'

const server = http.createServer((req,res)=>{
    console.log(req.url)
    if(req.url==='/'){
        mainPath = ThePath+'/home'+extendfile
    }
    else if(req.url==='/about'|| req.url==='/about-us'){
        mainPath =ThePath+'/about'+extendfile
    }
    else if(req.url==='/contact'){
        mainPath =ThePath+'/contact'+extendfile
    }
    else mainPath = ThePath+'/error'+extendfile



    fs.readFile(mainPath,(err,data)=>{
        if(err){
            console.log(`Error in reading from ${ThePath}`)
        }
        res.setHeader('Content-Type','text/html')
        res.write(data)
        res.end()
    })
})
server.listen(port,hostname,()=>{
    console.log(`Server is listening at ${hostname}:${port}`)
}) 

