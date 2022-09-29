const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {//This code makes it so the server sends a response to any machine that sends a req
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {// Callback function.
  console.log(`Server running at http://${hostname}:${port}/`);//Dynamic String
  
});




// function inside an object
const obj ={
    vvv(){

    }
}

//Function itself passed as a param
// Parenth around x if multiple param
// Arrow func cannot have its own "this"
const fatArrow = x => x * 2;//<- func body



