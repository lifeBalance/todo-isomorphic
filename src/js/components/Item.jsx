var React   = require('react');

var Item = module.exports = React.createClass({
  render: function () {
    return (
      <div>
        <h4 className={this.props.item.done? 'strikethrough' : ''}>
          {this.props.item.name}
        </h4>
      </div>
    );
  }
});
