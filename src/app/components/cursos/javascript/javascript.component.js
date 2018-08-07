'use strict';

import JavascriptController from './javascript.controller.js';

let javascriptComponentDef = {
  restrict: 'E',
  bindings: {},
  templateUrl: './components/cursos/javascript/javascript.tpl.html',
  controller: JavascriptController,
  controllerAs: 'JavascriptCtrl'
};

export default angular
  .module('lwd.components.cursos.javascript', ['ui.router'])
  .config(function ($stateProvider) {
    "ngInject";
  
    $stateProvider
      .state('lwd.cursos.javascript', {
        url: '/javascript',
        template: '<javascript-component></javascript-component>'
      });
  })
  .component('javascriptComponent', javascriptComponentDef)
  .name;
