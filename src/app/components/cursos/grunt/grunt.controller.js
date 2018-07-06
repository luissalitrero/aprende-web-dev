'use strict';

/**
 * @ngdoc controller
 * @name lwd.controller:GruntCtrl
 * @param {} $state - .
 * @description .
 */
class GruntCtrl {
  constructor($rootScope, sidebarService) {
    'ngInject';

    this.hello = 'I am the Grunt course controller';
    this.$rootScope = $rootScope;
    this.sidebarService = sidebarService;

    this.updateCurrentMenu();
  }

  $onInit() {}

  updateCurrentMenu() {
    this.sidebarService.currentMenu = 'Estoy en el curso de Grunt';
  
    this.$rootScope.$emit('updateCurrentMenu', {});
  }
}

export default GruntCtrl;
