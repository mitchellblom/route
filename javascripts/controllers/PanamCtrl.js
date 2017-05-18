app.controller("PanamCtrl", function($routeParams, $scope, HwyFactory){
    $scope.hwyName = {};
    $scope.hwyDescrip = {};

    HwyFactory.getSingleHwy($routeParams.id).then((results) => {
        console.log(results.data);
    	$scope.hwyName = results.data.highway;
        $scope.hwyDescrip = results.data.description;
    }).catch((error) => {
    	console.log(error);
    });

});