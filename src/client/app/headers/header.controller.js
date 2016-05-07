(function () {
  'use strict';

  angular
    .module('app.headers')
    .controller('HeaderController', HeaderController);

  HeaderController.$inject = ['$timeout', 'MessagesService'];

  /* @ngInject */
  function HeaderController($timeout, MessagesService) {
    var vm = this;
    vm.title = 'HeaderController';

    vm.img = MessagesService.img;
    vm.user = MessagesService.user;
    vm.text = MessagesService.text;

    vm.messageResult = MessagesService.getMessage(vm.img, vm.user, vm.text);

    vm.openSearch = openSearch;
    vm.closeSearch = closeSearch;
    vm.clearNotification = clearNotification;
    vm.clearLocalStorage = clearLocalStorage;
    vm.fullScreen = fullScreen;
    vm.switchSkin = switchSkin;

    activate();

    ////////////////

    function activate(){
      initializeSkins();
    }

    function openSearch (){
      angular.element('#header').addClass('search-toggled');
      angular.element('#top-search-wrap').find('input').focus();
    }
    function closeSearch (){
      angular.element('#header').removeClass('search-toggled');
    }
    function clearNotification ($event) {
      $event.preventDefault();

      var x = angular.element($event.target).closest('.listview');
      var y = x.find('.lv-item');
      var z = y.size();

      angular.element($event.target).parent().fadeOut();

      x.find('.list-group').prepend('<i class="grid-loading hide-it"></i>');
      x.find('.grid-loading').fadeIn(1500);
      var w = 0;

      y.each(function(){
        var z = $(this);
        $timeout(function(){
          z.addClass('animated fadeOutRightBig').delay(1000).queue(function(){
            z.remove();
          });
        }, w+=150);
      });

      $timeout(function(){
        angular.element('#notifications').addClass('empty');
      }, (z*150)+200);
    }
    function clearLocalStorage () {

      //Get confirmation, if confirmed clear the localStorage
      swal({
        title: 'Are you sure?',
        text: 'All your saved localStorage values will be removed',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#F44336',
        confirmButtonText: 'Yes, delete it!',
        closeOnConfirm: false
      }, function(){
        localStorage.clear();
        swal('Done!', 'localStorage is cleared', 'success');
      });

    }
    function fullScreen () {
      //Launch
      function launchIntoFullscreen(element) {
        if(element.requestFullscreen) {
          element.requestFullscreen();
        } else if(element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        } else if(element.webkitRequestFullscreen) {
          element.webkitRequestFullscreen();
        } else if(element.msRequestFullscreen) {
          element.msRequestFullscreen();
        }
      }

      //Exit
      function exitFullscreen() {
        if(document.exitFullscreen) {
          document.exitFullscreen();
        } else if(document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if(document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        }
      }

      if (exitFullscreen()) {
        launchIntoFullscreen(document.documentElement);
      }
      else {
        launchIntoFullscreen(document.documentElement);
      }
    }

    function initializeSkins(){
      // Skin Switch
      vm.currentSkin = 'blue';
      vm.skinList = [
        'lightblue',
        'bluegray',
        'cyan',
        'teal',
        'green',
        'orange',
        'blue',
        'purple'
      ];
    }

    function switchSkin(color) {
      vm.currentSkin = color;
    }

  }

})();

