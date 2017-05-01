(function() {
  'use strict';

  angular
    .module('willys')
    .config(config);

  /** @ngInject */
  function config(APP_CONFIG, $logProvider, $mdThemingProvider, $httpProvider) {

    // Enable log
    $logProvider.debugEnabled(APP_CONFIG.DEBUG_MODE);

    $mdThemingProvider.theme('default')
    .primaryPalette('grey')
    .accentPalette('blue');

    $httpProvider.interceptors.push('authInterceptor');

  }

  angular
    .module('willys')
    .factory('authInterceptor', authInterceptor);

  /** @ngInject */
  function authInterceptor($q, $firebaseAuth, $location) {
    return {
        request: function (config) {
            config.headers = config.headers || {};
            var user = angular.fromJson(sessionStorage.user);
            if (user) {
              var tokenId = user.tokenId;
              config.headers.Authorization = 'Bearer ' + tokenId;
            }
            return config;
        },
        response: function (response) {
            if (response.status === 403 || response.status === 401) {
              authUser.getToken({'forceRefresh': true}).then(function(tokenId){
                sessionStorage.user = angular.toJson({
                  'tokenId': tokenId
                });
              });
            }
            return response || $q.when(response);
        }
    };
  }

})();
