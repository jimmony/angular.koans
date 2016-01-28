
    BookDetailsController.$inject =['$scope','$routeParams','BookFactory'];

    export default function BookDetailsController($routeParams, BookFactory) {

        this.book = null;
        if ($routeParams.id) {
            $scope.book = BookFactory.getBook($routeParams.id).then((response)=>{
                this.book = response.data;
            });
        }



    }
