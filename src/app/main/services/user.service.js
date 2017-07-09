(function() {
  'use strict';

  angular
    .module('willys')
    .factory('UserService', UserService);

    /** @ngInject */
    function UserService(APP_CONFIG, $resource){

      var User = $resource(APP_CONFIG.API_URL+'/'+APP_CONFIG.API_VERSION+'/user/:user_id', {user:'@user_id'}, {
        'get': {
          'cache': true
        },
        'query': {
        },
        'update': {
          'method': 'PATCH'
        },
        'me': {
          'method': 'GET',
          'url': APP_CONFIG.API_URL+'/'+APP_CONFIG.API_VERSION+'/user/me',
          'cache': true
        },
        'createMe': {
          'method': 'POST',
          'url': APP_CONFIG.API_URL+'/'+APP_CONFIG.API_VERSION+'/user/me',
          'cache': true
        },
        'updateMe': {
          'method': 'PATCH',
          'url': APP_CONFIG.API_URL+'/'+APP_CONFIG.API_VERSION+'/user/me',
          'cache': true
        }
      });

      User.prototype.serialize = function() {
        if (this.data.length === 1){
          return this.data[0];
        } else {
          return this.data;
        }
      };

      return User;

    }

})();
