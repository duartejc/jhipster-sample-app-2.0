'use strict';

angular.module('hipster2App')
    .config(function ($routeProvider) {
        $routeProvider
            .when('/error', {
                templateUrl: 'client/app/error/error.html'
            })
    });
