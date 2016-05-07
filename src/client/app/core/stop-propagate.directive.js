(function () {
  'use strict';

  angular
    .module('app.core')
    .directive('stopPropagateDirective', stopPropagateDirective);

  stopPropagateDirective.$inject = ['dependency'];

  /* @ngInject */
  function stopPropagateDirective(dependency) {
    var directive = {
      link: link,
      restrict: 'C',
    };
    return directive;

    function link(scope, element, attrs) {
      element.on('click', function(event){
        event.stopPropagation();
      });
    }
  }

})();

