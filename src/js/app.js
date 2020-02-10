import angular from 'angular';
import ngRoute from 'angular-route';
import swiper from 'angular-ui-swiper/dist/angular-ui-swiper.js';
import '../../node_modules/angular-ui-swiper/src/angular-ui-swiper.scss';
import '../styles/main.scss';


angular.element(document.getElementsByTagName('head')).append(angular.element('<base href="' + window.location.pathname + '" />'));

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


  // $document.on('scroll', function () {

  //   if ($window.pageYOffset >= 60) {
  //     $controller.mobileNavShowBg = true;
  //   } else {
  //     $controller.mobileNavShowBg = false;
  //   }
  // })

  $controller.isNavActive = function (viewLocation) {
    return viewLocation === $location.path();
  };

  $controller.cadastrar = () => {
    console.log('cadastro feito com sucesso!');
  };

  $controller.toggleMenuMobile = () => {
    if ($controller.menuMobileclass === '') {
      $controller.menuMobileclass = 'close';
      $controller.menuContentsMobileclass = 'open';
    }
    else {
      $controller.menuMobileclass = '';
      $controller.menuContentsMobileclass = '';
    }
  };

  $controller.hideMobileNav = () => {
    $controller.menuMobileclass = '';
    $controller.menuContentsMobileclass = '';
  };

}]);


app.$inject = ['ngRoute', 'ui.swiper'];
