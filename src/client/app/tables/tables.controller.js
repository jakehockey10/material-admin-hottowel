(function () {
  'use strict';

  angular
    .module('app.tables')
    .controller('TablesController', TablesController);

  TablesController.$inject = ['$filter', '$sce', /*'NgTableParams', */'TablesService'];

  /* @ngInject */
  function TablesController($filter, $sce, /*NgTableParams, */TablesService) {
    var vm = this;
    vm.title = 'TablesController';

    activate();

    ////////////////

    function activate() {
      var data = TablesService.data;

      //Basic Example
      vm.tableBasic = new NgTableParams({
        page: 1,            // show first page
        count: 10           // count per page
      }, {
        total: data.length, // length of data
        getData: function ($defer, params) {
          $defer.resolve(data.slice((params.page() - 1) * params.count(), params.page() * params.count()));
        }
      });

      //Sorting
      vm.tableSorting = new NgTableParams({
        page: 1,            // show first page
        count: 10,           // count per page
        sorting: {
          name: 'asc'     // initial sorting
        }
      }, {
        total: data.length, // length of data
        getData: function($defer, params) {
          // use build-in angular filter
          var orderedData = params.sorting() ? $filter('orderBy')(data, params.orderBy()) : data;

          $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
        }
      });

      //Filtering
      vm.tableFilter = new NgTableParams({
        page: 1,            // show first page
        count: 10
      }, {
        total: data.length, // length of data
        getData: function($defer, params) {
          // use build-in angular filter
          var orderedData = params.filter() ? $filter('filter')(data, params.filter()) : data;

          vm.id = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());
          vm.name = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());
          vm.email = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());
          vm.username = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());
          vm.contact = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());

          params.total(orderedData.length); // set total for recalc pagination
          $defer.resolve(vm.id, vm.name, vm.email, vm.username, vm.contact);
        }
      });

      //Editable
      vm.tableEdit = new NgTableParams({
        page: 1,            // show first page
        count: 10           // count per page
      }, {
        total: data.length, // length of data
        getData: function($defer, params) {
          $defer.resolve(data.slice((params.page() - 1) * params.count(), params.page() * params.count()));
        }
      });
    }
  }

})();

