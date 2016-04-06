import Ember from 'ember';

export default Ember.Route.extend({
  shoppingCart: Ember.inject.service(),

  model() {
    return this.store.findAll('category');
  },

  actions: {
    saveProduct(params) {
     var newProduct = this.store.createRecord('product', params);
     newProduct.save();
     this.transitionTo('index');
   },
   saveCategory(params) {
     var newCategory = this.store.createRecord('category', params);
     newCategory.save();
     this.transitionTo('index');
   }
 }
});
