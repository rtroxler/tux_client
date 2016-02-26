import Ember from 'ember';

export default Ember.Component.extend({
  loading: false,
  updateDataAction: false,

  actions: {
    search: function() {
      let formData = {
        size: this.get('unitDimensions'),
        location: this.get('unitLocation')
      };

      this.sendAction('updateDataAction', formData);
    }
  }
});
