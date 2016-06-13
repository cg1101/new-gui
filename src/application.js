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

mod.controller('IndexCtrl', function ($scope, $log) {
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

mod.controller('ChartShowcaseCtrl', function ($scope, $log) {
    $log.debug('ChartShowcaseCtrl', $scope.$id);
    $log.debug('And it is ChartShowcase now');
});

mod.config(function ($stateProvider) {
    $stateProvider.state('chart_showcase', {
        url: '/chart-showcase',
        templateUrl: 'views/chart-showcase.html',
        controller: 'ChartShowcaseCtrl'
    });
});

mod.controller('UserListCtrl', function($scope, $log) {
    $log.debug('UserListCtrl', $scope.$id);
    $log.debug('UserList now');
});

mod.config(function ($stateProvider) {
    $stateProvider.state('user_list', {
        url: '/user-list',
        templateUrl: 'views/user-list.html',
        controller: 'UserListCtrl'
    });
});

mod.controller('NewUserCtrl', function($scope, $log) {
    $log.debug('NewUserCtrl', $scope.$id);
    $log.debug('NewUser running');
});

mod.config(function ($stateProvider) {
    $stateProvider.state('new_user', {
        url: '/new-user',
        templateUrl: 'views/new-user.html',
        controller: 'NewUserCtrl'
    });
});

mod.controller('UserProfileCtrl', function($scope, $log) {
    $log.debug('UserProfileCtrl', $scope.$id);
    $log.debug('UserProfile running');
});

mod.config(function ($stateProvider) {
    $stateProvider.state('user_profile', {
        url: '/user-profile',
        templateUrl: 'views/user-profile.html',
        controller: 'UserProfileCtrl'
    });
});

mod.controller('FormShowcaseCtrl', function($scope, $log) {
    $log.debug('FormShowcaseCtrl', $scope.$id);
    $log.debug('FormShowcaseCtrl running');
});

mod.config(function ($stateProvider) {
    $stateProvider.state('form_showcase', {
        url: '/form-showcase',
        templateUrl: 'views/form-showcase.html',
        controller: 'FormShowcaseCtrl'
    });
});

mod.controller('FormWizardCtrl', function($scope, $log) {
    $log.debug('FormWizardCtrl', $scope.$id);
    $log.debug('FormWizardCtrl running');
});

mod.config(function ($stateProvider) {
    $stateProvider.state('form_wizard', {
        url: '/form-wizard',
        templateUrl: 'views/form-wizard.html',
        controller: 'FormWizardCtrl'
    });
});

mod.controller('GalleryCtrl', function($scope, $log) {
    $log.debug('GalleryCtrl', $scope.$id);
    $log.debug('GalleryCtrl running');
});

mod.config(function ($stateProvider) {
    $stateProvider.state('gallery', {
        url: '/gallery',
        templateUrl: 'views/gallery.html',
        controller: 'GalleryCtrl'
    });
});
