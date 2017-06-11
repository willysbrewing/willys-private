(function() {
  'use strict';

  angular
    .module('willys')
    .factory('EventService', EventService);

    /** @ngInject */
    function EventService(APP_CONFIG, $resource){

      var Event = $resource(APP_CONFIG.API_URL+'/'+APP_CONFIG.API_VERSION+'/event/:event_id', {event:'@event_id'}, {
        'query': {
          'isArray': false,
          'cache': true
        },
        'going': {
          'method': 'GET',
          'url': APP_CONFIG.API_URL+'/'+APP_CONFIG.API_VERSION+'/event/:event_id/going'
        }
      });

      Event.prototype.serialize = function() {
        return this.data;
      };
      
      return Event;

    }

})();
