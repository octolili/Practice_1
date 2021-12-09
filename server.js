const express = require('express');
const morgan = require('morgan');
const app = express();
const PORT = 3000;

app.use(morgan(':method :url :status :response-time ms - :res[content-length]'));

app.get('/', function (req, res) {
  res.send('Hello World! Awesome')
})
 
app.listen(PORT, function(){
  console.log(`server running listening on: ${PORT}`)
});