app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: './views/main.html',
      controller: 'MovieController'
    })
    .when('/details/:name/:year', {
      templateUrl: './views/detail.html',
      controller: 'MovieController'
    })
    .otherwise({
      redirect: '/'
    });
});
