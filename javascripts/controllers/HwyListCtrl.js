app.controller("HwyListCtrl", function($scope, HwyFactory) {	
	$scope.items = [];

	let getItems = () => {
		HwyFactory.getHwyList().then((hwys) => {		// now inside controller, will execute when controller loads
			$scope.items = hwys;
		}).catch((error) => {
			console.log("get Error", error);
		});
	};

	getItems();

});