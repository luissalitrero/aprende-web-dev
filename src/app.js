'use strict';

// Comenté esto para probar usando estas librerías como globales cargadas desde una CDN
// import angular from 'angular';
// import uiRouter from '@uirouter/angularjs';

import AppConfig from './app/configs/config.js';
import AppRun from './app/configs/run.js';
import AppComponents from './app/components';

angular
  .module('lwd', [
    // uiRouter,
    'ui.router',
    AppComponents
  ])
  .constant('utilities', {})
  .config(AppConfig)
  .run(AppRun);
