'use strict';

import JqueryController from './jquery.controller.js';

let jqueryComponentDef = {
  restrict: 'E',
  bindings: {},
  templateUrl: './components/cursos/jquery/jquery.tpl.html',
  controller: JqueryController,
  controllerAs: 'JqueryCtrl'
};

export default angular
  .module('lwd.components.cursos.jquery', ['ui.router'])
  .config(function ($stateProvider) {
    'ng-inject';
  
    $stateProvider
      .state('lwd.cursos.jquery', {
        url: '/jquery',
        template: '<jquery-component></jquery-component>'
      });
  })
  .component('jqueryComponent', jqueryComponentDef)
  .name;
