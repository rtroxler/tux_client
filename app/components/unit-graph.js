import Ember from 'ember';
/* global Chart */

export default Ember.Component.extend({
  // Props
  monthlyData: false,
  legendMarkup: false,
  searchedUnitSize: '',
  searchedLocation: '',
  chart: false,

  // Lifecycle Callbacks
  didInsertElement: function() {
    console.log('didInsertElement');

    this.createChart();

    this.set('legendMarkup', chart.generateLegend());
  },

  willUpdate: function() {
    console.debug('removing canvas');
    this.getCanvasElement().remove();

    console.debug('add canvas back in');
    this.$(this.get('element')).append('<canvas class="unit-graph-canvas"></canvas>');

    console.debug('createChart');
    this.createChart();
  },

  clearCanvas: function() {
    let canvasContext = this.getCanvasContext(),
        canvasElement = this.getCanvasElement();

    canvasContext.clearRect(0, 0, canvasElement.width, canvasElement.height);
  },

  getCanvasElement: function() {
    let currentElement = this.get('element');

    return this.$(currentElement).find('.unit-graph-canvas')[0];
  },

  getCanvasContext: function() {
    return this.getCanvasElement().getContext('2d');
  },

  createChart: function() {
    let canvasContext = this.getCanvasContext();
    let chart = new Chart(canvasContext).Line(this.chartData(), this.chartOptions());
    this.set('chart', chart);
  },

  chartData: function() {
    return {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [{
        label: `Average Rates for ${this.searchedUnitSize} in ${this.searchedLocation}`,
        fillColor: "rgba(50, 124, 203, 0.6)",
        strokeColor: "rgba(40, 114, 193, 0.6)",
        pointColor: "rgba(40, 114, 193, 0.6)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(40, 114, 193, 0.8)",
        data: this.monthlyData
      }, {
        label: `National Average Rate for ${this.searchedUnitSize}`,
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
                             '<span style=\"background-color:<%=datasets[i].fillColor%>\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;&nbsp;'+
                             '<% if (datasets[i].label) { %><%= datasets[i].label %><% } %>'+
                           '</li>'+
                         '<% } %>'+
                       '</ul><div class="clear"></div>'
    };
  }
});
