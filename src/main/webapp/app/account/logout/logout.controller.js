'use strict';

angular.module('hipster2App')
    .config(function ($stateProvider) {
        $stateProvider
            .state('logout', {
                parent: 'account',
                url: '/logout',
                data: {
                    roles: []
                },
                views: {
                    'content@': {
                        templateUrl: 'app/main/main.html',
                        controller: 'LogoutController'
                    }
                }
            });
    })
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
