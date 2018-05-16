'use strict';

import homeComponent from './home/home.component.js';
import headerComponent from './header/header.component.js';
import cursosModule from './cursos'

let componentsModule = angular
  .module('lwd.components', [
    homeComponent,
    headerComponent,
    cursosModule
  ])
  .name;

export default componentsModule;
