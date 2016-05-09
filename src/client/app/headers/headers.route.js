(function() {
  'use strict';

  angular
    .module('app.headers')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'headers',
        config: {
          url: '/headers',
          templateUrl: 'app/headers/common-2.html'
        }
      },
      {
        state: 'headers.textual-menu',
        config: {
          url: '/textual-menu',
          templateUrl: 'app/headers/textual-menu.html'
        }
      },
      {
        state: 'headers.image-logo',
        config: {
          url: '/image-logo',
          templateUrl: 'app/headers/image-logo.html'
        }
      },
      {
        state: 'headers.mainmenu-on-top',
        config: {
          url: '/mainmenu-on-top',
          templateUrl: 'app/headers/mainmenu-on-top.html'
        }
      }
    ];
  }
})();
