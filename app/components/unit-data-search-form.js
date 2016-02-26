import Ember from 'ember';
export default Ember.Component.extend({
  loading: false,
  updateDataAction: false,
  cities: [],
  store: Ember.inject.service(),
  loadCities: true,

  actions: {
    search: function() {
      let formData = {
        size: this.get('unitDimensions'),
        location: this.get('unitLocation')
      };

      this.sendAction('updateDataAction', formData);
      this.set('cities', []);
      this.set('loadCities', false);
    },

    postKey: function() {
      this.set('loadCities', true);
      Ember.run.debounce(this, this.fetchCities, 250);
    }.observes('unitDimensions')

  },

  fetchCities: function() {
    let store = this.get('store');

    console.log(this.get('unitDimensions'));
    store.query('city-data', { unit_dimensions: this.get('unitDimensions') }).then( (result) => {
      if (this.get('loadCities')) {
        this.set('cities', result);
      }
    });
  }
});
