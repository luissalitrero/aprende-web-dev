'use strict';

import MainAppController from './main.app.controller.js';

let mainAppComponentDef = {
  restrict: 'E',
  bindings: {},
  templateUrl: './components/main-app/main.app.tpl.html',
  controller: MainAppController,
  controllerAs: 'MainAppCtrl'
};

let mainAppComponent = angular
  .module('lwd.components.mainApp', ['ui.router'])
  .config(function ($stateProvider) {
    'ng-inject';
  
    $stateProvider
      .state('lwd.index', {
        url: '/inicio',
        template: '<main-app-component></main-app-component>',
        controller: function () {
          
        }
      });
  })
  .component('mainAppComponent', mainAppComponentDef)
  .name;

export default mainAppComponent;
