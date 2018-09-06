'use strict';

// Comenté esto para probar usando estas librerías como globales cargadas desde una CDN
// import angular from 'angular';
// import uiRouter from '@uirouter/angularjs';

// https://github.com/michaelbromley/angular-es6
// https://www.npmjs.com/package/angular-es6
import register from './app/utilities/register.js';
import AppConfig from './app/configs/config.js';
import AppRun from './app/configs/run.js';
import AppComponents from './app/components';
import ConstantsUtilities from './app/constants/utilities.js';
import ConstantsArrays from './app/constants/arrays.js';
import SidebarService from './app/services/sidebar.service.js';
import LwdOnloadDirective from './app/directives/lwd-onload.directive.js';

angular
  .module('lwd', [
    // uiRouter,
    'ui.router',
    AppComponents
  ])
  .constant('utils', ConstantsUtilities)
  .constant('arrays', ConstantsArrays)
  .service('sidebarService', SidebarService)
  // .directive('lwdOnloadDirective', register(LwdOnloadDirective))
  .config(AppConfig)
  .run(AppRun);

  // .directive('lwdOnloadDirective', () => new LwdOnloadDirective())

register('lwd').directive('lwdOnloadDirective', LwdOnloadDirective);
