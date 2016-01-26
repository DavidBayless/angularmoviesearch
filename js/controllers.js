app.controller('MovieController', ['$http', MovieController]);

function MovieController($http) {
  var vm = this;

  var config = {
    method: 'GET',
    url: 'http://www.omdbapi.com/?s=Frozen&y=&plot=short&r=json'
  };

  $http(config)
    .then(function(response) {
      console.log(response);
      vm.infographic = response;
      var movieChain = [];
      for (var i = 0; i < response.data.Search.length; i++) {
        movieChain.push(response.data.Search[i]);
      }
      movieChain.forEach(function(movie, index) {
        var newConfig = {
          method: 'GET',
          url: 'http://www.omdbapi.com/?t='+movie.Title+'&y='+movie.Year+'&r=json'
        };

        $http(newConfig)
        .then(function(res) {
          vm.infographic.data.Search[index].imdbRating = res.data.imdbRating;
          vm.infographic.data.Search[index].Rated = res.data.Rated;
          if (vm.infographic.data.Search[index].Poster === 'N/A') {
            vm.infographic.data.Search[index].Poster = 'http://autopartsguy.com/media/no_product.png';
          }
        });
      });
    })
    .catch(function(response) {
      vm.infographic = response;
    });
}
