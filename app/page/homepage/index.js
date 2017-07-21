import Backbone from 'backbone';
import $ from 'jquery';
import Router from '../../routers/router';
var DashboardApp = require("../dashboard/index").default;
// add this to admin application
//require('bootstrap/dist/css/bootstrap.css');

$(() => {
  new Router();
  // require.ensure([], require => {
  //   const DashboardApp = require('../dashboard/index').default;
  //   new DashboardApp();
  // });
  new DashboardApp();
  Backbone.history.start();
});
