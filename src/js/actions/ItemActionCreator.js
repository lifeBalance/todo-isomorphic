var dispatcher = require('../dispatcher');

module.exports = {
  add: function (item) {
    dispatcher.dispatch({
      payload: item,
      type: 'item:add'
    });
  },
  delete: function (item) {
    dispatcher.dispatch({
      payload: item,
      type: 'item:delete'
    });
  },
  doItem: function (item) {
    dispatcher.dispatch({
      payload: item,
      type: 'item:doItem'
    });
  },
  undoItem: function (item) {
    dispatcher.dispatch({
      payload: item,
      type: 'item:undoItem'
    });
  }
}
