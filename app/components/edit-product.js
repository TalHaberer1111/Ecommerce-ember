import Ember from 'ember';

export default Ember.Component.extend({
  changeProduct: false,
  actions: {
    updateProductForm(){
      this.set('changeProduct', true);
    },
    hideChangeProductForm() {
      this.set('changeProduct', false);
    },
    updateProduct(product) {
      var params = {
        title: this.get('title'),
        image: this.get('image'),
        description: this.get('description'),
        cost: parseInt(this.get('cost')),
        category: this.get('category')
    };
    this.set('changeProduct', false);
    this.sendAction('updateProduct', product, params);
    }
  }
});
