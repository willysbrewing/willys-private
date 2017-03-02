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
    function FooterController($scope, $state, $log, $mdSidenav, Data, APP_CONFIG) {
      $scope.version = APP_CONFIG.APP_VERSION;

      $scope.initialLoading = Data.initialLoading;
      $scope.partialLoading = Data.partialLoading;
      $scope.user = null;

      Data.subscribe('initialResolved', $scope, function(){$scope.initialLoading = Data.initialLoading;});
      Data.subscribe('partialLoading', $scope, function(){$scope.partialLoading = Data.partialLoading;});
      Data.subscribe('partialResolved', $scope, function(){$scope.partialLoading = Data.partialLoading;});

    }

  }

})();
