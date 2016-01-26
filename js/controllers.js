app.controller('MovieController', ['$http', MovieController]);

function MovieController($http) {
  var vm = this;

  var config = {
    method: 'GET',
    url: 'http://www.omdbapi.com/?t=Frozen&y=&plot=short&r=json'
  };

  $http(config)
    .then(function(response) {
      console.log(response);
      vm.infographic = response;
    })
    .catch(function(response) {
      vm.infographic = response;
    });
}
