import Ember from 'ember';
/* global Chart */

export default Ember.Component.extend({
  // Props
  monthlyData: [],

  // Lifecycle Callbacks
  didRender: function() {
    this.createChart();
  },

  // Custom
  createChart: function() {
    let currentElement = this.get('element');
    let canvasContext = this.$(currentElement).find('.unit-graph-canvas')[0].getContext('2d');

    new Chart(canvasContext).Line(this.chartData());
  },

  chartData: function() {
    return {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July',
               'August', 'September', 'October', 'November', 'December'],
      datasets: [{
        label: 'Average Unit Rates in SOME PLACE, STATE',
        data: this.monthlyData
      }]
    };
  }
});
