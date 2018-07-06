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
    'ngInject';

    this.hello = 'I am the HTML course controller';
    this.$rootScope = $rootScope;
    this.sidebarService = sidebarService;

    this.updateCurrentMenu();
  }

  $onInit() {}

  updateCurrentMenu() {
    this.sidebarService.currentMenu = 'Estoy en el curso de HTML';
  
    this.$rootScope.$emit('updateCurrentMenu', {});
  }
}

export default HtmlController;
