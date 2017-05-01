(function() {
  'use strict';

  angular
  .module('willys')
  .config(routeConfig);

  function routeConfig($stateProvider, $urlRouterProvider, $locationProvider) {

    // Enabe HTML5 Mode
    $locationProvider.html5Mode(true);

    // Default State
    $urlRouterProvider.otherwise('login');

    $stateProvider
    .state('init', {
      url: '/',
      templateUrl: 'app/components/view/init/init.html',
      controller: 'InitController',
      controllerAs: 'vm',
      resolve: {
        authUser: function(AuthService, DataService){
          DataService.notify('partialLoading');
          return AuthService.$requireSignIn();
        },
      },
    })
    .state('login', {
      url: '/login',
      templateUrl: 'app/components/view/login/login.html',
      controller: 'LoginController',
      controllerAs: 'vm',
      resolve: {
        authUser: function(AuthService, DataService){
          DataService.notify('partialLoading');
          return AuthService.$waitForSignIn();
        },
      },
    })
    .state('profile', {
      url: '/perfil',
      templateUrl: 'app/components/view/profile/profile.html',
      controller: 'ProfileController',
      controllerAs: 'vm',
      resolve: {
        authUser: function(AuthService, DataService){
          DataService.notify('partialLoading');
          return AuthService.$requireSignIn();
        },
      },
    })
  }

})();
