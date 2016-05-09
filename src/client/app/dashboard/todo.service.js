(function () {
  'use strict';

  angular
    .module('app.dashboard')
    .service('TodoService', TodoService);

  TodoService.$inject = ['$resource'];

  /* @ngInject */
  function TodoService($resource) {
    this.getTodo = getTodo;

    ////////////////

    function getTodo(todo) {
      var todoList = $resource('data/todo.json');

      return todoList.get({
        todo: todo
      });
    }
  }

})();

