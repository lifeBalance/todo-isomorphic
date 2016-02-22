// Importing the connection to the `todo` database.
var todoConn = require('./database');

// Importing the model we'll use to write to the db.
var Item = require('./models/Item');

// Data to populate the database
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
    name: 'Fix garage lights',
    done: true
  },
];

// When the connection is ready, do the music!
todoConn.on('open', function () {
  dropDb(seedDb, closeDb);
});

function dropDb (cb1, cb2) {
  todoConn.db.dropDatabase();
  console.log('Database dropped!');
  cb1(cb2);
}

function seedDb (cb) {
  console.time('Seeding Time'); // Benchmarking the seed process.

  // Warning! Slow IO operation.
  itemsTodo.forEach(function (item) {
    new Item(item).save(function (err) {
      if (err) console.log('Oopsie!', err);
    });
    console.log('Seeding:', item);
  });

  console.timeEnd('Seeding Time'); // Benchmarking the seed process.

  cb();
}

function closeDb () {
  setTimeout(function () {
    todoConn.close(function () {
      console.log('Mongoose connection closed!');
    });
  }, 1000); // Delay closing connection to give enough time to seed!
}
