(function() {
  'use strict';

  angular
    .module('willys')
    .factory('authInterceptor', authInterceptor);

  /** @ngInject */
  function authInterceptor($q, AuthService, $injector) {
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
        responseError: function (response) {
            if (response.status === 401) {
              AuthService.$getAuth().getToken(true).then(function(tokenId){
                sessionStorage.user = angular.toJson({
                  'tokenId': tokenId
                });
                // @TODO return new promise request
                var deferred = $q.defer();
                $injector.get("$http")(response.config).then(function(resp) {
                    deferred.resolve(resp);
                },function() {
                    deferred.reject();
                });
                return $q.when(deferred.promise);
              });
            } else {
              return response || $q.when(response);
            }
        }
    };
  }

})();
