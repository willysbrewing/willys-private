(function() {
  'use strict';

  angular
    .module('willys')
    .directive('wbFooter', vmFooter);

  /** @ngInject */
  function vmFooter() {
    var directive = {
      restrict: 'E',
      scope: {
        data: '=',
      },
      templateNamespace: 'html',
      templateUrl: 'app/components/presentation/footer/footer.html',
      link: linkFunc,
      controller: FooterController,
      controllerAs: 'vm',
    };

    return directive;

    function linkFunc(scope, el, attr, vm) {
      var watcher;

      watcher = scope.$watch('', function() {

      });
      scope.$on('$destroy', function () {
        watcher();
      });
    }

    /** @ngInject */
    function FooterController($scope, $state, $log, $mdSidenav, DataService, APP_CONFIG) {
      $scope.version = APP_CONFIG.APP_VERSION;

      $scope.initialLoading = DataService.initialLoading;
      $scope.partialLoading = DataService.partialLoading;

      DataService.subscribe('initialResolved', $scope, function(){$scope.initialLoading = DataService.initialLoading;});
      DataService.subscribe('partialLoading', $scope, function(){$scope.partialLoading = DataService.partialLoading;});
      DataService.subscribe('partialResolved', $scope, function(){$scope.partialLoading = DataService.partialLoading;});

    }

  }

})();
