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
          url      : '/perfil',
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
      })
      .state('app.events', {
          url      : '/eventos',
          views    : {
            'content@app': {
                templateUrl: 'app/main/pages/events/events.html',
                controller : 'EventsController as vm'
            }
          },
          resolve: {
            authUser: function(AuthService){
              return AuthService.$requireSignIn();
            }
          }
      })
      .state('app.shop', {
          url      : '/tienda',
          views    : {
            'content@app': {
                templateUrl: 'app/main/pages/shop/shop.html',
                controller : 'ShopController as vm'
            }
          },
          resolve: {
            authUser: function(AuthService){
              return AuthService.$requireSignIn();
            }
          }
      })
      .state('app.contests', {
          url      : '/concursos',
          views    : {
            'content@app': {
                templateUrl: 'app/main/pages/contests/contests.html',
                controller : 'ContestsController as vm'
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

      msNavigationServiceProvider.saveItem('pages.shop', {
          title    : 'Tienda',
          icon     : 'icon-cart',
          state    : 'app.shop',
          weight   : 1
      });

      msNavigationServiceProvider.saveItem('pages.contests', {
          title    : 'Concursos',
          icon     : 'icon-crown',
          state    : 'app.contests',
          weight   : 1
      });

    }

})();
