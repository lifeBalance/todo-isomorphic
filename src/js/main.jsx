// Bootstrap
window.$ = window.jQuery = require('jquery');
var bootstrapJS = require('bootstrap-sass'); // Bootstrap JavaScripts.

var React     = require('react');
var ReactDOM  = require('react-dom');
var ItemList  = require('./components/ItemList');
var itemStore = require('./stores/ItemStore');

var initialItems = itemStore.getItems();

function render() {
  ReactDOM.render(<ItemList items={initialItems} />, document.getElementById('container'));
  {/*  We could use just: ReactDOM.render(<ItemList/>, container);
    This is because all DOM elements with an `id` attribute, are
    put in the global scope. */}
}

itemStore.onChange(function (items) {
  initialItems = items;
  render();
});

render(); // Render before any changes.
