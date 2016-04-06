import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  product: DS.hasMany('category', {async: true})
});
