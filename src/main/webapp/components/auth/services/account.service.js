'use strict';

angular.module('hipster2App')
    .factory('Account', function Account($resource) {
        return $resource('app/rest/account', {}, {
            'get': { method: 'GET', params: {}, isArray: false,
                interceptor: {
                    response: function(response) {
                        // expose response
                        return response;
                    }
                }
            }
        });
    });



