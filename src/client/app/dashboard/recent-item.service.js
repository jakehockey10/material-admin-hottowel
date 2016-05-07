(function () {
  'use strict';

  angular
    .module('app.dashboard')
    .service('RecentItemService', RecentItemService);

  RecentItemService.$inject = ['$resource'];

  /* @ngInject */
  function RecentItemService($resource) {
    this.getRecentItem = getRecentItem;

    ////////////////

    function getRecentItem(id, name, price) {
      var recentitemList = $resource("data/recent-items.json");

      return recentitemList.get ({
        id: id,
        name: name,
        price: price
      })
    }
  }

})();

