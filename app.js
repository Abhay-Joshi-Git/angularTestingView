'use strict';

angular.module('testingApp', [])
  .controller('countDisplayController', ['$scope', function($scope){
    $scope.bugCount = 2;
    $scope.storyCount = 20;
    $scope.name = 'test';
    $scope.changeName = function(){
      console.log('changing name');
      $scope.name = 'changing now';
      $scope.submit = function(form){
        console.log('do nothing');

      };
    }
  }]);