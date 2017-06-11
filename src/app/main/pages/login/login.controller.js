(function() {
  'use strict';

  angular
    .module('app.login')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController(authUser, AuthService, UserService, $state, $scope, $rootScope) {
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

    if (authUser) {
      authUser.getToken().then(function(tokenId){
        sessionStorage.user = angular.toJson({
          'tokenId': tokenId
        });
        $state.go('app.home');
      });
    }

    vm.login = function() {
      vm.AuthService.$signInWithEmailAndPassword(vm.form.email, vm.form.password)
      .then(function(){
        $state.go('app.home');
      })
      .catch(function(error) {
        vm.error = error.message;
        if (error.code === 'auth/user-not-found') {
          vm.error = 'Usuario o password no válido';
        }
      });
    }

  }

})();
