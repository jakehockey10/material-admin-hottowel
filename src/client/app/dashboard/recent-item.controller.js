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

    //Get Recent Items Widget Data
    vm.id = RecentItemService.id;
    vm.name = RecentItemService.name;
    vm.parseInt = RecentItemService.price;

    vm.riResult = RecentItemService.getRecentItem(vm.id, vm.name, vm.price);

    ////////////////

  }

})();


