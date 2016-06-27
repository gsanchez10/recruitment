angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, $location, LoginFunctions, $cookies) {
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
      }
    });
  };
  
})

.controller('SongsCtrl', function($scope, SongsService) {
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