'use strict';

import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import AppConfig from '../src/app/configs/config.js';
import AppRun from '../src/app/configs/run.js';
// import Components from '../src/app/components';

const name = 'lwda';

console.log('-----0--',name);

angular
  .module(name, [
    uiRouter
  ])
  .constant('utilities', {})
  .config(AppConfig)
  .run(AppRun);

  console.log('-----1--',name);
