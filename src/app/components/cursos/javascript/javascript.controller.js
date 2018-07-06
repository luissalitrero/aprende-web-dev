'use strict';

/**
 * @ngdoc controller
 * @name lwd.controller:JavascriptController
 * @param {} $state - .
 * @description .
 */
class JavascriptController {
  constructor($rootScope, sidebarService) {
    'ngInject';

    this.hello = 'I am the Javascript course controller';
    this.$rootScope = $rootScope;
    this.sidebarService = sidebarService;

    this.updateCurrentMenu();
  }

  $onInit() {}

  updateCurrentMenu() {
    this.sidebarService.currentMenu = 'Estoy en el curso de Javascript';
  
    this.$rootScope.$emit('updateCurrentMenu', {});
  }
}

export default JavascriptController;
