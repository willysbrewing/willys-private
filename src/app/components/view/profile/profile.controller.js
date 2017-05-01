(function() {
  'use strict';

  angular
    .module('willys')
    .controller('ProfileController', ProfileController);

  /** @ngInject */
  function ProfileController(authUser, DataService, UserService) {
    var vm = this;
    DataService.notify('initialResolved');
    DataService.notify('partialResolved');

    vm.user = null;
    vm.user = UserService.me(function(user) {
      vm.user = user.serialize().attributes;
    });

  }

})();
