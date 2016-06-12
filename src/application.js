var mod = angular.module('newGuiApp', ['ui.router']);

mod.controller('MainCtrl', function ($scope, $log) {
    $log.debug('MainCtrl', $scope.$id);
    $log.debug('Hello, it\'s working');
});

mod.config(function ($locationProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(false && true);
    $urlRouterProvider.otherwise("/");
});

mod.run(function ($rootScope, $state, $log) {
    $rootScope.$state = $state;

    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams, options) {
        $log.debug('Start: from ' + fromState.name, 'to ' + toState.name);
    });

    $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        $log.debug('Success: from ' + fromState.name, 'to ' + toState.name);
    });

    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
        $log.debug('Error: from ' + fromState.name, 'to ' + toState.name, error);
    });
});

mod.controller('IndexCtrl', function($scope) {
    $log.debug('IndexCtrl', $scope.$id);
    $log.debug('Hi, this is index');
});

mod.config(function ($stateProvider) {
    $stateProvider.state('index', {
        url: '/',
        templateUrl: 'views/index.html',
        controller: 'IndexCtrl'
    });
});
