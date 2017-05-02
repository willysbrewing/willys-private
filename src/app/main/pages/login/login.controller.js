(function() {
  'use strict';

  angular
    .module('app.login')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController(authUser, AuthService, DataService, UserService, $state) {
    var vm = this;
    DataService.notify('initialResolved');
    vm.AuthService = AuthService;

    if (authUser) {
      authUser.getToken().then(function(tokenId){
        sessionStorage.user = angular.toJson({
          'tokenId': tokenId
        });
        $state.go('app.init');
      });
    } else {
      DataService.notify('partialResolved');
    }

  }

})();
