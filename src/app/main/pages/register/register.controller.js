(function ()
{
    'use strict';

    angular
        .module('app.register')
        .controller('RegisterController', RegisterController);

    /** @ngInject */
    function RegisterController(AuthService, $state, UserService, $scope, $rootScope) {
      var vm = this;
      vm.AuthService = AuthService;

      // Remove the splash screen
      $scope.$on('$viewContentAnimationEnded', function (event)
      {
          if ( event.targetScope.$id === $scope.$id )
          {
              $rootScope.$broadcast('msSplashScreen::remove');
          }
      });

      vm.register = function() {

        var userProps = {
          first_name: vm.form.firstname,
          last_name: vm.form.lastname,
          email: vm.form.email
        };

        var user = new UserService(userProps);

        user.$createMe()
        .then(function(data){
          if(!data.errors) {
            // Success
            vm.AuthService.$createUserWithEmailAndPassword(vm.form.email, vm.form.password)
            .then(function(){
              $state.go('app.login');
            })
            .catch(function(error) {
              vm.error = error.message;
              if (error.code === 'auth/weak-password') {
                vm.error = 'La contraseña debe tener al menos 6 caracteres.';
              }
              if (error.code === 'auth/email-already-in-use') {
                vm.error = 'Ya existe un usuario con ese email';
              }
            });
          } else {
            vm.error = data.errors[0].detail;
          }
        });

      }

    }

})();
