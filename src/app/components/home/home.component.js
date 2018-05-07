'use strict';

import HomeController from './home.controller.js';

let homeComponentDef = {
  restrict: 'E',
  bindings: {},
  templateUrl: './components/home/home.tpl.html',
  controller: HomeController,
  controllerAs: 'HomeCtrl'
};

let homeComponent = angular
  .module('lwd.components.home', ['ui.router'])
  .config(function ($stateProvider) {
    'ng-inject';
  
    $stateProvider
      .state('lwd.index', {
        url: '/inicio',
        template: '<home-component></home-component>',
        controller: function () {
          
        }
      });
  })
  .component('homeComponent', homeComponentDef)
  .name;

export default homeComponent;
