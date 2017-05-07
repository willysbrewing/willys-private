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
        "title": "Rate this album",
        "subtitle": "Alice Cooper",
        "text": "Poison",
        "media": {
            "image": {
                "src": "assets/images/etc/alice-cooper-poison.jpg",
                "alt": "Alice Cooper - Poison"
            }
        }
    };

  }

})();
