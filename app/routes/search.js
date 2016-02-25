import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    let unitData = this.store.createRecord('unit-data', {
      january: 2,
      february: 12,
      march: 2,
      april: 2,
      may: 2,
      june: 2,
      july: 2,
      august: 2,
      september: 2,
      october: 2,
      november: 2,
      december: 2,
    });

    return unitData;
  }
});
