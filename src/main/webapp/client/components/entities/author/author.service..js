'use strict';

angular.module('hipster2App')
    .factory('Author', function ($resource) {
        return $resource('app/rest/authors/:id', {}, {
            'query': { method: 'GET', isArray: true},
            'get': { method: 'GET'}
        });
    });
