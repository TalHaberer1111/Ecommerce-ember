import Ember from 'ember';

export default Ember.Component.extend({
  addNewCategory: false,
  actions: {
    categoryFormShow(){
      this.set('addNewCategory', true);
    },
    hideNewCategoryForm() {
      this.set('addNewCategory', false);
    },
    saveCategory() {
      var params = {
        name: this.get('title')
    };
    this.set('addNewCategory', false);
    this.sendAction('saveCategory', params);
    }
  }
});
