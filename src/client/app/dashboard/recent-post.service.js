(function () {
  'use strict';

  angular
    .module('app.dashboard')
    .service('RecentPostService', RecentPostService);

  RecentPostService.$inject = ['$resource'];

  /* @ngInject */
  function RecentPostService($resource) {
    this.getRecentPost = getRecentPost;

    ////////////////

    function getRecentPost(img, user, text) {
      var recentpostList = $resource("data/messages-notifications.json");

      return recentpostList.get({
        img: img,
        user: user,
        text: text
      })
    }
  }

})();

