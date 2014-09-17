'use strict';
angular
  .module( 'app.gradients', [] )
  .controller( 'GradientsCtrl', function ( $scope ) {

    $scope.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          overrides: function( ctx ) {
            var fillGradient = ctx.createLinearGradient(0, 0, 0, 400);
            fillGradient.addColorStop(0, 'rgba(247,70,74,0.4)');
            fillGradient.addColorStop(1, 'rgba(247,70,74,0.6)');
            var highlightGradient = ctx.createLinearGradient(0, 0, 0, 400);
            highlightGradient.addColorStop(1, 'rgba(247,70,74,0.8)');
            highlightGradient.addColorStop(0, 'rgba(247,70,74,0.5)');
            return {
              fillColor: fillGradient,
              highlightFill: highlightGradient
            };
          },
          label: 'My First dataset',
          fillColor: 'rgba(247,70,74,0.5)',
          strokeColor: 'rgba(247,70,74,0.6)',
          highlightFill: 'rgba(247,70,74,0.8)',
          highlightStroke: 'rgba(247,70,74,0.9)',
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          overrides: function( ctx ) {
            console.log(ctx);
            var fillGradient = ctx.createLinearGradient(0, 0, 0, 400);
            fillGradient.addColorStop(0, 'rgba(151,187,205,0.5)');
            fillGradient.addColorStop(1, 'rgba(151,187,205,0.7)');
            var highlightGradient = ctx.createLinearGradient(0, 0, 0, 400);
            highlightGradient.addColorStop(0, 'rgba(151,187,205,0.7)');
            highlightGradient.addColorStop(1, 'rgba(151,187,205,0.9)');
            return {
              fillColor: fillGradient,
              highlightFill: highlightGradient
            };
          },
          label: 'My Second dataset',
          fillColor: 'rgba(151,187,205,0.5)',
          strokeColor: 'rgba(151,187,205,0.8)',
          highlightFill: 'rgba(151,187,205,0.75)',
          highlightStroke: 'rgba(151,187,205,1)',
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    };

    $scope.options =  {

      // Sets the chart to be responsive
      responsive: true,

      //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
      scaleBeginAtZero : true,

      //Boolean - Whether grid lines are shown across the chart
      scaleShowGridLines : true,

      //String - Colour of the grid lines
      scaleGridLineColor : "rgba(0,0,0,.05)",

      //Number - Width of the grid lines
      scaleGridLineWidth : 1,

      //Boolean - If there is a stroke on each bar
      barShowStroke : true,

      //Number - Pixel width of the bar stroke
      barStrokeWidth : 2,

      //Number - Spacing between each of the X value sets
      barValueSpacing : 5,

      //Number - Spacing between data sets within X values
      barDatasetSpacing : 1,

      //String - A legend template
      legendTemplate : '<ul class="tc-chart-js-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
    };

    $scope.data1 = [
      {
        overrides: function( ctx ) {
          var fillGradient = ctx.createLinearGradient(0, 0, 0, 400);
          fillGradient.addColorStop(0, 'rgba(247,70,74,0.4)');
          fillGradient.addColorStop(1, 'rgba(247,70,74,0.6)');
          var highlightGradient = ctx.createLinearGradient(0, 0, 0, 400);
          highlightGradient.addColorStop(1, 'rgba(247,70,74,0.8)');
          highlightGradient.addColorStop(0, 'rgba(247,70,74,0.5)');
          return {
            color: fillGradient,
            highlight: highlightGradient
          };
        },
        value: 300,
        color:'#F7464A',
        highlight: '#FF5A5E',
        legendColor: 'purple',
        label: 'Red'
      },
      {
        value: 50,
        color: '#46BFBD',
        highlight: '#5AD3D1',
        legendColor: 'purple',
        label: 'Green'
      },
      {
        value: 100,
        color: '#FDB45C',
        highlight: '#FFC870',
        legendColor: 'purple',
        label: 'Yellow'
      }
    ];

    $scope.options1 =  {

      // Sets the chart to be responsive
      responsive: true,

      //Boolean - Whether we should show a stroke on each segment
      segmentShowStroke : true,

      //String - The colour of each segment stroke
      segmentStrokeColor : '#fff',

      //Number - The width of each segment stroke
      segmentStrokeWidth : 2,

      //Number - The percentage of the chart that we cut out of the middle
      percentageInnerCutout : 0, // This is 0 for Pie charts

      //Number - Amount of animation steps
      animationSteps : 100,

      //String - Animation easing effect
      animationEasing : 'easeOutBounce',

      //Boolean - Whether we animate the rotation of the Doughnut
      animateRotate : true,

      //Boolean - Whether we animate scaling the Doughnut from the centre
      animateScale : false,

      //String - A legend template
      legendTemplate : '<ul class="tc-chart-js-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].legendColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'

    };

  });