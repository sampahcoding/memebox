import Backbone from 'backbone';
import $ from 'jquery';
var React = require("react");
var ReactDOM = require("react-dom");
var App = require("../components/App").default;

export default Backbone.Router.extend({
  routes: {
    '': 'home',
    'main_app_part': 'mainAppPart',
    'heavy(/:heavy_param)': 'heavy',
    '*handleMissingRoute': 'handle404',
  },

  home() {
    var element = <div>
                      <h1>Hello, This is homepage</h1>
                      <App name="Ana" />
                    </div>;
    ReactDOM.render(
      element,
      document.getElementById('content')
    );
  },

  heavy(heavy_param) {
    $('#app').html(`You're viewing that heavy app, heavy param from the URL is: ${heavy_param}`);
  },

  handle404() {
    alert('404');
  }
});
