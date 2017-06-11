(function() {
  'use strict';

  angular
    .module('willys')
    .config(config);

  /** @ngInject */
  function config(APP_CONFIG, $logProvider, $mdThemingProvider, $httpProvider) {

    // Enable log
    $logProvider.debugEnabled(APP_CONFIG.DEBUG_MODE);

    $httpProvider.interceptors.push('authInterceptor');

  }

})();
