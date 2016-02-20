module.exports = function (app) {
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
  app.route('/api/items')
    .get(function (req, res) {
      res.send(items);
    })
    .post(function (req, res) {
      var item = req.body;
      items.push(item);
    });
}
