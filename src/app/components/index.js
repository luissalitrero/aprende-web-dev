'use strict';

import homeComponent from './home/home.component.js';
import headerComponent from './header/header.component.js';
import footerComponent from './footer/footer.component.js';
import cursosModule from './cursos'

let componentsModule = angular
  .module('lwd.components', [
    homeComponent,
    headerComponent,
    footerComponent,
    cursosModule
  ])
  .name;

export default componentsModule;
