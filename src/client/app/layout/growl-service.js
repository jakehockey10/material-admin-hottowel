(function () {
  'use strict';

  angular
    .module('app.layout')
    .service('GrowlService', GrowlService);

  // GrowlService.$inject = ['dependency'];

  /* @ngInject */
  function GrowlService(/*dependency*/) {
    this.growl = growl;

    ////////////////

    function growl(message, type) {
      $.notify(
        {
          message: message
        },
        {
          type: type,
          allow_dismiss: false,
          label: 'Cancel',
          className: 'btn-xs btn-inverse',
          placement: {
            from: 'top',
            align: 'right'
          },
          delay: 2500,
          animate: {
            enter: 'animated bounceIn',
            exit: 'animated bounceOut'
          },
          offset: {
            x: 20,
            y: 85
          }
        });
    }
  }

})();

