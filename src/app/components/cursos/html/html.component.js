'use strict';

import HtmlController from './html.controller.js';

let htmlComponentDef = {
  restrict: 'E',
  bindings: {},
  templateUrl: './components/cursos/html/html.tpl.html',
  controller: HtmlController,
  controllerAs: 'HtmlCtrl'
};

export default angular
  .module('lwd.components.cursos.html', ['ui.router'])
  .config(function ($stateProvider) {
    'ng-inject';
  
    $stateProvider
      .state('lwd.cursos.html', {
        url: '/html',
        template: '<html-component></html-component>'
      });
  })
  .component('htmlComponent', htmlComponentDef)
  .name;
