(function () {
  'use strict';

angular
.module('Advancedjs.Mod03')
.controller('ngAnimationsCtrl', ngAnimationsCtrl);

ngAnimationsCtrl.$inject = ['$scope'];

function ngAnimationsCtrl($scope) {
 
  $scope.items = [{ text: "This is a sample todo", complete: true }];
  
  $scope.newTodo = "";
  
  $scope.addTodo = function () {
    $scope.items.push({ text: $scope.newTodo, complete: false });
    $scope.newTodo = "";
  };
  
  $scope.removeTodo = function (index) {
    $scope.items.splice(index, 1);
  };
  
  $scope.clearAll = function () {
    $scope.items = [];
  };
}

})();