(function() {
  'use strict';

  angular
    .module('willys')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope, $state, $timeout) {

    // Listening statechangeError from ui-router
    var stateChangeError = $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
      if (error === 'AUTH_REQUIRED') {
        $state.go('app.login');
      }
    });

    // Activate loading indicator
    var stateChangeStartEvent = $rootScope.$on('$stateChangeStart', function ()
    {
        $rootScope.loadingProgress = true;
    });

    // De-activate loading indicator
    var stateChangeSuccessEvent = $rootScope.$on('$stateChangeSuccess', function ()
    {
        $timeout(function ()
        {
            $rootScope.loadingProgress = false;
        });
    });

    // API Requests
    var APIRequestStartEvent = $rootScope.$on('$APIRequestStartEvent', function ()
    {
        $timeout(function ()
        {
            $rootScope.loadingProgress = true;
        });
    });

    //
    var APIRequestEndEvent = $rootScope.$on('$APIRequestEndEvent', function ()
    {
        $timeout(function ()
        {
            $rootScope.loadingProgress = false;
        });
    });

    $rootScope.$on('$destroy', function ()
      {
          stateChangeError();
          stateChangeStartEvent();
          stateChangeSuccessEvent();
          APIRequestStartEvent();
          APIRequestEndEvent();
    });

  }

})();
