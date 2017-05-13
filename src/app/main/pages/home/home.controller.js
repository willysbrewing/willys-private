(function() {
  'use strict';

  angular
    .module('app.main')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController(authUser, NewsService, UserService) {
    var vm = this;

    vm.user = UserService.me(function(user) {
      vm.user = user.serialize().attributes;
    });

    vm.news = NewsService.query(function(news) {
      vm.news = news.serialize();
    });

    vm.likeNews = function(news) {
      if(vm.user.news_likes.indexOf(news.id) < 0){
        // update just view model, no more requests
        news.attributes.likes.push(vm.user.id);
        vm.user.news_likes.push(news.id);
        // now update! transactional yo
        NewsService.like({
          news_id: news.id
        });
      }
    }

  }

})();
