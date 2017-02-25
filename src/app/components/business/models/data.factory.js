(function() {
  'use strict';

  angular
    .module('willys')
    .factory('Data', Data);

    /** @ngInject */
    function Data($rootScope){

      var data = {};

      return {
        initialLoading: true,
        partialLoading: false,
        getUser: function(){
          return data.User;
        },
        setUser: function(User){
          data.User = User;
        },
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
        },
      }
    }

})();
