'use strict';

import FooterController from './footer.controller.js';

export default angular
  .module('lwd.components.footer', ['ui.router'])
  .component('footerComponent', {
    restrict: 'E',
    bindings: {},
    templateUrl: './components/footer/footer.tpl.html',
    controller: FooterController,
    controllerAs: 'FooterCtrl'
  })
  .name;
