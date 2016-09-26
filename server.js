var express = require('express')
var strftime = require('strftime')
var app = express()

app.get('/:query', function (req, res) {
  var query = req.params.query
  var output = {}
  var time;
  if (isNaN(Number(query))) { //if not timestamp
    if (new Date(query) !== 'Invalid Date') { //if valid date
      time = new Date(query)
    } else {
      time = null
    }
  } else { //if timestamp
    console.log(Number(query))
    time = new Date(Number(query) * 1000)
  }

  if (time === null) {
    output = { 'unix': null, 'natural': null }
  } else {
    output = { 'unix': time.getTime() / 1000, 'natural': strftime('%B %d, %Y', time) }
  }
  console.log(output)
  res.send(JSON.stringify(output))
})

app.listen(3000, function () {

})
