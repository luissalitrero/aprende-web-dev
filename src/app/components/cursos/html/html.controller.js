'use strict';

/**
 * @ngdoc controller
 * @name lwd.controller:HtmlController
 * @param {} $state - .
 * @description .
 */
class HtmlController {
  // static $inject = ['sidebarService'];

  constructor($rootScope, sidebarService) {
    "ngInject";

    this.$rootScope = $rootScope;
    this.sidebarService = sidebarService;

    this.updateCurrentMenu();
  }

  $onInit() {}

  updateCurrentMenu() {
    this.sidebarService.currentMenu = 'Este será el menú del curso de HTML';
  
    this.$rootScope.$emit('updateCurrentMenu', {});
  }
}

export default HtmlController;
