import angular from 'angular';
import ngRoute from 'angular-route';
import common from './modules/common/';
import book from './modules/book/';
import routeConfig from './routes';


    angular.module('bookstore', ['common','ngRoute','book'])
      .config(routeConfig);

  document.addEventListener('DOMContentLoaded',function(){
    angular.bootstrap(document.body, ['bookstore']);
  });
