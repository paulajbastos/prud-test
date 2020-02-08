import '../styles/main.scss';

var app = angular.module('app', ['ngRoute', 'ui.swiper']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

  $locationProvider.html5Mode(true);

  $routeProvider
    .when('/', {
      templateUrl: 'src/views/home.html',
      controller: 'AppController'
    })
    .when('/sobre', {
      templateUrl: 'src/views/sobre.html',
      controller: 'AppController'
    })
    .when('/produtos', {
      templateUrl: 'src/views/produtos.html',
      controller: 'AppController'
    })
    .when('/contatos', {
      templateUrl: 'src/views/contatos.html',
      controller: 'AppController'
    })
    .otherwise({ redirectTo: '/' });
}]);

app.controller('AppController', ['$scope', '$location', ($controller, $location) => {

  $controller.isNavActive = function (viewLocation) {
    return viewLocation === $location.path();
  };

  $controller.cadastrar = () => {
    console.log('cadastrar');
  }

  $controller.toggleMenuMobile = () => {
    if ($controller.menuMobileclass === '') {
      $controller.menuMobileclass = 'close';
      $controller.menuContentsMobileclass = 'open';
    }
    else {
      $controller.menuMobileclass = '';
      $controller.menuContentsMobileclass = '';
    }
  }

  $controller.hideMobileNav = () => {
    $controller.menuMobileclass = '';
    $controller.menuContentsMobileclass = '';
  }
}]);


app.directive('scrollBg', function ($window) {
  return function (scope, element, attrs) {

    console.log('$window', $window);

    // angular.element($window).bind("scroll", function () {
    //   if (this.pageYOffset >= 60) {
    //     scope.mobileNavShowBg = true;
    //   } else {
    //     scope.mobileNavShowBg = false;
    //   }
    //   scope.$apply();
    // });
  };
});
