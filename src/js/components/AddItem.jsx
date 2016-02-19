var React = require('react');

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
