var React   = require('react');
var Item    = require('./Item');
var AddItem = require('./AddItem');

var ItemList = module.exports = React.createClass({
  render: function () {
    return (
      <div>
        <h1 className='lead text-center'>To-Do List</h1>
        <div>
          {this.props.items.map(function (item, index) {
            return (<Item item={item} key={'item' + index} />);
          })}
        </div>

        <AddItem />
      </div>
    );
  }
});
