(function() {
  'use strict';

  angular
    .module('willys')
    .factory('User', User);

    /**
    * Database connection for User
    * @TODO Need security Layer on top
    */

    /** @ngInject */
    function User($firebaseObject, $firebaseArray){

      var ref = firebase.database().ref('users');

      return {
        get: function(id) {
          var userRef = ref.child(id);
          return $firebaseObject(userRef);
        },
        create: function(authUser) {
          var user = new $firebaseObject(ref.child(authUser.uid));
          user.$id = authUser.uid;
          user.displayName = authUser.displayName;
          user.email = authUser.email;
          user.image = authUser.photoURL;
          user.role = 'USER';
          return user.$save();
        },
        update: function(authUser) {
          // do nothing
        }
      };

    }

})();
