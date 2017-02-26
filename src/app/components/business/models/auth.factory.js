(function() {
  'use strict';

  angular
    .module('willys')
    .factory('Auth', Auth);

    /** @ngInject */
    function Auth(APP_CONFIG, $firebaseAuth){
      return $firebaseAuth();
    }

})();
