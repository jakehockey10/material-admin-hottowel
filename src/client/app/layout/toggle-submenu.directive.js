(function () {
  'use strict';

  angular
    .module('app.layout')
    .directive('toggleSubmenu', toggleSubmenu);

  // toggleSubmenu.$inject = ['dependency'];

  /* @ngInject */
  function toggleSubmenu(/*dependency*/) {
    var directive = {
      link: link,
      restrict: 'A',
    };
    return directive;

    function link(scope, element, attrs) {
      element.click(function(){
        element.next().slideToggle(200);
        element.parent().toggleClass('toggled');
      });
    }
  }

})();

