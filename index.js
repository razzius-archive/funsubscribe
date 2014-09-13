var express = require('express');
var mongoose = require('mongoose');
var config = require('./config');
var Service = require('./models').Service;


var app = express();

app.set('port', config.PORT)
app.use(express.static(__dirname + '/public'))


mongoose.connect(config.MONGO_URL);


app.get('/api/service/', function(request, response) {
  Service.find(function(err, service) {
    response.send(service);
  });
});

app.post('/api/service/', function(request, response) {
  var service = new Service({
    'name': 'Pandora',
    'url': 'http://www.pandora.com'
  });
  service.save(function (err, object) {
    console.log('err is ' + err);
    console.log(object);
  });
  console.log('added service');
  response.end();
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
});
