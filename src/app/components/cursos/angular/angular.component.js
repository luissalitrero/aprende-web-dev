'use strict';

import AngularController from './angular.controller.js';

let angularComponentDef = {
  restrict: 'E',
  bindings: {},
  templateUrl: './components/cursos/angular/angular.tpl.html',
  controller: AngularController,
  controllerAs: 'AngularCtrl'
};

export default angular
  .module('lwd.components.cursos.angular', ['ui.router'])
  .config(function ($stateProvider) {
    'ng-inject';
  
    $stateProvider
      .state('lwd.cursos.angularjs', {
        url: '/angularjs',
        template: '<angular-component></angular-component>'
      });
  })
  .component('angularComponent', angularComponentDef)
  .name;
