(function() {
  'use strict';

  angular
  .module('willys')
  .config(routeConfig);

  function routeConfig($stateProvider, $urlRouterProvider, $locationProvider) {

    // Enabe HTML5 Mode
    $locationProvider.html5Mode(true);

    // Default State
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('init', {
      url: '/',
      templateUrl: 'app/components/view/init/init.html',
      controller: 'InitController',
      controllerAs: 'vm',
      resolve: {
        user: function(Data){
          Data.notify('partialLoading');
          return Data.getUser();
        },
      },
    })
    .state('user', {
      url: '/user',
      templateUrl: 'app/components/view/user/user.html',
      controller: 'UserController',
      controllerAs: 'vm',
      resolve: {
        user: function(Data, User){
          Data.notify('partialLoading');
          if(angular.isDefined(Data.getUser())){
            return Data.getUser();
          }
          // Query from ngResource element
          var user = User.query();
          // Set promise in Data Factory
          Data.setUser(user.$promise);
          // Retun factory method response
          return Data.getUser();
        },
      },
    })
    .state('about', {
      url: '/about',
      templateUrl: 'app/components/view/about/about.html',
      controller: 'AboutController',
      controllerAs: 'vm',
    })
  }

})();
