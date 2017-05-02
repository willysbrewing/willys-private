(function ()
{
    'use strict';

    angular
        .module('app.navigation')
        .controller('NavigationController', NavigationController);

    /** @ngInject */
    function NavigationController($scope)
    {
        var vm = this;

        // Data
        vm.bodyEl = angular.element('body');
        vm.folded = false;
        vm.msScrollOptions = {
            suppressScrollX: true
        };

        // Close the mobile menu on $stateChangeSuccess
        $scope.$on('$stateChangeSuccess', function ()
        {
            vm.bodyEl.removeClass('ms-navigation-horizontal-mobile-menu-active');
        });
    }

})();
