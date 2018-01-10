import Backbone from 'backbone';
import $ from 'jquery';
import Router from '../../routers/router';
import DashboardApp from '../dashboard/index';
import TestApp from '../test/index';
// add this to admin application
//require('bootstrap/dist/css/bootstrap.css');

$(() => {
  new Router();
  // require.ensure([], require => {
  //   const DashboardApp = require('../dashboard/index').default;
  //   new DashboardApp();
  // });
  new DashboardApp();
  new TestApp();
  Backbone.history.start();
});
