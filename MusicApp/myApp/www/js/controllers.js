angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, $rootScope, $location, LoginFunctions, $cookies, $cookieStore) {
  function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
      $rootScope.globals = {
          currentUser: {
              username: "logged"
          }
      };

      //$http.defaults.headers.common['Authorization'] = 'Basic ' + authdata; // jshint ignore:line
      $cookieStore.put('globals', $rootScope.globals);

      //window.location = window.location.protocol + "//" + window.location.hostname + "/" + window.location.pathname + "#/tab/songs";
      // Logged into your app and Facebook.
      testAPI();
    } else if (response.status === 'not_authorized') {
      // The person is logged into Facebook, but not your app.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into this app.';
    } else {
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into Facebook.';
    }
  }

  // This function is called when someone finishes with the Login
  // Button.  See the onlogin handler attached to it in the sample
  // code below.
  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }

  window.fbAsyncInit = function() {
    FB.init({
      appId      : '117169485307087',
      cookie     : true,  // enable cookies to allow the server to access 
                          // the session
      xfbml      : true,  // parse social plugins on this page
      version    : 'v2.5' // use graph api version 2.5
    });

    // Now that we've initialized the JavaScript SDK, we call 
    // FB.getLoginStatus().  This function gets the state of the
    // person visiting this page and can return one of three states to
    // the callback you provide.  They can be:
    //
    // 1. Logged into your app ('connected')
    // 2. Logged into Facebook, but not your app ('not_authorized')
    // 3. Not logged into Facebook and can't tell if they are logged into
    //    your app or not.
    //
    // These three cases are handled in the callback function.

    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });

  };

  // Load the SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  // Here we run a very simple test of the Graph API after login is
  // successful.  See statusChangeCallback() for when this call is made.
  function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
      console.log('Successfullllll login for: ' + response.name);
      document.getElementById('status').innerHTML =
        'Thanks for logging in, ' + response.name + '!';
    });
  }





  var cookie = $cookies.get('songUser');
  if(cookie != null) {
    $scope.user = JSON.parse(cookie);
  }else {
    $scope.user = {
      email: '',
      password: '',
      remember: false
    }
  }
  $scope.entrar = function(){
    //console.log($scope.user.email);
    LoginFunctions.login($scope.user.email, $scope.user.password, function(response){
      $location.path('/tab/songs');
      if($scope.user.remember == true) {
        $cookies.put('songUser', JSON.stringify($scope.user));
        $rootScope.globals = {
            currentUser: {
                username: "logged"
            }
        };

        //$http.defaults.headers.common['Authorization'] = 'Basic ' + authdata; // jshint ignore:line
        $cookieStore.put('globals', $rootScope.globals);

      }
    });
  };
  
})

.controller('SongsCtrl', function($scope, $rootScope, $location, SongsService, $cookieStore) {
  $rootScope.globals = $cookieStore.get('globals') || {};
  if(!$rootScope.globals) {
    $location.path('/tab/login');
  }else {
    if(!$rootScope.globals.currentUser) {
      $location.path('/tab/login');
    }
  }
  
  SongsService.getAll(function(response){
    console.log(response);
    if(response.success == true) {
      $scope.songs = response.data;
    }
  });
  $scope.filter = function(query) {
    /*SongsService.filter(query, function(response){
      console.log(response);
      if(response.success == true) {
        $scope.songs = response.data;
      }else {
        $scope.songs = [];
      }
    });*/
    $scope.songs = SongsService.filter(query);
  };
  $scope.turnWhen = function(song, when) {
    if(song.when == when) {
      song.when = '';
    }else {
      song.when = when;
    }
  }
})
.controller('SongInfoCtrl', function($scope, $rootScope, $stateParams, SongsService, ngProgressFactory, $interval) {
  $scope.timeSpent = new Date();
  $scope.timeSpent.setMinutes(0);
  $scope.timeSpent.setSeconds(0);
  $scope.contained_progressbar = ngProgressFactory.createInstance();
  $scope.contained_progressbar.setColor("#4dc4d3");
  $scope.contained_progressbar.setParent(document.getElementById('demo_contained'));
  $scope.contained_progressbar.setAbsolute();
  $scope.contained_progressbar.set("0");
  //$scope.progressbar.start();

  $scope.play = function($event){
    if($scope.playing == true) {
      $interval.cancel($scope.time);
      $scope.playing = false;
    }else {
      $scope.playing = true;
      $scope.time = $interval(function(){
        if($scope.totalTime <= 0) {
          $interval.cancel($scope.time);
          $scope.playing = false;
        }else {
          $scope.setWidth($scope.timeSpent.getSeconds(), $event);
          $scope.timeSpent.setSeconds($scope.timeSpent.getSeconds()+1);
          $scope.timeLeft.setSeconds($scope.timeLeft.getSeconds()-1);
          $scope.totalTime = $scope.totalTime - 1000;
        }

      }, 1000);
    }
  };

  $scope.start_contained = function($event) {
    $scope.contained_progressbar.start();
    $event.preventDefault();
  }
  $scope.complete_contained = function($event) {
    $scope.contained_progressbar.complete();
    $event.preventDefault();
  }

  $scope.reset_contained = function($event) {
    $scope.contained_progressbar.reset();
    $event.preventDefault();
  }
  $scope.setWidth = function(elapsed, $event) {
    var new_width = (elapsed * 100) / ($scope.totalM / 1000);
    $scope.contained_progressbar.set(new_width);
    $event.preventDefault();
  }

  SongsService.get($stateParams.songId, function(response){
    $scope.song = response.data;
    /*****FAKE DURATIONS IN CASE SONG IS NOT FOUND IN SPOTIFY*****/
    $scope.timeLeft = new Date(60000);
    $scope.totalTime = 60000;
    $scope.totalM = 60000;
    /****************************************************/
    var info = $scope.song.url.split(":");
    SongsService.getInfoFromSpotify(info[2], info[1], function(response){
      console.log(response);
      $scope.song.image = response.data.images[0].url;

      if(info[1] == "album") {
        for(var i=0; i < response.data.tracks.items.length; i++) {
          if(response.data.tracks.items[i].uri == $scope.song.url) {
            $scope.timeLeft = new Date(response.data.tracks.items[i].duration_ms);
            $scope.totalTime = response.data.tracks.items[i].duration_ms;
            $scope.totalM = response.data.tracks.items[i].duration_ms;
          }
        }
      }else {
        $scope.timeLeft = new Date(response.data.duration_ms);
        $scope.totalTime = response.data.duration_ms;
        $scope.totalM = response.data.duration_ms;
      }
    });
  });
  $rootScope.songPlaying = $stateParams.songId;
});