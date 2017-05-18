app.controller("AkCtrl", function($location, $routeParams, $scope, ItemFactory){
    $scope.hwyName = {};
    $scope.hwyDescrip = {};

    HwyFactory.getSingleItem($routeParams.id).then((results) => {
    	$scope.hwyName = results.data;     // dot name ?
        $scope.hwyDescrip = results.data;     // dot descrip ?
    }).catch((error) => {
    	console.log(error);
    });
    
});