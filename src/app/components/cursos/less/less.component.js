'use strict';

import LessController from './less.controller.js';

let lessComponentDef = {
  restrict: 'E',
  bindings: {},
  templateUrl: './components/cursos/less/less.tpl.html',
  controller: LessController,
  controllerAs: 'LessCtrl'
};

export default angular
  .module('lwd.components.cursos.less', ['ui.router'])
  .config(function ($stateProvider) {
    'ng-inject';
  
    $stateProvider
      .state('lwd.cursos.less', {
        url: '/less',
        template: '<less-component></less-component>'
      });
  })
  .component('lessComponent', lessComponentDef)
  .name;
