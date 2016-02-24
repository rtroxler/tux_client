import Ember from 'ember';

export default Ember.Component.extend({
  searchResultsLoading: false,

  actions: {
    search: function() {
      let unitDimensions = this.get('unitDimensions'),
          unitLocation   = this.get('unitLocation');

      this.set('searchResultsLoading', true);

      alert(`unitDimensions: ${unitDimensions}, unitLocation: ${unitLocation}`);
    }
  }
});
