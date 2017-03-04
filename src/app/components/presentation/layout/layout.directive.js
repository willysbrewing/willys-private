(function() {
  'use strict';

  angular
    .module('willys')
    .directive('wbLayout', vmLayout);

  /** @ngInject */
  function vmLayout() {
    var directive = {
      restrict: 'E',
      scope: {
        data: '=',
      },
      templateNamespace: 'html',
      templateUrl: 'app/components/presentation/layout/layout.html',
      link: linkFunc,
      controller: LayoutController,
      controllerAs: 'vm',
    };

    return directive;

    function linkFunc(scope, el, attr, vm) {

    }

    /** @ngInject */
    function LayoutController($scope, $state, $log, $mdSidenav, Data, Auth, APP_CONFIG, $mdMenu) {
      $scope.version = APP_CONFIG.APP_VERSION;

      $scope.initialLoading = Data.initialLoading;
      $scope.partialLoading = Data.partialLoading;
      $scope.user = null;

      Data.subscribe('initialResolved', $scope, function(){$scope.initialLoading = Data.initialLoading;});
      Data.subscribe('partialLoading', $scope, function(){$scope.partialLoading = Data.partialLoading;});
      Data.subscribe('partialResolved', $scope, function(){$scope.partialLoading = Data.partialLoading;});
      Auth.$onAuthStateChanged(function(firebaseUser){
        $scope.user = firebaseUser;
      });

      $scope.openLeftMenu = function() {
        $mdSidenav('left').toggle();
      };

      $scope.openNavbarMenu = function($mdMenu, ev) {
        $mdMenu.open(ev);
      };

      $scope.goTo = function(state){
        if($state.current.name == 'login' && !$scope.user){
          return;
        }
        $state.go(state);
      };

      $scope.goToFromSidebar = function(state){
        if($state.current.name == 'login' && !$scope.user){
          $mdSidenav('left').toggle();
          return;
        }
        $mdSidenav('left').toggle();
        $state.go(state);
      };

      $scope.signOut = function(state){
        Data.notify('partialLoading');
        Auth.$signOut().then(function(){
          $state.go('login');
        });
      };

    }

  }

})();
