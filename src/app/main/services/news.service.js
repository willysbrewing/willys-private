(function() {
  'use strict';

  angular
    .module('willys')
    .factory('NewsService', NewsService);

    /** @ngInject */
    function NewsService(APP_CONFIG, $resource){

      var News = $resource(APP_CONFIG.API_URL+'/'+APP_CONFIG.API_VERSION+'/news/:news_id', {news:'@news_id'}, {
        'query': {
          'isArray': false,
          'cache': true
        },
        'like': {
          'method': 'GET',
          'url': APP_CONFIG.API_URL+'/'+APP_CONFIG.API_VERSION+'/news/:news_id/like'
        }
      });

      News.prototype.serialize = function() {
        return this.data;
      };

      return News;

    }

})();
