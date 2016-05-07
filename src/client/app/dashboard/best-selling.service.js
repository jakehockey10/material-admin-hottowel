(function () {
  'use strict';

  angular
    .module('app.dashboard')
    .service('BestSellingService', BestSellingService);

  BestSellingService.$inject = ['$resource'];

  /* @ngInject */
  function BestSellingService($resource) {
    this.getBestSelling = getBestSelling;

    ////////////////

    function getBestSelling(img, name, range) {
      var gbList = $resource("data/best-selling.json");

      return gbList.get({
        img: img,
        name: name,
        range: range
      });
    }
  }

})();

