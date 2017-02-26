(function() {
  'use strict';

  angular
    .module('willys')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $q, $rootScope, $state, Auth, Data) {

    // Listening statechangeError from ui-router
    $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
      if (error === 'AUTH_REQUIRED') {
        $state.go('login');
      }
    });

    Auth.$onAuthStateChanged(function(firebaseUser){
      if(!firebaseUser){
        $state.go('login');
      }
    });


    // var auth = Auth;
    //
    // // Do a promise
    // var user = $q(function(resolve, reject){
    //
    //   auth.$onAuthStateChanged(function(firebaseUser){
    //     resolve(firebaseUser);
    //   });
    //
    // });
    //
    // Data.setUser(user);

  }

})();
