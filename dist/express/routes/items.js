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
  app.route('/api/items/:id')
    .delete(function (req, res) {
      console.log('Removing item', req.params.id);

      Item.findOne({ _id: req.params.id }).remove(function () {
        console.log('* Item', req.params.id, 'removed.\n');
      });
    })
    .patch(function (req, res) {
      Item.findOne({ _id: req.body._id }, function (err, doc) {
        for (var key in req.body) {
          doc[key] = req.body[key];
        }
        doc.save();
        res.status(200).send();
      });
    })
}
