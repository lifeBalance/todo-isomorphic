var dispatcher = require('../dispatcher');

function ItemStore() {
  // var items = [];
  // Provisionally until the backend is ready
  var items = [
    {
      name: 'Do the laundry.'
    },
    {
      name: 'Take out the trash.'
    },
    {
      name: "Fix garage lights.",
      done: true
    },
  ];
  var listeners = [];

  function getItems() {
    return items;
  }

  function addItem(item) {
    items.push(item);
    triggerListeners();
  }

  function deleteItem(item) {
    var index = items.findIndex(function (_item) {
      return _item.name === item.name;
    });

    console.log('Deleting item', item.name);

    items.splice(index, 1);
    triggerListeners();
  }

  function toggleItemDone(item, isDone) {
    var index = items.findIndex(function (_item) {
      return _item.name === item.name;
    });

    console.log('Toggling item', item.name, 'to', item.done);

    items[index].done = !isDone;

    triggerListeners();
  }

  function onChange(listener) {
    listeners.push(listener);
  }

  function triggerListeners() {
    listeners.forEach(function (listener) {
      listener(items);
    });
  }

  dispatcher.register(function (event) {
    var split = event.type.split(':');

    if (split[0] === 'item') {
      switch (split[1]) {
      case 'add':
        addItem(event.payload);
        break;
      case 'delete':
        deleteItem(event.payload);
        break;
      case 'doItem':
        toggleItemDone(event.payload, true);
        break;
      case 'undoItem':
        toggleItemDone(event.payload, false);
        break;
      }
    }
  });

  return { // Only 2 parts of the store exposed to outside.
    getItems: getItems,
    onChange: onChange
  };
}
module.exports = new ItemStore();
