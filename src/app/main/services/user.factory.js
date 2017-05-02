(function() {
  'use strict';

  angular
    .module('willys')
    .factory('UserService', UserService);

    /** @ngInject */
    function UserService(APP_CONFIG, $resource){

      var User = $resource(APP_CONFIG.API_URL+'/api/'+APP_CONFIG.API_VERSION+'/user/:user_id', {user:'@user_id'}, {
        'get': {
          'cache': true
        },
        'query': {
          'isArray': false
        },
        'update': {
          'method': 'PATCH'
        },
        'me': {
          'method': 'GET',
          'url': APP_CONFIG.API_URL+'/api/'+APP_CONFIG.API_VERSION+'/user/me',
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
