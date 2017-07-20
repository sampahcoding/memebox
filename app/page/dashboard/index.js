import Backbone from 'backbone';
import $ from 'jquery';
var React = require("react");
var ReactDOM = require("react-dom");
var App = require("../../components/App").default;
import Router from '../../routers/router';

export default Backbone.Router.extend({
  routes: {
    'dashboard': 'dashboard'
  },

  dashboard() {
    var element = <div>
                      <h1>Hello, Ana</h1>
                      <p>This is dashboard page</p>
                    </div>;
    ReactDOM.render(
      element,
      document.getElementById('content')
    );
  }
});
