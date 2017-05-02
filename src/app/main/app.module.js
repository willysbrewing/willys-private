(function ()
{
    'use strict';

    angular
        .module('app.main', ['ngAnimate', 'ngCookies', 'ngSanitize', 'ngMessages',
         'ngResource', 'ui.router', 'ngMaterial', 'ngFileUpload', '720kb.socialshare',
         'firebase'])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $urlRouterProvider, msNavigationServiceProvider){

      // Default State
      $urlRouterProvider.otherwise('login');

      // States
      $stateProvider
      .state('app.init', {
          url      : '/',
          views    : {
            'content@app': {
                templateUrl: 'app/main/pages/init/init.html',
                controller : 'InitController as vm'
            }
          },
          resolve: {
            authUser: function(AuthService, DataService){
              DataService.notify('partialLoading');
              return AuthService.$requireSignIn();
            }
          }
      })
      .state('app.login', {
          url      : '/login',
          views    : {
            'content@app': {
                templateUrl: 'app/main/pages/login/login.html',
                controller : 'LoginController as vm'
            }
          },
          resolve: {
            authUser: function(AuthService, DataService){
              DataService.notify('partialLoading');
              return AuthService.$waitForSignIn();
            }
          }
      })
      .state('app.profile', {
          url      : '/profile',
          views    : {
            'content@app': {
                templateUrl: 'app/main/pages/profile/profile.html',
                controller : 'ProfileController as vm'
            }
          },
          resolve: {
            authUser: function(AuthService, DataService){
              DataService.notify('partialLoading');
              return AuthService.$requireSignIn();
            }
          }
      });

      // Navigation
      msNavigationServiceProvider.saveItem('pages', {
          title : 'Pages',
          group : true,
          weight: 1
      });

      msNavigationServiceProvider.saveItem('pages.init', {
          title    : 'Home',
          icon     : 'icon-tile-four',
          state    : 'app.init',
          weight   : 1
      });

      msNavigationServiceProvider.saveItem('pages.about', {
          title    : 'About',
          icon     : 'icon-tile-four',
          state    : 'app.about',
          weight   : 1
      });

    }

})();
