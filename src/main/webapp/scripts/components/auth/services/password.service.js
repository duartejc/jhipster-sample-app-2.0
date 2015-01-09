'use strict';

angular.module('hipster2App')
    .factory('Password', function ($resource) {
        return $resource('api/account/change_password', {}, {
        });
    });
