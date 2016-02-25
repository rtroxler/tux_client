import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    let actualUnitData = this.store.findAll('unit-data');

    return actualUnitData;
  }
});
