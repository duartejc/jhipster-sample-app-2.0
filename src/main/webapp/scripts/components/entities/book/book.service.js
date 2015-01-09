'use strict';

angular.module('hipster2App')
    .factory('Book', function ($resource) {
        return $resource('api/books/:id', {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    return data;
                }
            }
        });
    });
