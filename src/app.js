'use strict';

// Comenté esto para probar usando estas librerías como globales cargadas desde una CDN
// import angular from 'angular';
// import uiRouter from '@uirouter/angularjs';

import AppConfig from '../src/app/configs/config.js';
import AppRun from '../src/app/configs/run.js';
// import Components from '../src/app/components';

const name = 'lwda';

angular
  .module(name, [
    // uiRouter,
    'ui.router'
  ])
  .constant('utilities', {})
  .config(AppConfig)
  .run(AppRun);
