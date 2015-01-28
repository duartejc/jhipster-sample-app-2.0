'use strict';

angular.module('hipster2App')
    .filter('unsafe', function($sce) {
	    return function(value) {
	        if (!value) { return ''; }
	        return $sce.trustAsHtml(value);
	    };
	});
