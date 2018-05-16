'use strict';

import htmlComponent from './html/html.component.js';

let cursosModule = angular
  .module('lwd.components.cursos', [
    htmlComponent
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
