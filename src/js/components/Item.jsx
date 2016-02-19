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
    var buttonClass, buttonText, taskText;

    if (this.props.item.done) {
      buttonClass = 'btn btn-sm btn-default';
      buttonText = 'Undo';
      taskText = 'text-left lead col-xs-6 strikethrough';
    } else {
      buttonClass = 'btn btn-sm btn-success';
      buttonText = 'Done';
      taskText = 'text-left lead col-xs-6';
    }

    return (
      <table className='table table-responsive'>
        <tbody>
          <tr>
            <td className={taskText}>
              {this.props.item.name}
            </td>

            <td className='col-xs-2'>
              <form onSubmit={this.delete}>
                <button className='btn btn-sm btn-danger'>Delete</button>
              </form>
            </td>

            <td className='col-xs-2'>
              <form onSubmit={this.toggleDone}>
                <button className={buttonClass}>{buttonText}</button>
              </form>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
});
