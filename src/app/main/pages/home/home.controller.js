(function() {
  'use strict';

  angular
    .module('app.main')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController(authUser, NewsService, UserService, CacheService) {
    var vm = this;

    vm.user = UserService.me(function(user) {
      vm.user = user.serialize();
    });

    vm.news = NewsService.query(function(news) {
      vm.news = news.serialize();
    });

    vm.likeNews = function(news) {
      if(vm.user.attributes.news_likes.indexOf(news.id) < 0){
        // update just view model, no more requests
        news.attributes.likes.push(vm.user.attributes.id);
        vm.user.attributes.news_likes.push(news.id);
        // now update! transactional yo
        NewsService.like({
          news_id: news.id
        });
        // update cache
        CacheService.updateUser(vm.user);
        CacheService.updateNews(vm.news);
      }
    }

  }

})();
