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
        data: '='
      },
      templateNamespace: 'html',
      templateUrl: 'app/components/presentation/layout/layout.html',
      link: linkFunc,
      controller: LayoutController,
      controllerAs: 'vm'
    };

    return directive;

    function linkFunc(scope, el, attr, vm) {

    }

    /** @ngInject */
    function LayoutController($scope, $state, $log, $mdSidenav, DataService, AuthService, APP_CONFIG, $mdMenu) {
      $scope.version = APP_CONFIG.APP_VERSION;

      $scope.initialLoading = DataService.initialLoading;
      $scope.partialLoading = DataService.partialLoading;

      DataService.subscribe('initialResolved', $scope, function(){$scope.initialLoading = DataService.initialLoading;});
      DataService.subscribe('partialLoading', $scope, function(){$scope.partialLoading = DataService.partialLoading;});
      DataService.subscribe('partialResolved', $scope, function(){$scope.partialLoading = DataService.partialLoading;});
      AuthService.$onAuthStateChanged(function(authUser){
        $scope.authUser = authUser;
      });

      $scope.openLeftMenu = function() {
        $mdSidenav('left').toggle();
      };

      $scope.openNavbarMenu = function($mdMenu, ev) {
        $mdMenu.open(ev);
      };

      $scope.goTo = function(state){
        if($state.current.name == 'login' && !$scope.authUser){
          return;
        }
        $state.go(state);
      };

      $scope.goToFromSidebar = function(state){
        if($state.current.name == 'login' && !$scope.authUser){
          $mdSidenav('left').toggle();
          return;
        }
        $mdSidenav('left').toggle();
        $state.go(state);
      };

      $scope.signOut = function(){
        DataService.notify('partialLoading');
        AuthService.$signOut().then(function(){
          $state.go('login');
        });
      };

    }

  }

})();
