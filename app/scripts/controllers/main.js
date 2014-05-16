'use strict';

angular.module('advisorframeApp')
  .controller('MainCtrl', function ($scope) {

    $scope.securities = ['BCE', 'MANU'];
    $scope.etfs = ['XTR', 'XRE'];
    $scope.commons = [];
    $scope.mfs = [];

    $scope.addSecurity = function () {
<<<<<<< HEAD
        var userInput = $scope.security;

        // if (userInput = )

    	$scope.securities.push(userInput);

        console.log(userInput);
        console.log('security ^^ ');
    	$scope.etf = '';
=======
>>>>>>> 5b50619592a7a2e61b652ba37bfbe80eaad22517

        var myRadioButton = $scope.securityType;

        if (myRadioButton == "etf"){
    		$scope.etfs.push($scope.security);
    		$scope.security = '';
    	}
        else (myRadioButton == "common") {
            $scope.commons.push($scope.security);
            $scope.security = '';
        }
        else (myRadioButton == "mf") {
            $scope.mfs.push($scope.security);
            $scope.security = '';
        };

    };       

  });
