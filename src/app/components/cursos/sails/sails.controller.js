'use strict';

/**
 * @ngdoc controller
 * @name lwd.controller:SailsCtrl
 * @param {} $state - .
 * @description .
 */
class SailsCtrl {
  constructor($rootScope, sidebarService) {
    'ngInject';

    this.hello = 'I am the Sails course controller';
    this.$rootScope = $rootScope;
    this.sidebarService = sidebarService;

    this.updateCurrentMenu();
  }

  $onInit() {}

  updateCurrentMenu() {
    this.sidebarService.currentMenu = 'Estoy en el curso de Sails';
  
    this.$rootScope.$emit('updateCurrentMenu', {});
  }
}

export default SailsCtrl;
