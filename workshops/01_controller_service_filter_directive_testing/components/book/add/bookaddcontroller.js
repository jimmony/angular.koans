(function BookAddController($scope, $routeParams, BookService, BookFactory) {

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
})();