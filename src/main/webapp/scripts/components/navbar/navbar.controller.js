'use strict';

angular.module('hipster2App')
    .controller('NavbarController', function ($scope, $location, $state, Auth, Principal) {
        
    	Principal.identity().then(function(account) {
            $scope.account = account;
            $scope.isAuthenticated = Principal.isAuthenticated;
        });
    	
    	//$scope.isAuthenticated = Principal.isAuthenticated;
        
        
        $scope.isInRole = Principal.isInRole;
        $scope.$state = $state;

        $scope.logout = function () {
            Auth.logout();
            $state.go('home');
        };
    });
