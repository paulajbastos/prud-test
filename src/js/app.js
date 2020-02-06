import '../styles/main.scss';
import angular from 'angular';
var app = angular.module('app', []);
app.controller('appController',  ['$scope', function ($scope) {

  $scope.toggleMenuMobile = () => {
    if ($scope.menuMobileclass === '') {
      $scope.menuMobileclass = 'close';
      $scope.menuContentsMobileclass = 'open';
    }
    else {
      $scope.menuMobileclass = '';
      $scope.menuContentsMobileclass = '';
    }
  }
}]
)
