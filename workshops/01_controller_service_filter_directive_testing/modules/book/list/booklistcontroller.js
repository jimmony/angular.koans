(function() {

    BookListController.$inject = ['BookFactory'];

    function BookListController(BookFactory) {


         BookFactory.getBooks().then(function(response){
             this.books = response.data;
         }.bind(this));


    }
    angular.module('book').controller('BookListController',BookListController);
})();