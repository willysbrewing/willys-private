(function() {
  'use strict';

  angular
    .module('app.main')
    .controller('ProfileController', ProfileController);

  /** @ngInject */
  function ProfileController(authUser, DataService, UserService) {
    var vm = this;
    DataService.notify('initialResolved');
    DataService.notify('partialResolved');
    vm.authUser = authUser;

    vm.user = null;
    vm.user = UserService.me(function(user) {
      vm.user = user.serialize().attributes;
    });

    vm.card = {
        "title": "Inversor",
        "subtitle": "",
        "media": {
            "image": {
                "src": "/assets/images/backgrounds/riotapa.jpg",
                "alt": "Alice Cooper - Poison"
            }
        }
    };

  }

})();
