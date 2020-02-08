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

app.controller('AppController', ['$scope', '$location', '$document', '$window', ($controller, $location, $document, $window) => {

  $document.on('scroll', function () {

    if ($window.pageYOffset >= 60) {
      $controller.mobileNavShowBg = true;
    } else {
      $controller.mobileNavShowBg = false;
    }
  })

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
