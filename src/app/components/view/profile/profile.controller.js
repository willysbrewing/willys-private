(function() {
  'use strict';

  angular
    .module('willys')
    .controller('ProfileController', ProfileController);

  /** @ngInject */
  function ProfileController(authUser, Data) {
    var vm = this;
    Data.notify('initialResolved');
    Data.notify('partialResolved');

    vm.user = authUser;

  }

})();
