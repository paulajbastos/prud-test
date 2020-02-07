import '../styles/main.scss';
// import angular from 'angular';

var app = angular.module('app', ['ui.swiper']);

app.controller('appController',  ['$scope', function ($scope) {

  $scope.cadastrar = () => {
    console.log('cadastrar');
  }

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
