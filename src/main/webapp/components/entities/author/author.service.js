'use strict';

angular.module('hipster2App')
    .factory('Author', function ($resource) {
        return $resource('app/rest/authors/:id', {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    
                    data.birthday = new Date(data.birthday);
                    
                    return data;
                }
            }
        });
    });
