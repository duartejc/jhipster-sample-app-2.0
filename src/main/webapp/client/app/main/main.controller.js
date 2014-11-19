'use strict';

angular.module('hipster2App')
    .config(function ($routeProvider) {
        $routeProvider
            .otherwise({
                templateUrl: 'client/app/main/main.html',
                controller: 'MainController'
            });
    })
    .controller('MainController', function ($scope, Auth) {
        $scope.account = Auth.getCurrentAccount();
        $scope.isLoggedIn = Auth.isLoggedIn;
    });
