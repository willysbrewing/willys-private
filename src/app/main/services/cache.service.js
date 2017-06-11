(function() {
  'use strict';

  angular
    .module('willys')
    .factory('CacheService', CacheService);

    /** @ngInject */
    function CacheService($cacheFactory, APP_CONFIG) {

      var $httpDefaultCache = $cacheFactory.get('$http');

      return {
        'updateUser': function(user){
           $httpDefaultCache.put(APP_CONFIG.API_URL+'/'+APP_CONFIG.API_VERSION+'/user/me', {data: [user]});
        },
        'updateEvents': function(events) {
          $httpDefaultCache.put(APP_CONFIG.API_URL+'/'+APP_CONFIG.API_VERSION+'/event', {data: events});
        },
        'updateNews': function(news) {
          $httpDefaultCache.put(APP_CONFIG.API_URL+'/'+APP_CONFIG.API_VERSION+'/news', {data: news});
        }

      };

    }

})();
