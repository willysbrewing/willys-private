(function() {
  'use strict';

  angular
    .module('willys')
    .controller('InitController', InitController);

  /** @ngInject */
  function InitController($timeout, Data, user) {
    var vm = this;
    Data.notify('initialResolved');
    Data.notify('partialResolved');

    vm.user = user;
  }

})();
