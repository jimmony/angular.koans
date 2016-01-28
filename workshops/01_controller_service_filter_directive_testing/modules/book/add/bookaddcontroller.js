
    BookAddController.$inject=['$scope','$routeParams','BookFactory'];

    function BookAddController($scope, $routeParams, BookFactory) {


        function addBook() {

            BookFactory.addBook($scope.book);
        }


    }
