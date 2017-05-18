app.run(function(FIREBASE_CONFIG) {
	firebase.initializeApp(FIREBASE_CONFIG); 
});

app.config(function($routeProvider){
    $routeProvider
        .when('/hwy/ak', {
            templateUrl: 'partials/ak.html',
            controller: 'AkCtrl'           // not a route
        })
        .when('/hwy/:id', {                              // added :id for now to see if works instead of panam
            templateUrl: 'partials/panam.html',
            controller: 'PanamCtrl'
        })
        .otherwise('hwy/ak');
});