// import angular from 'angular';
// import uirouter from 'angular-ui-router';
// import routing from './app.config';

// import '../styles/main.scss';

// import home from '../features/home';

// angular.module('app', [uirouter, home])
//   .config(routing);



import angular from 'angular';
var mainApp = angular.module('mainApp', []);
mainApp.controller('appController',  ['$scope', function ($scope) {
    $scope.title ='Hello Angular';
}]
)
