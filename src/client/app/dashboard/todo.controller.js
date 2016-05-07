(function () {
  'use strict';

  angular
    .module('app.dashboard')
    .controller('TodoController', TodoController);

  TodoController.$inject = ['TodoService'];

  /* @ngInject */
  function TodoController(TodoService) {
    var vm = this;
    vm.title = 'TodoController';

    //Get Todo List Widget Data
    vm.todo = TodoService.todo;

    //Add new Item (closed by default)
    vm.addTodoStat = false;

    activate();

    ////////////////

    function activate() {
      vm.tdResult = TodoService.getTodo(vm.todo);
    }
  }

})();

