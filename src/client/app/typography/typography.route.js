(function() {
  'use strict';

  angular
    .module('app.typography')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'typography',
        config: {
          url: '/typography',
          templateUrl: 'app/typography/typography.html',
          title: 'Typography',
          settings: {
            nav: 2,
            content: '<i class="fa fa-lock"></i> Typography'
          }
        }
      }
    ];
  }
})();
