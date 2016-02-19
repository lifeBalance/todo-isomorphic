var React   = require('react');
var action  = require('../actions/ItemActionCreator');

var Item = module.exports = React.createClass({
  delete: function (event) {
    event.preventDefault();
    action.delete(this.props.item);
  },
  render: function () {
    return (
      <div className='row'>
        <div className='col-md-6'>
          <h4 className={this.props.item.done? 'strikethrough' : ''}>
            {this.props.item.name}
          </h4>
        </div>

        <div className="col-md-6">
          <form action="" onSubmit={this.delete}>
            <button>&times;</button>
          </form>
        </div>
      </div>
    );
  }
});
