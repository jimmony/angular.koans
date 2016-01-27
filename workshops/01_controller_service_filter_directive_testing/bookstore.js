// 1. create our the entry point of our application

// 2. Bootstrap our application
// 2.a Using directive ng-app

// 2.b Programmatically

(function() {

  'use strict';

  angular.module('bookstoreDJ', ['ngRoute'])
  .config(RouteConfig)
  .service('BookService', BookServiceFn)
  .factory('BookFactory', BookFactoryFn)
  .controller('BookController', BookController)
  .controller('NavController', NavController);

  function RouteConfig($routeProvider) {
  $routeProvider
   .when('/', {
    templateUrl: 'templates/book.html',
    controller: 'BookController',
  })
  .when('/add', {
    templateUrl: 'templates/add-book.html',
    controller: 'BookController'
  })
  .when('/book/:id', {
    templateUrl: 'templates/book-details.html',
    controller: 'BookController'
  });



  }

  function BookController($scope, BookService, BookFactory) {
    console.log(BookService.getBook(9809));
    $scope.bookList = BookService.getBooks();
  }


  function NavController($scope) {
    $scope.title = "";
  }

  function BookServiceFn() {
    this.getBook = function (id) {
      var found = books.filter((book) => book.bookID === id);
      if (found[0]) {
        return found[0]
      }
      return null;
    };
    this.getBooks = function () {
      return books
    };
    this.deleteBook = function (id) {
      var index = books.findIndex((book) => book.bookID === id);
      if (index !== -1) {
        books.splice(index, 1);
      }
    };
  }

  function BookFactoryFn() {
    return {
      getBook : function(id) {
        var found = books.filter((book) => book.bookID === id);
        if (found[0]) {
          return found[0]
        }
        return null;
      },
      getBooks : function() {return books},
      deleteBook : function(id) {
        var index = books.findIndex((book) => book.bookID === id);
        if (index !== -1) {
          books.splice(index, 1);
        }
      }
    };
  }


  angular.bootstrap(document.body, ['bookstoreDJ']);

})();

