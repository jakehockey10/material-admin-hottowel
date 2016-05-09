(function () {
  'use strict';

  angular
    .module('app.layout')
    .directive('toggleSidebar', toggleSidebar);

  // toggleSidebar.$inject = ['dependency'];

  /* @ngInject */
  function toggleSidebar(/*dependency*/) {
    var directive = {
      link: link,
      restrict: 'A',
      scope: {
        modelLeft: '=',
        modelRight: '='
      }
    };
    return directive;

    function link(scope, element, attrs) {

      element.on('click', function(){

        if (element.data('target') === 'mainmenu') {
          if (scope.modelLeft === false) {
            scope.$apply(function(){
              scope.modelLeft = true;
            });
          }
          else {
            scope.$apply(function(){
              scope.modelLeft = false;
            });
          }
        }

        if (element.data('target') === 'chat') {
          if (scope.modelRight === false) {
            scope.$apply(function(){
              scope.modelRight = true;
            });
          }
          else {
            scope.$apply(function(){
              scope.modelRight = false;
            });
          }

        }
      });

    }
  }

})();

