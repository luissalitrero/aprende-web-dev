'use strict';

/**
 * @ngdoc controller
 * @name lwd.controller:LessCtrl
 * @param {} $state - .
 * @description .
 */
class LessCtrl {
  constructor($rootScope, sidebarService) {
    "ngInject";

    this.hello = 'I am the LESS course controller';
    this.$rootScope = $rootScope;
    this.sidebarService = sidebarService;

    this.updateCurrentMenu();
  }

  $onInit() {}

  updateCurrentMenu() {
    this.sidebarService.currentMenu = 'Estoy en el curso de LESS';
  
    this.$rootScope.$emit('updateCurrentMenu', {});
  }
}

export default LessCtrl;
