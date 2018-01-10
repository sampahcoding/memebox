import Backbone from 'backbone';
import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../components/App';
import Menu from '../../components/Menu';
import Router from '../../routers/router';

export default Backbone.Router.extend({
  routes: {
    'test': 'test'
  },

  test() {
    var element = <div>
                    <h1>Hello, Ana</h1>
                    <p>This is test page</p>
                  </div>;
    ReactDOM.render(
      element,
      document.getElementById('content')
    );

    ReactDOM.render(
      <Menu status="true" />,
      document.getElementById('menus')
    );
  }
});
