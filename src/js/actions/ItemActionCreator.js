var dispatcher = require('../dispatcher');

module.exports = {
  add: function (item) {
    dispatcher.dispatch({
      payload: item,
      type: 'item:add'
    });
  }
}
