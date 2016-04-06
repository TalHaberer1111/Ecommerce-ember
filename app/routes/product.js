import Ember from 'ember';

export default Ember.Route.extend({
  shoppingCart: Ember.inject.service(),

  model(params) {
    return this.store.findRecord('product', params.product_id);
  },
  actions: {
    updateProduct(product, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          product.set(key,params[key]);
        }
      });
      product.save();
      this.transitionTo('index');
    },
    destroyProduct(product) {
      var category = product.get('category');
      product.destroyRecord().then(function() {
        category.save();
      });
      this.transitionTo('index');
    }
  }
});
