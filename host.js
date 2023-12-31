const http=require('http');
const fs= require('fs');
const hostname ='127.0.0.1';
const port = 80;
const calculator = fs.readFileSync('D:\\WEB DEVELOPMENT\\exercise_8\\calculator.html');
const server =http.createServer((req,res)=>{
    res.setHeader('Content-type','text/html');
    res.end(calculator);   
})
server.listen(port,hostname,()=>{
    console.log(`Server is running at http://${hostname}:${port}/`)
})