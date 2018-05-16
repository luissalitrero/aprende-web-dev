'use strict';

import HeaderController from './header.controller.js';

let headerComponentDef = {
  restrict: 'E',
  bindings: {},
  templateUrl: './components/header/header.tpl.html',
  controller: HeaderController,
  controllerAs: 'HeaderCtrl'
};

export default angular
  .module('lwd.components.header', ['ui.router'])
  .component('headerComponent', headerComponentDef)
  .name;
