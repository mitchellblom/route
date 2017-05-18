app.factory("HwyFactory", function($http, $q, FIREBASE_CONFIG) {

    let getHwyList = () => {
    let hwys = [];
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/items.json`)
        .then((fbItems) => {
            var hwyCollection = fbItems.data;
            console.log(hwyCollection);
            if(hwyCollection.length !== null) {
            Object.keys(hwyCollection).forEach((key) => {
                hwyCollection[key].id = key;
                hwys.push(hwyCollection[key]);
            });
          }
            resolve(hwys);
        })
        .catch((error) => {
            reject(error);
        });
    });
  };

  let getSingleHwy = (id) => {
    return $q((resolve, reject) => {
       $http.get(`${FIREBASE_CONFIG.databaseURL}/items/item0.json`)    // ${id}
        .then((results) => {
          results.data.id = id;
          resolve(results);
        }).catch((error) => {
          reject(error);
        });
    });
  };

  return {
      getHwyList:getHwyList,
      getSingleHwy:getSingleHwy
  };

});