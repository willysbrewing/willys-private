(function() {
  'use strict';

  angular
  .module('willys')
  .config(routeConfig);

  function routeConfig($stateProvider, $urlRouterProvider, $locationProvider) {

    // Enabe HTML5 Mode
    $locationProvider.html5Mode(true);

    $stateProvider
    .state('app', {
        abstract: true,
        views   : {
            'main@'         : {
                templateUrl: 'app/core/layouts/vertical-navigation.html'
            },
            'toolbar@app'   : {
                templateUrl: 'app/toolbar/toolbar.html',
                controller : 'ToolbarController as vm'
            },
            'navigation@app': {
                templateUrl: 'app/navigation/navigation.html',
                controller : 'NavigationController as vm'
            }
        }
    });
  }

})();
