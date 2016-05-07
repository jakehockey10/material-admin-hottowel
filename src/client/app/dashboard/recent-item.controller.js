(function () {
  'use strict';

  angular
    .module('app.dashboard')
    .controller('RecentItemController', RecentItemController);

  RecentItemController.$inject = ['RecentItemService'];

  /* @ngInject */
  function RecentItemController(RecentItemService) {
    var vm = this;
    vm.title = 'RecentItemController';

    activate();

    ////////////////

    function activate() {
      
    }
  }

})();


