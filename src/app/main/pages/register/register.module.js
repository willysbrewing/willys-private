(function ()
{
    'use strict';

    angular
        .module('app.register', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        // State
        $stateProvider.state('app.register', {
          url      : '/register',
          views    : {
              'main@'                          : {
                  templateUrl: 'app/core/layouts/content-only.html'
              },
              'content@app.register': {
                  templateUrl: 'app/main/pages/register/register.html',
                  controller : 'RegisterController as vm'
              }
          },
          bodyClass: 'register-v2'
        });
    }

})();
