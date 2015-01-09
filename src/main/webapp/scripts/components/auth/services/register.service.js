'use strict';

angular.module('hipster2App')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


