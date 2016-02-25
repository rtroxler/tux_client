import Ember from 'ember';

export default Ember.Controller.extend({
  currentUnitData: false,
  loadingUnitData: false,

  actions: {
    updateCurrentUnitData: function(formSubmission) {
      console.debug(formSubmission);

      let unitData = this.store.createRecord('unit-data', {
        january: 230.76,
        february: 225.64,
        march: 232.04,
        april: 225.75,
        may: 230.91,
        june: 229.13,
        july: 225.28,
        august: 231.93,
        september: 230.91,
        october: 229.99,
        november: 225.26,
        december: 230.82,

        processingTime: 0.666,
        rentalsProcessedCount: 8716
      });

      this.set('loadingUnitData', true);
      this.set('currentUnitData', unitData);
      setTimeout(() => {
        this.set('loadingUnitData', false);
      }, 2000);
    }
  }
});
