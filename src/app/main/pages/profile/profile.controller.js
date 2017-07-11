(function() {
  'use strict';

  angular
    .module('app.main')
    .controller('ProfileController', ProfileController);

  /** @ngInject */
  function ProfileController(authUser, UserService, CacheService) {
    var vm = this;
    vm.authUser = authUser;
    vm.UserService = UserService;
    vm.photoUrl = vm.authUser.photoURL || 'assets/images/profile.jpg';

    vm.user = UserService.me(function(user) {
      vm.user = user.serialize();
      vm.user.attributes.birthdate = vm.user.attributes.birthdate || new Date();
    });

    vm.updateMe = function (){
      vm.UserService.updateMe(vm.user.attributes)
      CacheService.updateUser(vm.user);
    }

  }

})();
