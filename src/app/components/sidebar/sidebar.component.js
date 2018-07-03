'use strict';

import SidebarController from './sidebar.controller';

let sidebarComponentDef = {
  restrict: 'E',
  bindings: {},
  templateUrl: './components/sidebar/sidebar.tpl.html',
  controller: SidebarController,
  controllerAs: 'SidebarCtrl'
};

let sidebarComponent = angular
  .module('lwd.components.sidebar', [])
  .component('sidebarComponent', sidebarComponentDef)
  .name;

export default sidebarComponent;
