
    BookFactory.$inject = ['$http'];

    export default function BookFactory($http) {
        function getBook(id) {
            return $http.get('http://localhost:9000/api/books/{$id}');
        }

        function getBooks() {
            return $http.get('http://localhost:9000/api/books');
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

