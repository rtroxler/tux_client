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
      this.set('nationalRateData', false);
      this.set('currentRateData', false);
      this.set('loadingRateData', true);
      this.set('errorMessage', '');
      this.set('errorLoadingData', false);

      let queryParams = {
        'unit_dimensions': formSubmission.size,
        'city_name': formSubmission.location
      };

      this.store.query('rate-data', queryParams).then((rates) => {
        this.set('loadingRateData', false);
        this.set('currentRateData', rates);
        this.set('searchedLocation', formSubmission.location);
        this.set('searchedUnitSize', formSubmission.size);

        this.store.query('national-rate-data', { unit_dimensions: formSubmission.size }).then((nattyRates) => {
          this.set('nationalRateData', nattyRates);

          console.log('Loaded up that fuckin data');
        }, () => {
          console.log('Unable to load national rate data');
        });
      }, () => {
        this.set('loadingRateData', false);
        this.set('errorMessage', 'There was a problem loading the requested rate data');
        this.set('errorLoadingData', true);
        this.set('currentRateData', false);
      });
    }
  }
});
