app.factory("ItemFactory", function($http, $q, FIREBASE_CONFIG) {

  let getSingleItem = (id) => {
    return $q((resolve, reject) => {
       $http.get(`${FIREBASE_CONFIG.databaseURL}/items/${id}.json`)
        .then((results) => {
          results.data.id = id;
          resolve(results);
        }).catch((error) => {
          reject(error);
        });
    });
  };

  getSingleItem();

  return {
      getSingleItem:getSingleItem
  };

});