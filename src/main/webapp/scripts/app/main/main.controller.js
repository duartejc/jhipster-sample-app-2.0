'use strict';

angular.module('hipster2App')
    .controller('MainController', function ($scope, $cookieStore, Principal) {
    	
        /**
         * Sidebar Toggle & Cookie Control
         */
        var mobileView = 992;

        $scope.getWidth = function() {
            return window.innerWidth;
        };

        $scope.$watch($scope.getWidth, function(newValue, oldValue) {
            if (newValue >= mobileView) {
                if (angular.isDefined($cookieStore.get('toggle'))) {
                    $scope.toggle = ! $cookieStore.get('toggle') ? false : true;
                } else {
                    $scope.toggle = true;
                }
            } else {
                $scope.toggle = false;
            }

        });

        $scope.toggleSidebar = function() {
            $scope.toggle = !$scope.toggle;
            $cookieStore.put('toggle', $scope.toggle);
        };

        window.onresize = function() {
            $scope.$apply();
        };
        
        $scope.alerts = [{
            type: 'success',
            msg: 'Welcome, Java Hipster! This is your homepage.'
        }];

        if(Principal.isAuthenticated()){
        	$scope.alerts.push({
        		type: 'info',
                msg: "You are logged in as user 'Admin'."
            });
        } else {
        	$scope.alerts.push({
        		type: 'warning',
                msg: "If you want to <a href=\"#/login\">authenticate</a>, you can try the default login='admin' and password='admin'."
            });
        	
        	$scope.alerts.push({
        		type: 'warning',
                msg: "Don't have an account? <a href=\"#/register\">Register</a>."
            });
        }
        
        $scope.addAlert = function() {
            $scope.alerts.push({
                msg: 'Another alert!'
            });
        };

        $scope.closeAlert = function(index) {
            $scope.alerts.splice(index, 1);
        };
        
    });
