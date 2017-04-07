(function() {
  'use strict';

  angular
    .module('willys')
    .controller('InitController', InitController);

  /** @ngInject */
  function InitController(user, Data, $firebaseArray) {
    var vm = this;
    Data.notify('initialResolved');
    Data.notify('partialResolved');

    vm.user = user;
    vm.featured = $firebaseArray(firebase.database().ref().child("featured"));

  }

})();
