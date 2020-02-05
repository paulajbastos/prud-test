import '../styles/main.scss';
import angular from 'angular';
var app = angular.module('app', []);
app.controller('appController',  ['$scope', function ($scope) {
  $scope.title ='Hello Angular';
}]
)
