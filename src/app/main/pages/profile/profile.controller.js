(function() {
  'use strict';

  angular
    .module('app.main')
    .controller('ProfileController', ProfileController);

  /** @ngInject */
  function ProfileController(authUser, UserService) {
    var vm = this;
    vm.authUser = authUser;
    vm.photoUrl = vm.authUser.photoURL || 'assets/images/profile.jpg';

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
