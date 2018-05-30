'use strict';

// Comenté esto para probar usando estas librerías como globales cargadas desde una CDN
// import angular from 'angular';
// import uiRouter from '@uirouter/angularjs';

import AppConfig from './app/configs/config.js';
import AppRun from './app/configs/run.js';
import AppComponents from './app/components';
import ConstantsUtilities from './app/constants/utilities.js';
import ConstantsArrays from './app/constants/arrays.js';

angular
  .module('lwd', [
    // uiRouter,
    'ui.router',
    AppComponents
  ])
  .constant('utils', ConstantsUtilities)
  .constant('arrays', ConstantsArrays)
  .config(AppConfig)
  .run(AppRun);
