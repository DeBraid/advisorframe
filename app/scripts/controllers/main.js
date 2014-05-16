'use strict';

angular.module('advisorframeApp')
  .controller('MainCtrl', function ($scope) {

    $scope.etfs = [];
    $scope.commons = [];
    $scope.mfs = [];

    $scope.addSecurity = function () {

        var myRadioButton = $scope.securityType;

        if (myRadioButton == "etf"){
    		$scope.etfs.push($scope.security);
    		$scope.security = '';
    	}
        else if (myRadioButton == "common") {
            $scope.commons.push($scope.security);
            $scope.security = '';
        }
        else if (myRadioButton == "mf") {
            $scope.mfs.push($scope.security);
            $scope.security = '';
        };

    };       

  });
