(
    RouteConfig.$inject

    function RouteConfig($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: './components/book/list/book.html',
            controller: 'BookController',
        })
        .when('/books/add', {
            templateUrl: './components/book/add/add-book.html',
            controller: 'BookAddController'
        })
        .when('/books/:id', {
            templateUrl: './components/book/details/book-details.html',
            controller: 'BookDetailsController'
        });
})();

