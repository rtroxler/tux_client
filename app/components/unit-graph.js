import Ember from 'ember';
/* global Chart */

export default Ember.Component.extend({
  // Props
  monthlyData: false,

  // Lifecycle Callbacks
  didRender: function() {
    this.createChart();
  },

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
        fillColor: "rgba(50, 124, 203, 0.6)",
        strokeColor: "rgba(40, 114, 193, 0.6)",
        pointColor: "rgba(40, 114, 193, 0.6)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(40, 114, 193, 0.8)",
        data: this.monthlyData
      }]
    };
  }
});
