(function () {
  'use strict';

  angular
    .module('app')
    .controller('AppController', AppController);

  AppController.$inject = ['$timeout', '$state', '$scope', 'GrowlService'];

  /* @ngInject */
  function AppController($timeout, $state, $scope, GrowlService) {
    var vm = this;
    vm.title = 'AppController';

    // Close sidebar on click
    vm.sidebarState = sidebarState;

    activate();

    ////////////////

    function activate() {
      welcomeMessage();
      detectMobileBrowser();
      initializeLayoutType();
      // For Mainmenu Active Class
      vm.$state = $state;
      initializeListView();
      initializeBlog();
      initializeSidebarToggle();
    }

    function welcomeMessage() {
      // Welcome Message TODO: Change to current user when that's working
      GrowlService.growl('Welcome back Mallinda!', 'inverse');
    }

    function detectMobileBrowser() {
      // Detect Mobile Browser
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        angular.element('html').addClass('ismobile');
      }
    }

    function initializeLayoutType() {
      // By default template has a boxed layout
      vm.layoutType = localStorage.getItem('ma-layout-status');
    }

    function initializeListView() {
    // Listview Search (Check listview pages)
      vm.listviewSearchState = false;

      vm.lvSearch = function () {
        vm.listviewSearchState = true;
      };

      // Listview menu toggle in small screens
      vm.lvMenuState = false;
    }

    function initializeBlog(){
      // Blog
      vm.wallCommenting = [];
      vm.wallImage = false;
      vm.wallVideo = false;
      vm.wallLink = false;
    }

    function initializeSidebarToggle() {
      // By default Sidebars are hidden in boxed layout and
      // in wide layout only the right sidebar is hidden.
      vm.sidebarToggle = {
        left: false,
        right: false
      };
    }

    function sidebarState(event) {
      if (!angular.element(event.target).parent().hasClass('active')) {
        vm.sidebarToggle.left = false;
      }
    }

  }

})();

