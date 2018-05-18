'use strict';

import BootstrapController from './bootstrap.controller.js';

let bootstrapComponentDef = {
  restrict: 'E',
  bindings: {},
  templateUrl: './components/cursos/bootstrap/bootstrap.tpl.html',
  controller: BootstrapController,
  controllerAs: 'BootstrapCtrl'
};

export default angular
  .module('lwd.components.cursos.bootstrap', ['ui.router'])
  .config(function ($stateProvider) {
    'ng-inject';
  
    $stateProvider
      .state('lwd.cursos.bootstrap', {
        url: '/bootstrap',
        template: '<bootstrap-component></bootstrap-component>'
      });
  })
  .component('bootstrapComponent', bootstrapComponentDef)
  .name;
