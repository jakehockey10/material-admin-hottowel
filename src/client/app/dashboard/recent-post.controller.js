(function () {
  'use strict';

  angular
    .module('app.dashboard')
    .controller('RecentPostController', RecentPostController);

  RecentPostController.$inject = ['RecentPostService'];

  /* @ngInject */
  function RecentPostController(RecentPostService) {
    var vm = this;
    vm.title = 'RecentPostController';

    //Get Recent Posts Widget Items
    vm.img = RecentPostService.img;
    vm.user = RecentPostService.user;
    vm.text = RecentPostService.text;

    activate();

    ////////////////

    function activate() {
      vm.rpResult = RecentPostService.getRecentPost(vm.img, vm.user, vm.text);
    }
  }

})();

