'use strict';

// import mainAppModule from './main-app/main.app.module.js';
import mainAppComponent from './main-app/main.app.component.js';

let componentsModule = angular
  .module('lwd.components', [
    mainAppComponent
  ])
  .name;

export default componentsModule;
