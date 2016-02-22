var mongoose = require('mongoose');

var ItemSchema = {
  name: String,
  done: {type: Boolean, default: false},
  id: String
};

var Item = module.exports = mongoose.model('Item', ItemSchema, 'items');
// The third argument is for being explicit, even though
// Mongoose automatically looks for the plural version of your model name.
