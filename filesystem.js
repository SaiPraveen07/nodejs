var http = require('http');
var fs = require('fs');

http.createServer((req,res)=>{

    //read file()
   fs.readFile('test.txt',(err,data)=>{
    res.write(data);
    res.end();
   })
    //append file()
   fs.appendFile('test.txt','welcome',(err,data)=>{
    res.write(data);
    res.end();
   })

    //write file()
    fs.writeFile('test.txt','nodejs',(err,data)=>{
    res.write(data);
    res.end();
   })

   //delete file()
   fs.unlink('test.txt',(err)=>{
    if(err) throw err;
    console.log("file deleted");
   })
}).listen(8084)