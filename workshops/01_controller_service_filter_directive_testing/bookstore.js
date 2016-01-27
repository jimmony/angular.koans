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
      .when('/books/add', {
        templateUrl: 'templates/add-book.html',
        controller: 'BookController'
      })
      .when('/books/:id', {
        templateUrl: 'templates/book-details.html',
        controller: 'BookController'
      });
  }

  function BookController($scope, $routeParams, BookService, BookFactory) {

    if ($routeParams.id) {
      $scope.book = BookFactory.getBook($routeParams.id);
    } else {
      $scope.book = {
        covers: ['assets/img/angularjs.jpg', 'assets/img/coman.jpeg'],
        add: function () {
          debugger
          addBook();
        }
      }
    }
    function addBook () {

          BookFactory.addBook($scope.book);
        }
    $scope.bookList = BookFactory.getBooks();
  }


  function NavController($scope) {
    $scope.title = "";
  }

  function BookServiceFn() {
    this.getBook = function (id) {
      var found = books.filter((book) => book.bookID == id);
      if (found[0]) {
        return found[0]
      }
      return null;
    };
    this.getBooks = function () {
      return books
    };
    this.deleteBook = function (id) {
      var index = books.findIndex((book) => book.bookID == id);
      if (index !== -1) {
        books.splice(index, 1);
      }
    };
  }

  function BookFactoryFn() {
    function getBook(id) {
      var found = books.filter((book) => book.bookID == id);
      if (found[0]) {
        return found[0]
      }
      return null;
    }

    function getBooks() {
      return books;
    }

    function addBook(book) {
      book.bookID = nextBookId();
      delete book.covers;
      getBooks().push(book);
    }

    function deleteBook(id) {
      var index = books.findIndex((book) => book.bookID == id);
      if (index !== -1) {
        books.splice(index, 1);
      }
    }

    function nextBookId() {
      var random = getRandomIntInclusive(0, 10000);
      while (getBook(random) != null) {
        random = angular.random(10000);
      }
      return random;
    }

    function getRandomIntInclusive(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return {
      getBook : getBook,
      getBooks : getBooks,
      addBook : addBook,
      deleteBook : deleteBook
    };
  }


  angular.bootstrap(document.body, ['bookstoreDJ']);

})();

