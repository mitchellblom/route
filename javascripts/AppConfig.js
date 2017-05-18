app.run(function(FIREBASE_CONFIG) {
	firebase.initializeApp(FIREBASE_CONFIG); 
});

app.config(function($routeProvider){
    $routeProvider
        .when('/hwy/ak', {
            templateUrl: 'partials/ak.html',
            controller: 'AkCtrl'
        })
        .when('/hwy/panam', {                                // :id ?????
            templateUrl: 'partials/panam.html',
            controller: 'PanamCtrl'
        })
        .otherwise('hwy/ak');
});