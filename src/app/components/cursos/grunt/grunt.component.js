'use strict';

import GruntController from './grunt.controller.js';

let gruntComponentDef = {
  restrict: 'E',
  bindings: {},
  templateUrl: './components/cursos/grunt/grunt.tpl.html',
  controller: GruntController,
  controllerAs: 'GruntCtrl'
};

export default angular
  .module('lwd.components.cursos.grunt', ['ui.router'])
  .config(function ($stateProvider) {
    'ng-inject';
  
    $stateProvider
      .state('lwd.cursos.grunt', {
        url: '/grunt',
        template: '<grunt-component></grunt-component>'
      });
  })
  .component('gruntComponent', gruntComponentDef)
  .name;
