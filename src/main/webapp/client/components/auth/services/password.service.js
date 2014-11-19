'use strict';

angular.module('hipster2App')
    .factory('Password', function ($resource) {
        return $resource('app/rest/account/change_password', {}, {
        });
    });
