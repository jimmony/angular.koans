
(function() {

  'use strict';

  angular.module('bookstoreDJ', ['ngRoute'])
  .config(RouteConfig)
  .service('BookService', BookServiceFn)
  .factory('BookFactory', BookFactoryFn)
  .controller('BookAddController', BookAddController)
      .controller('BookDetailsController', BookDetailsController)
      .controller('BookListController', BookAddController)
  .controller('NavController', NavController);

  angular.bootstrap(document.body, ['bookstoreDJ']);

})();

