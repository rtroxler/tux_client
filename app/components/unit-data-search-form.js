import Ember from 'ember';

export default Ember.Component.extend({
  loading: false,
  updateDataAction: false,

  actions: {
    search: function() {
      let unitDimensions = this.get('unitDimensions'),
          unitLocation   = this.get('unitLocation');

      this.sendAction('updateDataAction', { size: unitDimensions, location: unitLocation });

      // alert(`unitDimensions: ${unitDimensions}, unitLocation: ${unitLocation}`);
    }
  }
});
