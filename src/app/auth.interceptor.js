(function() {
  'use strict';

  angular
    .module('willys')
    .factory('authInterceptor', authInterceptor);

  /** @ngInject */
  function authInterceptor($q, AuthService, $injector, $rootScope) {
    return {
        request: function (config) {
          $rootScope.$emit('$APIRequestStartEvent');
          config.headers = config.headers || {};
          var user = angular.fromJson(sessionStorage.user);
          if (user) {
            var tokenId = user.tokenId;
            config.headers.Authorization = 'Bearer ' + tokenId;
          }
          return config;
        },
        response: function(config) {
          $rootScope.$emit('$APIRequestEndEvent');
          return config;
        },
        responseError: function (response) {
          if (response.status === 401) {
            return AuthService.$getAuth().getToken(true).then(function(tokenId){
              sessionStorage.user = angular.toJson({
                'tokenId': tokenId
              });
              $rootScope.$emit('$APIRequestEndEvent');
              var $http =  $injector.get("$http");
              return $http(response.config);
            });
          } else {
            return response || $q.when(response);
          }
        }
    };
  }

})();
