(function () {
  'use strict';

  angular
    .module('app.widgets')
    .directive('sparklinePieChart', sparklinePieChart);

  // sparklinePieChart.$inject = ['dependency'];

  /* @ngInject */
  function sparklinePieChart(/*dependency*/) {
    var directive = {
      link: link,
      restrict: 'A',
    };
    return directive;

    function link(scope, element, attrs) {

      function sparklinePie(select, values, width, height, sliceColors) {
        $(select).sparkline(values, {
          type: 'pie',
          width: width,
          height: height,
          sliceColors: sliceColors,
          offset: 0,
          borderWidth: 0
        });
      }

      if ($('.stats-pie')[0]) {
        var select = '.stats-pie';
        var values = [20, 35, 30, 5];
        var width = 45;
        var height = 45;
        var sliceColors = ['#fff', 'rgba(255,255,255,0.7)', 'rgba(255,255,255,0.4)', 'rgba(255,255,255,0.2)'];
          sparklinePie(select, values, width, height, sliceColors);
      }

    }
  }

})();

