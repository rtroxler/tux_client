import Ember from 'ember';

export default Ember.Controller.extend({
  errorLoadingData: false,
  errorMessage: '',
  currentRateData: false,
  nationalRateData: false,
  loadingRateData: false,
  searchedLocation: '',
  searchedUnitSize: '',

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
        this.set('searchedLocation', formSubmission.location);
        this.set('searchedUnitSize', formSubmission.size);
      }, () => {
        this.set('loadingRateData', false);
        this.set('errorMessage', 'There was a problem loading the requested rate data');
        this.set('errorLoadingData', true);
        this.set('currentRateData', false);
      });
    }
  }
});
