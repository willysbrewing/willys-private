(function() {
  'use strict';

  angular
    .module('willys')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope, $state) {

    // Listening statechangeError from ui-router
    var stateChangeError = $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
      if (error === 'AUTH_REQUIRED') {
        $state.go('app.login');
      }
    });

    $rootScope.$on('$destroy', function ()
      {
          stateChangeError();
    });

  }

})();
