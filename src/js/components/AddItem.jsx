var React   = require('react');
var action  = require('../actions/ItemActionCreator');

var AddItem = module.exports = React.createClass({
  getInitialState: function () {
    return {value: ''};
  },
  handleChange: function (event) {
    this.setState({value: event.target.value});
  },
  addItem: function (event) {
    event.preventDefault();
    console.log('Adding Item!', this.state.value);

    action.add({
      name: this.state.value
    });

    this.setState({value: ''}); // Resetting state of the input
  },
  render: function () {
    return (
      <div className="addItem">
        <form action="" onSubmit={this.addItem}>
          <input type="text" value={this.state.input} onChange={this.handleChange} />
          <button>Add Item</button>
        </form>
      </div>
    );
  }
});
