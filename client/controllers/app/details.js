angular.module('app').controller('app_details', app_details);
function app_details($scope, app) {
    'use strict';
    app.init($scope);
    
    console.log($scope.data)
    
    $scope.data.shipmentDetails = app.shipmentDetails;
    //console.log($scope.data.shipmentDetails.trackingNumber);
        
     /*   
    setTimeout(function () {
        $scope.data.shipmentDetails = app.shipmentDetails;
        console.log($scope.data.shipmentDetails.trackingNumber);
    }, 1000);
    */
}