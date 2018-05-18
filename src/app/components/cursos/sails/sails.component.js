'use strict';

import SailsController from './sails.controller.js';

let sailsComponentDef = {
  restrict: 'E',
  bindings: {},
  templateUrl: './components/cursos/sails/sails.tpl.html',
  controller: SailsController,
  controllerAs: 'SailsCtrl'
};

export default angular
  .module('lwd.components.cursos.sails', ['ui.router'])
  .config(function ($stateProvider) {
    'ng-inject';
  
    $stateProvider
      .state('lwd.cursos.sails', {
        url: '/sails',
        template: '<sails-component></sails-component>'
      });
  })
  .component('sailsComponent', sailsComponentDef)
  .name;
