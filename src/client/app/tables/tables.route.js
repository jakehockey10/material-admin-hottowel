(function() {
  'use strict';

  angular
    .module('app.tables')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'tables',
        config: {
          url: '/tables',
          templateUrl: 'app/headers/common.html'
        }
      },
      {
        state: 'tables.tables',
        config: {
          url: '/tables',
          templateUrl: 'app/tables/tables.html'
        }
      },
      {
        state: 'tables.data-table',
        config: {
          url: '/data-table',
          templateUrl: 'app/tables/data-table.html'
        }
      }
    ];
  }
})();
