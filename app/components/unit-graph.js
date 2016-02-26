import Ember from 'ember';
/* global Chart */

export default Ember.Component.extend({
  // Props
  monthlyData: false,
  legendMarkup: false,
  searchedUnitSize: '',
  searchedLocation: '',

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
      multiTooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= '$' + value %>",
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
