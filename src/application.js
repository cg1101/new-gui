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

mod.controller('UserListCtrl', function ($scope, $log) {
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

mod.controller('NewUserCtrl', function ($scope, $log) {
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

mod.controller('UserProfileCtrl', function ($scope, $log) {
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

mod.controller('FormShowcaseCtrl', function ($scope, $log) {
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

mod.controller('FormWizardCtrl', function ($scope, $log) {
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

mod.controller('GalleryCtrl', function ($scope, $log) {
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

mod.controller('CalendarCtrl', function ($scope, $log) {
    $log.debug('CalendarCtrl', $scope.$id);
    $log.debug('CalendarCtrl running');
});

mod.config(function ($stateProvider) {
    $stateProvider.state('calendar', {
        url: '/calendar',
        templateUrl: 'views/calendar.html',
        controller: 'CalendarCtrl'
    });
});

mod.controller('TablesCtrl', function ($scope, $log) {
    $log.debug('TablesCtrl', $scope.$id);
    $log.debug('TablesCtrl running');
});

mod.config(function ($stateProvider) {
    $stateProvider.state('tables', {
        url: '/tables',
        templateUrl: 'views/tables.html',
        controller: 'TablesCtrl'
    });
});

mod.controller('DataTablesCtrl', function ($scope, $log) {
    $log.debug('DataTablesCtrl', $scope.$id);
    $log.debug('DataTablesCtrl running');
});

mod.config(function ($stateProvider) {
    $stateProvider.state('datatables', {
        url: '/datatables',
        templateUrl: 'views/datatables.html',
        controller: 'DataTablesCtrl'
    });
});

mod.controller('UIElementsCtrl', function ($scope, $log) {
    $log.debug('UIElementsCtrl', $scope.$id);
    $log.debug('UIElementsCtrl running');
});

mod.config(function ($stateProvider) {
    $stateProvider.state('ui_elements', {
        url: '/ui-elements',
        templateUrl: 'views/ui-elements.html',
        controller: 'UIElementsCtrl'
    });
});

mod.controller('IconsCtrl', function ($scope, $log) {
    $log.debug('IconsCtrl', $scope.$id);
    $log.debug('IconsCtrl running');
});

mod.config(function ($stateProvider) {
    $stateProvider.state('icons', {
        url: '/icons',
        templateUrl: 'views/icons.html',
        controller: 'IconsCtrl'
    });
});

mod.controller('PersonalInfoCtrl', function ($scope, $log) {
    $log.debug('PersonalInfoCtrl', $scope.$id);
    $log.debug('PersonalInfoCtrl running');
});

mod.config(function ($stateProvider) {
    $stateProvider.state('personal_info', {
        url: '/personal-info',
        templateUrl: 'views/personal-info.html',
        controller: 'PersonalInfoCtrl'
    });
});

mod.controller('CodeEditorCtrl', function ($scope, $log) {
    $log.debug('CodeEditorCtrl', $scope.$id);
    $log.debug('CodeEditorCtrl running');
});

mod.config(function ($stateProvider) {
    $stateProvider.state('code_editor', {
        url: '/code-editor',
        templateUrl: 'views/code-editor.html',
        controller: 'CodeEditorCtrl'
    });
});

mod.controller('GridsCtrl', function ($scope, $log) {
    $log.debug('GridsCtrl', $scope.$id);
    $log.debug('GridsCtrl running');
});

mod.config(function ($stateProvider) {
    $stateProvider.state('grids', {
        url: '/grids',
        templateUrl: 'views/grids.html',
        controller: 'GridsCtrl'
    });
});

mod.controller('SignInCtrl', function ($scope, $log) {
    $log.debug('SignInCtrl', $scope.$id);
    $log.debug('SignInCtrl running');
});

mod.config(function ($stateProvider) {
    $stateProvider.state('signin', {
        url: '/signin',
        templateUrl: 'views/signin.html',
        controller: 'SignInCtrl'
    });
});

mod.controller('SignUpCtrl', function ($scope, $log) {
    $log.debug('SignUpCtrl', $scope.$id);
    $log.debug('SignUpCtrl running');
});

mod.config(function ($stateProvider) {
    $stateProvider.state('signup', {
        url: '/signup',
        templateUrl: 'views/signup.html',
        controller: 'SignUpCtrl'
    });
});

mod.controller('MySideBarCtrl', function ($scope, $state) {
    $scope.nodes = [
        {
            label: 'Home',
            state: 'index',
            icon: 'icon-home'
        },
        {
            label: 'Charts',
            state: 'chart_showcase',
            icon: 'icon-signal'
        },
        {
            label: 'Users',
            expanded: false,
            children: [
                {
                    label: 'User list',
                    state: 'user_list'
                },
                {
                    label: 'New user form',
                    state: 'new_user'
                },
                {
                    label: 'User profile',
                    state: 'user_profile'
                }
            ],
            icon: 'icon-group'
        },
        {
            label: 'Form',
            expanded: false,
            children: [
                {
                    label: 'Form showcase',
                    state: 'form_showcase'
                },
                {
                    label: 'Form wizard',
                    state: 'form_wizard'
                }
            ],
            icon: 'icon-edit'
        },
        {
            label: 'Gallery',
            state: 'gallery',
            icon: 'icon-picture'
        },
        {
            label: 'Calendar',
            state: 'calendar',
            icon: 'icon-calendar-empty'
        },
        {
            label: 'Tables',
            expanded: false,
            children: [
                {
                    label: 'Custom tables',
                    state: 'tables'
                },
                {
                    label: 'DataTables',
                    state: 'datatables'
                }
            ],
            icon: 'icon-th-large'
        },
        {
            label: 'UI Element',
            expanded: false,
            children: [
                {
                    label: 'UI Elements',
                    state: 'ui_elements'
                },
                {
                    label: 'Icons',
                    state: 'icons'
                }
            ],
            icon: 'icon-code-fork'
        },
        {
            label: 'My Info',
            state: 'personal_info',
            icon: 'icon-cog'
        },
        {
            label: 'Extras',
            expanded: false,
            children: [
                {
                    label: 'Code editor',
                    state: 'code_editor'
                },
                {
                    label: 'Grids',
                    state: 'grids'
                },
                {
                    label: 'Sign in',
                    state: 'signin'
                },
                {
                    label: 'Sign up',
                    state: 'signup'
                }
            ],
            icon: 'icon-share-alt'
        }
    ];
    this.isActive = function (node, useExpanded) {
        if (node.state) {
            return node.state == $state.current.name;
        } else {
            for (var i = 0; i < node.children.length; i++) {
                if (node.children[i].state == $state.current.name) {
                    return true;
                }
            }
            return useExpanded ? node.expanded : false;
        }
    }
});

mod.directive('mySideBar', function () {
    return {
        restrict: 'A',
        templateUrl: 'components/my-side-bar.html',
        controller: 'MySideBarCtrl as ctrl'
    };
});

mod.controller('MyHeaderBarCtrl', function ($scope) {

});

mod.directive('myHeaderBar', function () {
    return {
        restrict: 'A',
        templateUrl: 'components/my-header-bar.html',
        controller: 'MyHeaderBarCtrl as ctrl',
        link: function(scope, iElement, iAttrs) {
            iElement.attr('role', 'banner');
            iAttrs.$addClass('navbar navbar-inverse');
        }
    }
});
