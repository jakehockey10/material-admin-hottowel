(function () {
  'use strict';

  angular
    .module('app.layout')
    .controller('SidebarController', SidebarController);

  SidebarController.$inject = ['dependency'];

  /* @ngInject */
  function SidebarController(dependency) {
    var vm = this;
    vm.title = 'SidebarController';

    // Close sidebar on click
    vm.sidebarState = sidebarState;

    activate();

    ////////////////

    function activate() {
      initializeSidebarToggle();
    }

    function initializeSidebarToggle() {
      // By default Sidebars are hidden in boxed layout and
      // in wide layout only the right sidebar is hidden.
      vm.sidebarToggle = {
        left: false,
        right: false
      };
    }

    function sidebarState(event) {
      if (!angular.element(event.target).parent().hasClass('active')) {
        vm.sidebarToggle.left = false;
      }
    }

  }

})();



// (function() {
//   'use strict';
//
//   angular
//     .module('app.layout')
//     .controller('SidebarController', SidebarController);
//
//   SidebarController.$inject = ['$state', 'routerHelper'];
//   /* @ngInject */
//   function SidebarController($state, routerHelper) {
//     var vm = this;
//     var states = routerHelper.getStates();
//     vm.isCurrent = isCurrent;
//
//     activate();
//
//     function activate() { getNavRoutes(); }
//
//     function getNavRoutes() {
//       vm.navRoutes = states.filter(function(r) {
//         return r.settings && r.settings.nav;
//       }).sort(function(r1, r2) {
//         return r1.settings.nav - r2.settings.nav;
//       });
//     }
//
//     function isCurrent(route) {
//       if (!route.title || !$state.current || !$state.current.title) {
//         return '';
//       }
//       var menuName = route.title;
//       return $state.current.title.substr(0, menuName.length) === menuName ? 'current' : '';
//     }
//   }
// })();
