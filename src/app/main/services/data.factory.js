(function() {
  'use strict';

  angular
    .module('willys')
    .factory('DataService', DataService);

    /** @ngInject */
    function DataService($rootScope){

      var data = {};

      return {
        initialLoading: true,
        partialLoading: false,
        subscribe: function(eventName, scope, callback) {
          var handler = $rootScope.$on(eventName, callback);
          scope.$on('$destroy', handler);
        },
        notify: function(eventName) {
          if(eventName === 'initialResolved')
            this.initialLoading = false;

          if(eventName === 'partialLoading')
            this.partialLoading = true;

          if(eventName === 'partialResolved')
            this.partialLoading = false;

          $rootScope.$emit(eventName);
        }
      }
    }

})();
