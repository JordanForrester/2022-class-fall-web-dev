const express = require('express')
const app = express()

const hostname = '127.0.0.1';
const port = 3000;

app.get('/', (req, res) =>{
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');

})

app.listen(port, hostname,  () => {
  console.log(`Example app listening on port ${port}`)
})










// function inside an object
const obj ={
    vvv(){

    }
}

//Function itself passed as a param
// Parenth around x if multiple param
// Arrow func cannot have its own "this"
const fatArrow = x => x * 2;//<- func body



