(function() {
  'use strict';

  angular
    .module('willys')
    .factory('AuthService', AuthService);

    /** @ngInject */
    function AuthService($firebaseAuth) {
      return $firebaseAuth();
    }

})();
