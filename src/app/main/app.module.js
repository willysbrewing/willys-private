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
      .state('app.home', {
          url      : '/',
          views    : {
            'content@app': {
                templateUrl: 'app/main/pages/home/home.html',
                controller : 'HomeController as vm'
            }
          },
          resolve: {
            authUser: function(AuthService){
              return AuthService.$requireSignIn();
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
            authUser: function(AuthService){
              return AuthService.$requireSignIn();
            }
          }
      });

      // Navigation
      msNavigationServiceProvider.saveItem('pages', {
          title : 'Secciones',
          group : true,
          weight: 1
      });

      msNavigationServiceProvider.saveItem('pages.init', {
          title    : 'Home',
          icon     : 'icon-home',
          state    : 'app.home',
          weight   : 1
      });

      msNavigationServiceProvider.saveItem('pages.events', {
          title    : 'Eventos',
          icon     : 'icon-tile-four',
          state    : 'app.about',
          weight   : 1
      });

    }

})();
