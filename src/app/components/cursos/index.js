'use strict';

import angularComponent from './angular/angular.component.js';
import bootstrapComponent from './bootstrap/bootstrap.component.js';
import cssComponent from './css/css.component.js';
import htmlComponent from './html/html.component.js';
import javascriptComponent from './javascript/javascript.component.js';
import lessComponent from './less/less.component.js';

let cursosModule = angular
  .module('lwd.components.cursos', [
    angularComponent,
    bootstrapComponent,
    cssComponent,
    htmlComponent,
    javascriptComponent,
    lessComponent
  ])
  .config(function ($stateProvider) {
    'ng-inject';
  
    $stateProvider
      .state('lwd.cursos', {
        abstract: true,
        url: '/cursos',
        template: '<div ui-view></div>'
      });
  })
  .name;

export default cursosModule;
