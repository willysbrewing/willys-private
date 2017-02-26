(function() {
  'use strict';

  angular
    .module('willys')
    .controller('InitController', InitController);

  /** @ngInject */
  function InitController(user, Data) {
    var vm = this;
    Data.notify('initialResolved');
    Data.notify('partialResolved');

    vm.user = user;
    console.log(vm.user);
  }

})();
