(function () {
  'use strict';

  angular
    .module('app.dashboard')
    .controller('BestSellingController', BestSellingController);

  BestSellingController.$inject = ['BestSellingService'];

  /* @ngInject */
  function BestSellingController(BestSellingService) {
    var vm = this;
    vm.title = 'BestSellingController';

    // Get Best Selling widget Data
    this.img = BestSellingService.img;
    this.name = BestSellingService.name;
    this.range = BestSellingService.range;

    this.bsResult = BestSellingService.getBestSelling(this.img, this.name, this.range);

    activate();

    ////////////////

    function activate() {

    }
  }

})();

