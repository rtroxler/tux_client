import Ember from 'ember';

export default Ember.Controller.extend({
  currentUnitData: false,
  loadingUnitData: false,

  actions: {
    updateCurrentUnitData: function(formSubmission) {
      this.set('loadingUnitData', true);

      this.store.findAll('unit-data').then((units) => {
        this.set('loadingUnitData', false);
        this.set('currentUnitData', units);

        console.debug('Info loaded');
      });
    }
  }
});
