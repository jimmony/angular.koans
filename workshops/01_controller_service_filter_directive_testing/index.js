
(function() {

  'use strict';

  angular.module('bookstoreDJ', ['common','ngRoute','book']);
  //.config(RouteConfig);

  //.controller('NavController', NavController);
  document.addEventListener('DOMContentLoaded',function(){
    angular.bootstrap(document.body, ['bookstoreDJ']);
  });


})();

