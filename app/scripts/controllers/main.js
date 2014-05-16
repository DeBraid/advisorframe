'use strict';

angular.module('advisorframeApp')
  .controller('MainCtrl', function ($scope) {

    $scope.securities = ['BCE', 'MANU'];
    $scope.etfs = ['XTR', 'XRE'];
    $scope.commons = [];
    $scope.mfs = [];

    $scope.addSecurity = function () {
        var userInput = $scope.security;

        // if (userInput = )

    	$scope.securities.push(userInput);

        console.log(userInput);
        console.log('security ^^ ');
    	$scope.etf = '';


    };       

  });
