import Backbone from 'backbone';
import $ from 'jquery';
import Router from '../../routers/router';

$(() => {
  new Router();

  Backbone.history.start();
});
