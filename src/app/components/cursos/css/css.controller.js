'use strict';

/**
 * @ngdoc controller
 * @name lwd.controller:CssCtrl
 * @param {} $state - .
 * @description .
 */
class CssCtrl {
  constructor($rootScope, sidebarService) {
    "ngInject";

    this.hello = 'I am the CSS course controller';
    this.$rootScope = $rootScope;
    this.sidebarService = sidebarService;

    this.updateCurrentMenu();
  }

  $onInit() {}

  updateCurrentMenu() {
    this.sidebarService.currentMenu = 'Estoy en el curso de CSS';
  
    this.$rootScope.$emit('updateCurrentMenu', {});
  }
}

export default CssCtrl;
