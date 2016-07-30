// app.js
var routerApp = angular.module('routerApp', ['ui.router','ngRoute']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider

    
    .state('home', {
        url: '/home',
        templateUrl: 'home.html'
        
    })
    .state('movie_desc', {
        url: '/movie_desc/:movieID',
        //params : {movieID:null,},
        templateUrl: 'movie_desc.html'
    })
    .state('cast_desc', {
        url: '/cast_desc/:castID',
        //params : {movieID:null,},
        templateUrl: 'cast_desc.html'
    })
    
    .state('about', {
        url: '/about',
        templateUrl: 'about.html'
    })
    .state('movieSearch', {
        url: '/Search/:movie',
        templateUrl: 'movieSearchResult.html'
    })
    .state('popular', {
        url: '/popular',
        templateUrl: 'popular.html'
    })
    .state('current', {
        url: '/current',
        templateUrl: 'current.html'
    })
    .state('top', {
        url: '/top',
        templateUrl: 'top.html'
    })
    .state('upcoming', {
        url: '/upcoming',
        templateUrl: 'upcoming.html'
    });
   
        
});

routerApp.controller('indexCtrl', function($scope,$state) {

    $scope.search= function(){
        //$state.go('movieSearch', { 'movieName':'witch'});
        //$state.go("movieSearch",{movieName:$scope.movieName});
    }
});




routerApp.controller('popCtrl', function($scope,$state,$http) {

    //$scope.movies = [];
    $http({ 
        method : "POST", 
        url : "http://apps.3esofttech.com/EntBot/findMoviesByCategory", 
        data : {"category": "popular"} 
        }).then(function (response) { 
        
        console.log(response); 
        $scope.movies = response.data;
       // foreach(response.data.length<4    )
        }, function (response) { 
        console.log("Error"); 
        console.log(response);
        }); 
});



routerApp.controller('topCtrl', function($scope,$state,$http) {

    //$scope.movies = [];
    $http({ 
        method : "POST", 
        url : "http://apps.3esofttech.com/EntBot/findMoviesByCategory", 
        data : {"category": "top_rated"} 
        }).then(function (response) { 
        
        console.log(response); 
        $scope.movies = response.data;
       // foreach(response.data.length<4    )
        }, function (response) { 
        console.log("Error"); 
        console.log(response);
        }); 
});



routerApp.controller('upCtrl', function($scope,$state,$http) {

    //$scope.movies = [];
    $http({ 
        method : "POST", 
        url : "http://apps.3esofttech.com/EntBot/findMoviesByCategory", 
        data : {"category": "upcoming"} 
        }).then(function (response) { 
        
        console.log(response); 
        $scope.movies = response.data;
       // foreach(response.data.length<4    )
        }, function (response) { 
        console.log("Error"); 
        console.log(response);
        }); 
});





routerApp.controller('curCtrl', function($scope,$state,$http) {

    //$scope.movies = [];
    $http({ 
        method : "POST", 
        url : "http://apps.3esofttech.com/EntBot/findMoviesByCategory", 
        data : {"category": "playing_now"} 
        }).then(function (response) { 
        
        console.log(response); 
        $scope.movies = response.data;
       // foreach(response.data.length<4    )
        }, function (response) { 
        console.log("Error"); 
        console.log(response);
        }); 
});















routerApp.controller('homeCtrl', function($scope,$state,$http) {

    //$scope.movies = [];
    $http({ 
        method : "POST", 
        url : "http://apps.3esofttech.com/EntBot/findMoviesByCategory", 
        data : {"category": "upcoming"} 
        }).then(function (response) { 
        
        console.log(response); 
        $scope.movies = response.data;
       // foreach(response.data.length<4    )
        }, function (response) { 
        console.log("Error"); 
        console.log(response);
        }); 
    
    
    
    
    $http({ 
        method : "POST", 
        url : "http://apps.3esofttech.com/EntBot/findMoviesByCategory", 
        data : {"category": "playing_now"} 
        }).then(function (response) { 
        
        console.log(response); 
        $scope.movies1 = response.data;
       // foreach(response.data.length<4    )
        }, function (response) { 
        console.log("Error"); 
        console.log(response);
        }); 
    
    
    
    $http({ 
        method : "POST", 
        url : "http://apps.3esofttech.com/EntBot/findMoviesByCategory", 
        data : {"category": "popular"} 
        }).then(function (response) { 
        
        console.log(response); 
        $scope.movies2 = response.data;
       // foreach(response.data.length<4    )
        }, function (response) { 
        console.log("Error"); 
        console.log(response);
        }); 
    
    
    $http({ 
        method : "POST", 
        url : "http://apps.3esofttech.com/EntBot/findMoviesByCategory", 
        data : {"category": "top_rated"} 
        }).then(function (response) { 
        
        console.log(response); 
        $scope.movies3 = response.data;
       // foreach(response.data.length<4    )
        }, function (response) { 
        console.log("Error"); 
        console.log(response);
        }); 
    
    
    
    
    
});


routerApp.controller('castdescCtrl',function($scope,$stateParams,$http) {
    $scope.cID = $stateParams.castID;
    console.log($scope.cID);
    
    $http({ 
        method : "POST", 
        url : "http://apps.3esofttech.com/EntBot/getPersonDetails", 
        data : {"personId": $scope.cID} 
        }).then(function (response) { 
        
        console.log(response); 
        $scope.cas = response.data;
       // foreach(response.data.length<4    )
        }, function (response) { 
        console.log("Error"); 
        console.log(response);
        }); 
});





routerApp.controller('descCtrl',function($scope,$stateParams,$http){
    
    $scope.mID = $stateParams.movieID;
    console.log($scope.mID);
    
    //Call api based on movieID
    $http({ 
        method : "POST", 
        url : "http://apps.3esofttech.com/EntBot/getMovieDetails", 
        data : {"movieId": $scope.mID} 
        }).then(function(response) { 

        console.log(response); 
        $scope.poster = response.data.posterPath;
        $scope.cast = response.data.cast;
        $scope.camera = response.data.crew.Camera;
        $scope.writing = response.data.crew.Writing;
        $scope.production = response.data.crew.Production;
        
        $scope.sound = response.data.crew.Sound;
        $scope.editing = response.data.crew.Editing;
        $scope.directing = response.data.crew.Directing;
        $scope.movieTitle = response.data.originalTitle;
        $scope.overview=response.data.overView;
        $scope.release=response.data.releaseDate;
        $scope.vote=response.data.voteAverage;
        $scope.Directing=response.data.crew.Directing;
        $scope.art=response.data.crew.Art;
        $scope.cre=response.data.crew.Crew;
        $scope.cast=response.data.cast;
        $scope.genre=response.data.genres;
        $scope.status=response.data.status;
        $scope.productioncompanies=response.data.productionCompanies;
        $scope.original=response.data.runTime;
        $scope.budget=response.data.budget;
        $scope.language=response.data.language;
        $scope.homepage=response.data.homePage;
        $scope.imag1=response.data.allPosterImages.en[1].small;
        $scope.imag2=response.data.allPosterImages.en[2].small;
        $scope.imag3=response.data.allPosterImages.en[3].small;
        $scope.imag4=response.data.allPosterImages.en[4].small;
        $scope.imag5=response.data.allPosterImages.en[5].small;
        $scope.imag6=response.data.allPosterImages.en[6].small;
        $scope.popularity=response.data.popularity;
        $scope.revenue=response.data.revenue;
        $scope.imdbId=response.data.imdbId;
        $scope.similarMovies=response.data.similarMovies;
        $scope.adult=response.data.adult;
        $scope.trailers=response.data.trailers; 
        alert($scope.trailers);
        }, function (response) { 
        console.log("Error"); 
        console.log(response);
        }); 
    
    $scope.showChar = function(){
       $("#show1").toggle("slow");
    }
    
    
    $scope.showcast = function(){
       $("#show2").toggle("slow");
    }
    
    
    
    $scope.getUrl=function(key)
    {
       
       // $scope.uvar=nIGtF3J5kn8
        $scope.uvar= 'https://www.youtube.com/embed' + key;
    }
    
});

routerApp.controller('searchCtrl', function($scope,$state,$stateParams,$http) {

    $scope.name = $stateParams.movie;
    console.log($scope.name);
    $http({ 
        method : "POST", 
        url : "http://apps.3esofttech.com/EntBot/findByName", 
        data : {"name": $scope.name} 
        }).then(function(response) { 
        $scope.mov=response.data;
        //console.log(response);
    }, function (response) { 
        console.log("Error");
        console.log(response);
    
});
});





