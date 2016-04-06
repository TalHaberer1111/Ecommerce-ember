import Ember from 'ember';

export default Ember.Component.extend({
  addNewProduct: false,
  actions: {
    productFormShow(){
      this.set('addNewProduct', true);
    },
    hideNewProductForm() {
      this.set('addNewProduct', false);
    },
    saveProduct(product) {
      var params = {
        title: this.get('title'),
        image: this.get('image'),
        description: this.get('description'),
        cost: parseInt(this.get('cost')),
        category: this.get('category')
    };
    this.set('addNewProduct', false);
    this.sendAction('saveProduct', product, params);
    }
  }
});
