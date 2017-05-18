app.controller("AkCtrl", function($routeParams, $scope, HwyFactory){
    // $scope.hwyName = {};
    // $scope.hwyDescrip = {};
    $scope.selectedHwy = {};

    HwyFactory.getSingleHwy($routeParams.id).then((results) => {
        console.log(results);
        $scope.selectedHwy = results.data;
    	// $scope.hwyName = results.data;     // dot name ?
        // $scope.hwyDescrip = results.data;     // dot descrip ?
    }).catch((error) => {
    	console.log(error);
    });

});