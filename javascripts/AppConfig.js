app.run(function(FIREBASE_CONFIG) {
	firebase.initializeApp(FIREBASE_CONFIG); 
});

app.config(function($routeProvider){
    $routeProvider
        .when('/hwy/list', {
            templateUrl: 'partials/hwy-list.html',
            controller: 'HwyListCtrl'
        })
        .when('/hwy/:id', {
            templateUrl: 'partials/ak.html',
            controller: 'AkCtrl'
        })
        .when('/hwy/:id', {                                // :id ?????
            templateUrl: 'partials/panam.html',
            controller: 'PanamCtrl'
        })
        .otherwise('hwy/list');
});