'use strict';

/**
 * @ngdoc controller
 * @name lwd.controller:JqueryController
 * @param {} $state - .
 * @description .
 */
class JqueryController {
  constructor($rootScope, sidebarService) {
    'ngInject';

    this.hello = 'I am the Jquery course controller';
    this.$rootScope = $rootScope;
    this.sidebarService = sidebarService;

    this.updateCurrentMenu();
  }

  $onInit() {}

  updateCurrentMenu() {
    this.sidebarService.currentMenu = 'Estoy en el curso de Jquery';
  
    this.$rootScope.$emit('updateCurrentMenu', {});
  }
}

export default JqueryController;
