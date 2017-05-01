(function() {
  'use strict';

  angular
    .module('willys')
    .controller('InitController', InitController);

  /** @ngInject */
  function InitController(authUser, DataService) {
    var vm = this;
    DataService.notify('initialResolved');
    DataService.notify('partialResolved');

    vm.featured = [1,2]

  }

})();
