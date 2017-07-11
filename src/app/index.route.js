(function() {
  'use strict';

  angular
  .module('willys')
  .config(routeConfig);

  function routeConfig($stateProvider, $urlRouterProvider, $locationProvider, AnalyticsProvider) {

    // Enabe HTML5 Mode
    $locationProvider.html5Mode(true);

    $stateProvider
    .state('app', {
        abstract: true,
        views   : {
            'main@'         : {
                templateUrl: 'app/core/layouts/vertical-navigation.html',
                controller : 'MainController as vm'
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

    // Track all URL query params (default is false).
    AnalyticsProvider.trackUrlParams(true);

    // Change the default page event name.
    // Helpful when using ui-router, which fires $stateChangeSuccess instead of $routeChangeSuccess.
    AnalyticsProvider.setPageEvent('$stateChangeSuccess');

  }

})();
