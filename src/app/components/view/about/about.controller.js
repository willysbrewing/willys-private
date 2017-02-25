(function() {
  'use strict';

  angular
    .module('willys')
    .controller('AboutController', AboutController);

  /** @ngInject */
  function AboutController($timeout, Data) {
    var vm = this;
    Data.notify('initialResolved');
    Data.notify('partialResolved');

  }
})();
