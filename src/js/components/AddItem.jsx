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
      <form action="" onSubmit={this.addItem} className="form-inline">
        <button className='btn btn-primary'>Add Item</button>

        <div className="form-group">
          <input type="text" className='form-control' value={this.state.value} onChange={this.handleChange} />
        </div>
      </form>
    );
  }
});
