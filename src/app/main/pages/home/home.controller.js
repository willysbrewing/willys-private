(function() {
  'use strict';

  angular
    .module('app.main')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController(authUser) {
    var vm = this;
    
    vm.featured = [1,2,4,5]
    vm.image = "https://www.willysbrewing.com/media/images/riotapa_Ydj4MCz.2e16d0ba.fill-1800x978.jpg"
    vm.card = {
        "title": "Nature",
        "text": "Look deep into nature, then you will understand everything better. Look deep into nature, then you will understand everything better.",
        "media": {
            "image": {
                "src": "assets/images/backgrounds/riotapa.jpg",
                "alt": "Avenue"
            }
        }
    };

  }

})();
