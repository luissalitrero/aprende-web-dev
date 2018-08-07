'use strict';

// Comenté esto para probar usando estas librerías como globales cargadas desde una CDN
// import angular from 'angular';
// import uiRouter from '@uirouter/angularjs';

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
  .directive('lwdOnloadDirective', () => new LwdOnloadDirective())
  .config(AppConfig)
  .run(AppRun);
