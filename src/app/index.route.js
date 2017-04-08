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
        authUser: function(Auth, Data, User){
          Data.notify('partialLoading');
          return Auth.$requireSignIn().then(function(authUser){
            return User.get(authUser.uid);
          });
        },
      },
    })
    .state('login', {
      url: '/login',
      templateUrl: 'app/components/view/login/login.html',
      controller: 'LoginController',
      controllerAs: 'vm',
      resolve: {
        authUser: function(Auth, Data, User){
          Data.notify('partialLoading');
          return Auth.$waitForSignIn();
        },
      },
    })
    .state('profile', {
      url: '/perfil',
      templateUrl: 'app/components/view/profile/profile.html',
      controller: 'ProfileController',
      controllerAs: 'vm',
      resolve: {
        authUser: function(Auth, Data, User){
          Data.notify('partialLoading');
          return Auth.$requireSignIn().then(function(authUser){
            return User.get(authUser.uid);
          });
        },
      },
    })
  }

})();
