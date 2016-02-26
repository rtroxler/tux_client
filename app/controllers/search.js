import Ember from 'ember';

export default Ember.Controller.extend({
  currentRateData: false,
  loadingRateData: false,

  actions: {
    updateCurrentRateData: function(formSubmission) {
      this.set('loadingRateData', true);

      let queryParams = {
        'unit_dimensions': formSubmission.size,
        'city_name': formSubmission.location
      }

      this.store.query('rate-data', queryParams).then((rates) => {
        this.set('loadingRateData', false);
        this.set('currentRateData', rates);

        console.debug('Info loaded');
      }, function() {
        console.debug('Yeah that did not work');
      });
    }
  }
});
