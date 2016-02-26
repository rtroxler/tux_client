import Ember from 'ember';
/* global Chart */

export default Ember.Component.extend({
  // Props
  monthlyData: false,
  legendMarkup: false,

  // Lifecycle Callbacks
  didRender: function() {
    this.createChart();
  },

  createChart: function() {
    let currentElement = this.get('element');
    let canvasContext = this.$(currentElement).find('.unit-graph-canvas')[0].getContext('2d');

    let chart = new Chart(canvasContext).Line(this.chartData(), this.chartOptions());

    this.set('legendMarkup', chart.generateLegend());
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
      }, {
        label: 'National average rate',
        fillColor: "rgba(220,220,220,0.5)",
        strokeColor: "rgba(220,220,220,3)",
        pointColor: "rgba(220,220,220,3)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        data: this.nationalData
      }]
    };
  },

  chartOptions: function() {
    return {
      legendTemplate : '<ul class="rate-graph-legend">'+
                         '<% for (var i=0; i<datasets.length; i++) { %>'+
                           '<li style="list-style-type: none">'+
                             '<span style=\"background-color:<%=datasets[i].fillColor%>\">&nbsp;&nbsp;&nbsp;</span>&nbsp;&nbsp;'+
                             '<% if (datasets[i].label) { %><%= datasets[i].label %><% } %>'+
                           '</li>'+
                         '<% } %>'+
                       '</ul>'
    };
  }
});
