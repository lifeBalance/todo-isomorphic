var express = require('express');
var app = express();
var path = require ('path');
var parser = require('body-parser');
require('./database');

// Isomorphic app
var React           = require('react');
var ReactDOMServer  = require('react-dom/server')

// Require the register hook before the component!
require("babel-register");

var ReactApp  = React.createFactory(require('../../src/js/components/ItemList.jsx'));
var Item      = require('./models/Item');

// Setting templating engine
app.set('view engine', 'jade');
// Setting views location
app.set('views', path.join(__dirname + '/views'));

// Static Files middleware
app.use(express.static(path.join(__dirname + '/../public')));

app.use(parser.json()); // Process json requests
app.use(parser.urlencoded({extended: false})); // To handle POST requests

app.get('/', function (req, res) {
  var reactHtml;

  Item.find(function (err, data) {
    reactHtml = ReactDOMServer.renderToString(ReactApp({items: data}));
  });

  res.render('index', { reactOutput: reactHtml });
});


var server = app.listen(3000, function () {
  console.log('Listening on http://localhost:' + server.address().port);
  console.log("Hit 'Ctrl + C' to stop the server");
});

// Route for the items API
require('./routes/items.js')(app);
