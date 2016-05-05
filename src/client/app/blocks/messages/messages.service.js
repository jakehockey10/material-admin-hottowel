(function () {
  'use strict';

  angular
    .module('blocks.messages')
    .service('MessagesService', MessagesService);

  MessagesService.$inject = ['$resource'];

  /* @ngInject */
  function MessagesService($resource) {
    this.getMessage = getMessage;

    ////////////////

    function getMessage(img, user, text) {
      var gmList = $resource('data/message-notifications.json');
      return gmList.get({
        img: img,
        user: user,
        text: text
      });
    }
  }

})();

