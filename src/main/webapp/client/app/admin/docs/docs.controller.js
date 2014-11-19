'use strict';

angular.module('hipster2App')
    .config(function ($routeProvider) {
        $routeProvider
            .when('/docs', {
                templateUrl: 'client/app/admin/docs/docs.html',
                authenticate: true,
                roles: 'ROLE_ADMIN'
            })
    });
