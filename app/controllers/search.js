import Ember from 'ember';

export default Ember.Controller.extend({
  currentUnitData: false,
  loadingUnitData: false,

  actions: {
    updateCurrentUnitData: function(formSubmission) {
      this.set('loadingUnitData', true);

      let queryParams = {
        'unit_dimensions': formSubmission.size,
        'city_name': formSubmission.location
      }

      this.store.query('rate-data', queryParams).then((rates) => {
        this.set('loadingUnitData', false);
        this.set('currentUnitData', rates);

        console.debug('Info loaded');
      }, function() {
        console.debug('Yeah that did not work');
      });
    }
  }
});
