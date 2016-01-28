import angular from 'angular';
import BookListController from './list/booklistcontroller.js';
import BookAddController from './add/bookaddcontroller.js';
import BookDetailController from './detail/bookdetailscontroller.js';
import BookFactory from './services/bookservice.js';

angular.module('book', [])
    .controller('BookListController',BookListController)
    .controller('BookAddController',BookAddController)
    .controller('BookDetailController',BookDetailController)
    .factory('BookFactory',BookFactory);