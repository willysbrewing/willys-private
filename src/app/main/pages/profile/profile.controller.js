(function() {
  'use strict';

  angular
    .module('app.main')
    .controller('ProfileController', ProfileController);

  /** @ngInject */
  function ProfileController(authUser, UserService) {
    var vm = this;
    vm.authUser = authUser;
    vm.UserService = UserService;
    vm.photoUrl = vm.authUser.photoURL || 'assets/images/profile.jpg';

    vm.user = UserService.me(function(user) {
      vm.user = user.serialize().attributes;
      vm.user.birthdate = vm.user.birthdate || new Date();
    });

  }

})();
