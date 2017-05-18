app.controller("AkCtrl", function($routeParams, $scope, HwyFactory){
    $scope.hwyName = {};
    $scope.hwyDescrip = {};

    HwyFactory.getSingleHwy($routeParams.id).then((results) => {
        console.log(results.data);
    	$scope.hwyName = results.data.highway;     // dot name ?
        $scope.hwyDescrip = results.data.description;     // dot descrip ?
    }).catch((error) => {
    	console.log(error);
    });

});