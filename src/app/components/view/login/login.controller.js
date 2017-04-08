(function() {
  'use strict';

  angular
    .module('willys')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController(authUser, Auth, Data, User, $state) {
    var vm = this;
    Data.notify('initialResolved');
    vm.Auth = Auth;

    if (authUser) {
      var user = User.get(authUser.uid).$loaded(function(){
        if (user.$id) {
          vm.user = user;
          $state.go('init');
        } else {
          User.create(authUser).then(function(user){
            vm.user = user;
            $state.go('init');

          });
        }
      });
    } else {
      Data.notify('partialResolved');
    }

  }

})();
