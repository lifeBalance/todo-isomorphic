var async = require('async');

// Importing the connection to the `todo` db.
var todoConn = require('./database');

// Importing the model we'll use to write to the db.
var Item = require('./models/Item');

// Data to populate the db.
var itemsTodo = [
  {
    name: 'Do the laundry',
    done: false
  },
  {
    name: 'Take out the trash',
    done: true
  },
  {
    name: "Fix garage lights",
    done: true
  },
];

// When the connection is ready do the music!
todoConn.on('open', function () {
  async.series([
    function (cb) {
      todoConn.db.dropDatabase();
      console.log('Database dropped!');
      cb();
    },

    function (cb) {
      // Slow IO operations are not an issue anymore
      itemsTodo.forEach(function (item) {
        new Item(item).save();
        console.log('* Seeding:', item);
      });
      cb();
    },

    function (cb) {
      todoConn.close();
      console.log('Mongoose connection closed!');
      cb();
    }
  ])
});
