angular.module('starter.services', [])

.factory('LoginFunctions', function() {
  // Might use a resource here that returns a JSON array
  return {
    login: function(user, password, callback) {
      var success = (((user == 'bob@test.com') && (password == 'bob12345'))? true:false);
      callback(success);
    }
  };
})
.factory('SongsService', function($http) {
  // Might use a resource here that returns a JSON array
  var songs = [];
  return {
    getAll: function(callback) {
      $http({
          method: 'GET',
          url: 'http://localhost:3000/songs'
      }).then(function successCallback(response) {
          response.success = true;
          songs = response.data;
          callback(response);
      }, function errorCallback(response) {
          // server returns response with an error status.
          console.log("Error cargando esquema de seguridad.");
          console.log(response.data);
          callback(response);
      });
    },
    get: function(id, callback) {
        $http({
            method: 'GET',
            url: 'http://localhost:3000/songs/' + id
        }).then(function successCallback(response) {
            response.success = true;
            callback(response);
        }, function errorCallback(response) {
            // server returns response with an error status.
            console.log("Error cargando esquema de seguridad.");
            console.log(response.data);
            callback(response);
        });
      },
      filter: function(query, callback) {
        /*$http({
            method: 'GET',
            url: 'http://localhost:3000/songs?q=' + query
        }).then(function successCallback(response) {
            response.success = true;
            songs = response.data;
            callback(response);
        }, function errorCallback(response) {
            // server returns response with an error status.
            console.log("Error cargando esquema de seguridad.");
            console.log(response.data);
            callback(response);
        });*/
        
        var songsFiltrado = [];
        for(var i=0; i < songs.length; i++) {
          if(songs[i].songname.indexOf(query) != -1 || songs[i].albumname.indexOf(query) != -1 || songs[i].artistname.indexOf(query) != -1) {
            songsFiltrado.push(songs[i]);
          }
        }
        return songsFiltrado;
      },
      getInfoFromSpotify: function(id, type, callback) {
        $http({
          method: 'GET',
          //url: 'https://api.spotify.com/v1/' + type + "s/0sNOF9WDwhWunNAHPD3Baj"
          url: 'https://api.spotify.com/v1/' + type + "s/" + id//prueba que si funciona
        }).then(function successCallback(response) {
          response.success = true;
          callback(response);
        }).then(function errorCallback(response) {
          callback(response);
        });
      }
  };
});