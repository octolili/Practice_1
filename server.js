const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const PORT = 3000;

app.use(morgan(':method :url :status :response-time ms - :res[content-length]'));

app.use(bodyParser.urlencoded({
  extended: true
}))

app.set('view engine', 'ejs')

const timesDataBase = {
  // 'Bob': '57.85',
  // 'Jon': '47.88',
  // 'Bill': '44.76'
}

app.get('/', function (req, res) {
  const TemplateVars= {
    skaters: timesDataBase
  }
  res.render('index',
  TemplateVars)
})

app.post('/times/new', function (req, res) {
  console.log('Times Input', req.body)
  timesDataBase[req.body.FirstName] = req.body.Time
  console.log(timesDataBase)
  res.redirect('/')
})
 
app.listen(PORT, function(){
  console.log(`server running listening on: ${PORT}`)
  console.log(timesDataBase)
});