module.exports = function (app) {
  var Item = require('../models/Item');

  app.route('/api/items')
    .get(function (req, res) {
      Item.find(function (err, data) {
        res.send(data);
      });
    })
    .post(function (req, res) {
      var _item = req.body;
      var item = new Item(_item);
      item.save(function (err, data) {
        res.status(300).send();
      });
    });
}
