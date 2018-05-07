'use strict';

import homeComponent from './home/home.component.js';

let componentsModule = angular
  .module('lwd.components', [
    homeComponent
  ])
  .name;

export default componentsModule;
