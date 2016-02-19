var React   = require('react');

var ItemList = module.exports = React.createClass({
  render: function () {
    return (
      <div>
        <h1>To-Do List</h1>
        <div>
          {this.props.items.map(function (item, index) {
            return (<div>{item.name}</div>);
          })}
        </div>
      </div>
    );
  }
});
