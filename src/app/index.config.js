(function() {
  'use strict';

  angular
    .module('willys')
    .config(config);

  /** @ngInject */
  function config(APP_CONFIG, $logProvider, $mdThemingProvider, $httpProvider, $mdDateLocaleProvider, AnalyticsProvider) {

    // Enable log
    $logProvider.debugEnabled(APP_CONFIG.DEBUG_MODE);

    $httpProvider.interceptors.push('authInterceptor');

    $mdDateLocaleProvider.formatDate = function(date) {
       return moment(date).format('DD-MM-YYYY');
    };

    AnalyticsProvider.setAccount({
      tracker: 'UA-85690916-3',
      fields: {
        cookieDomain: 'app.willysbrewing.com'
      },
      crossDomainLinker: true,
      crossLinkDomains: ['www.willysbrewing.com'],
      trackEvent: true
    });

  }

})();
