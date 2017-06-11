(function() {
  'use strict';

  angular
    .module('app.main')
    .controller('EventsController', EventsController);

  /** @ngInject */
  function EventsController(authUser, EventService, UserService, CacheService) {
    var vm = this;

    vm.user = UserService.me(function(user) {
      vm.user = user.serialize();
    });

    vm.events = EventService.query(function(events) {
      vm.events = events.serialize();
    });

    vm.goingEvent = function(event) {
      if(vm.user.attributes.events_going.indexOf(event.id) < 0){
        // update just view model, no more requests
        event.attributes.going.push(vm.user.attributes.id);
        vm.user.attributes.events_going.push(event.id);
        // now update! transactional yo
        EventService.going({
          event_id: event.id
        });
        // update cache
        CacheService.updateUser(vm.user);
        CacheService.updateEvents(vm.events);
      }
    }

  }

})();
