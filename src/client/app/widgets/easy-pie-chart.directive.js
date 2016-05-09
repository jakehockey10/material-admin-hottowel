(function () {
  'use strict';

  angular
    .module('app.widgets')
    .directive('easyPieChart', easyPieChart);

  // easyPieChart.$inject = ['dependency'];

  /* @ngInject */
  function easyPieChart(/*dependency*/) {
    var directive = {
      link: link,
      restrict: 'A'
    };
    return directive;

    function link(scope, element, attrs) {

      function easyPieChart(selector, trackColor, scaleColor, barColor, lineWidth, lineCap, size) {
        $(selector).easyPieChart({
          trackColor: trackColor,
          scaleColor: scaleColor,
          barColor: barColor,
          lineWidth: lineWidth,
          lineCap: lineCap,
          size: size
        });
      }

      easyPieChart('.main-pie', 'rgba(255,255,255,0.2)', 'rgba(255,255,255,0.5)', 'rgba(255,255,255,0.7)', 7, 'butt', 148);
      easyPieChart('.sub-pie-1', '#eee', '#ccc', '#2196F3', 4, 'butt', 95);
      easyPieChart('.sub-pie-2', '#eee', '#ccc', '#FFC107', 4, 'butt', 95);

    }
  }

})();

