import Backbone from 'backbone';
import $ from 'jquery';
import Router from '../../routers/router';

$(() => {
  new Router();
  require.ensure([], require => {
    const DashboardApp = require('../dashboard/index').default;
    new DashboardApp();
  });

  Backbone.history.start();
});
