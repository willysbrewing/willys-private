(function() {
  'use strict';

  angular
    .module('willys')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController(authUser, AuthService, DataService, UserService, $state, $http) {
    var vm = this;
    DataService.notify('initialResolved');
    vm.AuthService = AuthService;

    if (authUser) {
      authUser.getToken().then(function(tokenId){
        sessionStorage.user = angular.toJson({
          'tokenId': tokenId
        });
        $state.go('init');
      });
    } else {
      DataService.notify('partialResolved');
    }

  }

})();
