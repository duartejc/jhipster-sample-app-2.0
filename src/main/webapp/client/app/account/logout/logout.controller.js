'use strict';

angular.module('hipster2App')
    .config(function ($routeProvider) {
        $routeProvider
            .when('/logout', {
                templateUrl: 'client/app/main/main.html',
                controller: 'LogoutController'
            })
    })
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
