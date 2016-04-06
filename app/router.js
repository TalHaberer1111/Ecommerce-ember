import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('store');
  this.route('seller');
  this.route('about');
  this.route('contact');
  this.route('cart-display');
  this.route('category', {path: 'category/:category_id'});
  this.route('product');
});

export default Router;
