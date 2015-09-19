var express      = require('express');
var jade         = require('jade');
var app          = express();

// set root for static files
app.use(express.static(__dirname + '/public'));

// set templating engine
app.set('view engine', 'jade');

// tell express where to look for views
app.set('views', __dirname + '/public/views');

// respond to get '/'
app.get('/', function(req, res) {
  res.render('index');
});

// listen on 8080
app.listen(8080);
console.log('boo-yah 8080!');
