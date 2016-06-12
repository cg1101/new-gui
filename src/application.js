var mod = angular.module('newGuiApp', ['ui.router']);


mod.controller('MainCtrl', function ($scope, $log) {
    $log.debug('MainCtrl', $scope.$id);
    $log.debug('Hello, it\'s working');
});

mod.run()
