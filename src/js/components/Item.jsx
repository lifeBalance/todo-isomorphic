var React   = require('react');
var action  = require('../actions/ItemActionCreator');

var Item = module.exports = React.createClass({
  delete: function (event) {
    event.preventDefault();
    action.delete(this.props.item);
  },
  toggleDone: function (event) {
    event.preventDefault();

    if (this.props.item.done) {
      action.doItem(this.props.item);
    } else {
      action.undoItem(this.props.item);
    }
  },
  render: function () {
    var buttonClass, buttonText;

    if (this.props.item.done) {
      buttonClass = 'btn btn-xs btn-default';
      buttonText = 'Undo';
    } else {
      buttonClass = 'btn btn-xs btn-success';
      buttonText = 'Done';
    }

    return (
      <div className='row'>
        <div className="col-md-1">
          <form action="" onSubmit={this.delete}>
            <button className='btn btn-xs btn-danger'>Delete</button>
          </form>
        </div>

        <div className="col-md-1">
          <form action="" onSubmit={this.toggleDone}>
            <button className={buttonClass}>{buttonText}</button>
          </form>
        </div>

        <div className='col-md-6'>
          <h4 className={this.props.item.done? 'strikethrough' : ''}>
            {this.props.item.name}
          </h4>
        </div>
      </div>
    );
  }
});
