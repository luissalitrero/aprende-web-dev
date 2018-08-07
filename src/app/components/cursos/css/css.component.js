'use strict';

import CssController from './css.controller.js';

let cssComponentDef = {
  restrict: 'E',
  bindings: {},
  templateUrl: './components/cursos/css/css.tpl.html',
  controller: CssController,
  controllerAs: 'CssCtrl'
};

export default angular
  .module('lwd.components.cursos.css', ['ui.router'])
  .config(function ($stateProvider) {
    "ngInject";
  
    $stateProvider
      .state('lwd.cursos.css', {
        url: '/css',
        template: '<css-component></css-component>'
      });
  })
  .component('cssComponent', cssComponentDef)
  .name;
