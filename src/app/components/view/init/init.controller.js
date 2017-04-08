(function() {
  'use strict';

  angular
    .module('willys')
    .controller('InitController', InitController);

  /** @ngInject */
  function InitController(authUser, Data, $firebaseArray) {
    var vm = this;
    Data.notify('initialResolved');
    Data.notify('partialResolved');

    vm.user = authUser;
    vm.featured = $firebaseArray(firebase.database().ref().child("featured"));

  }

})();
