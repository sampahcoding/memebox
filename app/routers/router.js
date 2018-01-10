import Backbone from 'backbone';
import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';

export default Backbone.Router.extend({
  routes: {
    '': 'home',
    'main_app_part': 'mainAppPart',
    'heavy(/:heavy_param)': 'heavy',
    '*handleMissingRoute': 'handle404',
  },

  home() {
    var element =  <App name="Anas" />;

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
