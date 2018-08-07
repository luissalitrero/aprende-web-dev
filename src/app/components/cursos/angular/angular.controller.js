'use strict';

/**
 * @ngdoc controller
 * @name lwd.controller:AngularController
 * @param {} $state - .
 * @description .
 */
class AngularController {
  constructor($rootScope, sidebarService) {
    "ngInject";

    this.hello = 'I am the Angular course controller';
    this.$rootScope = $rootScope;
    this.sidebarService = sidebarService;

    this.updateCurrentMenu();
  }

  $onInit() {}

  updateCurrentMenu() {
    this.sidebarService.currentMenu = 'Estoy en el curso de Angular';
  
    this.$rootScope.$emit('updateCurrentMenu', {});
  }
}

export default AngularController;
