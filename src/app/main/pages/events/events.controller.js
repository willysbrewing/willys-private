(function() {
  'use strict';

  angular
    .module('app.main')
    .controller('EventsController', EventsController);

  /** @ngInject */
  function EventsController(authUser, EventService, UserService) {
    var vm = this;

    vm.user = UserService.me(function(user) {
      vm.user = user.serialize().attributes;
    });

    vm.events = EventService.query(function(events) {
      vm.events = events.serialize();
    });

    vm.goingEvent = function(event) {
      if(vm.user.events_going.indexOf(event.id) < 0){
        // update just view model, no more requests
        event.attributes.going.push(vm.user.id);
        vm.user.events_going.push(event.id);
        // now update! transactional yo
        EventService.going({
          event_id: event.id
        });
      }
    }

  }

})();
