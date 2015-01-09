'use strict';

angular.module('hipster2App')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
