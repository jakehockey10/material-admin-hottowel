(function() {
  'use strict';

  angular
    .module('app.widgets')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'widgets',
        config: {
          url: '/widgets',
          templateUrl: 'app/widgets/common.html',
          title: 'Widgets'
        }
      },
      {
        state: 'widgets.widgets',
        config: {
          url: '/widgets',
          templateUrl: 'app/widgets/widgets.html'
        }
      },
      {
        state: 'widgets.widget-templates',
        config: {
          url: '/widget-templates',
          templateUrl: 'app/widgets/widget-templates.html'
        }
      }
    ];
  }
})();
