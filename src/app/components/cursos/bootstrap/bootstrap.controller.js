'use strict';

/**
 * @ngdoc controller
 * @name lwd.controller:BootstrapController
 * @param {} $state - .
 * @description .
 */
class BootstrapController {
  constructor($rootScope, sidebarService) {
    'ngInject';

    this.hello = 'I am the Bootstrap course controller';
    this.$rootScope = $rootScope;
    this.sidebarService = sidebarService;

    this.updateCurrentMenu();
  }

  $onInit() {}

  updateCurrentMenu() {
    this.sidebarService.currentMenu = 'Estoy en el curso de Bootstrap';
  
    this.$rootScope.$emit('updateCurrentMenu', {});
  }
}

export default BootstrapController;
