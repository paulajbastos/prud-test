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

// app.run(['$templateCache', function($templateCache) {
//   $templateCache.put('features/planos.html', require('../features/planos.html'));
// }]);
