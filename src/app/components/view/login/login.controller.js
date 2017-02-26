(function() {
  'use strict';

  angular
    .module('willys')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController(user, Auth, Data, $state) {
    var vm = this;
    Data.notify('initialResolved');
    Data.notify('partialResolved');

    vm.auth = Auth;
    vm.user = user;

    // if logged user go to home
    if(vm.user){
      $state.go('init');
    }

  }

})();
