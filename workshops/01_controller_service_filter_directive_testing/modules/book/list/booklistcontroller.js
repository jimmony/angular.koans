
    BookListController.$inject = ['BookFactory'];

    export default function BookListController(BookFactory) {


         BookFactory.getBooks().then(function(response){
             this.books = response.data;
         }.bind(this));


    }
