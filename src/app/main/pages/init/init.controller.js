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

    vm.featured = [1,2,4,5]
    vm.image = "https://www.willysbrewing.com/media/images/riotapa_Ydj4MCz.2e16d0ba.fill-1800x978.jpg"

  }

})();
