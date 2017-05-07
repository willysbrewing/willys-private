(function ()
{
    'use strict';

    angular
        .module('app.toolbar')
        .controller('ToolbarController', ToolbarController);

    /** @ngInject */
    function ToolbarController($rootScope, $q, $state, $timeout, $mdSidenav, $translate, $mdToast, msNavigationService, AuthService)
    {
        var vm = this;
        vm.authUser = null;
        vm.photoUrl = 'assets/images/profile.jpg';

        vm.bodyEl = angular.element('body');

        // Methods
        vm.toggleSidenav = toggleSidenav;
        vm.logout = logout;
        vm.toggleHorizontalMobileMenu = toggleHorizontalMobileMenu;
        vm.toggleMsNavigationFolded = toggleMsNavigationFolded;

        AuthService.$onAuthStateChanged(function(authUser){
          vm.authUser = authUser;
          if (authUser) {
            vm.photoUrl = authUser.photoURL;
          }
        });

        //////////

        init();

        /**
         * Initialize
         */
        function init()
        {

        }


        /**
         * Toggle sidenav
         *
         * @param sidenavId
         */
        function toggleSidenav(sidenavId)
        {
            $mdSidenav(sidenavId).toggle();
        }


        /**
         * Logout Function
         */
        function logout()
        {
          AuthService.$signOut().then(function(){
            $state.go('app.login');
          });
        }

        /**
         * Toggle horizontal mobile menu
         */
        function toggleHorizontalMobileMenu()
        {
            vm.bodyEl.toggleClass('ms-navigation-horizontal-mobile-menu-active');
        }

        /**
         * Toggle msNavigation folded
         */
        function toggleMsNavigationFolded()
        {
            msNavigationService.toggleFolded();
        }

    }

})();
