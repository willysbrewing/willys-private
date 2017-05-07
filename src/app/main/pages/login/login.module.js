(function ()
{
    'use strict';

    angular
        .module('app.login', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider){

      // State
      $stateProvider.state('app.login', {
          url      : '/login',
          views    : {
              'main@'                          : {
                  templateUrl: 'app/core/layouts/content-only.html'
              },
              'content@app.login': {
                  templateUrl: 'app/main/pages/login/login.html',
                  controller : 'LoginController as vm'
              }
          },
          resolve: {
            authUser: function(AuthService){
              return AuthService.$waitForSignIn();
            }
          },
          bodyClass: 'login-v2'
      });

    }

})();
