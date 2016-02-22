var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todo', function () {
  console.log('Successfully connected to mongodb://localhost/todo');
});

// Exporting the connection to the `todo` database.
// We will be using it in the `seed` file.
var todoConnection = module.exports = mongoose.connection;
