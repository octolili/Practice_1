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

const lapTime1 = {}
const lapTime2 = {}
const totalTime = lapTime1 + lapTime2

app.get('/', function (req, res) {
  const TemplateVars= {
    skaters: lapTime1
  }
  res.render('index',
  TemplateVars)
})

app.post('/times/new', function (req, res) {
  console.log('Times Input', req.body)
  lapTime1[req.body.FirstName] = req.body.Lap_Time_1
  console.log(lapTime1)
  res.redirect('/')
})
 
app.listen(PORT, function(){
  console.log(`server running listening on: ${PORT}`)
  console.log(lapTime1)
});