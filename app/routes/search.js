import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [300, 300, 300, 200, 300, 300, 800, 300, 300, 300, 300, 300];

    // return  [
    //   { month: 'January', value: 2 },
    //   { month: 'February', value: 2 },
    //   { month: 'March', value: 2 },
    //   { month: 'April', value: 2 },
    //   { month: 'May', value: 2 },
    //   { month: 'June', value: 2 },
    //   { month: 'July', value: 2 },
    //   { month: 'August', value: 2 },
    //   { month: 'September', value: 2 },
    //   { month: 'October', value: 2 },
    //   { month: 'November', value: 2 },
    //   { month: 'December', value: 2 }
    // ];
  }
});
