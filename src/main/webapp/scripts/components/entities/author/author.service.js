'use strict';

angular.module('hipster2App')
    .factory('Author', function ($resource) {
        return $resource('api/authors/:id', {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    var birthdayFrom = data.birthday.split("-");
                    data.birthday = new Date(new Date(birthdayFrom[0], birthdayFrom[1] - 1, birthdayFrom[2]));
                    return data;
                }
            }
        });
    });
