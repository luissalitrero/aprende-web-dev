'use strict';

/**
 * @ngdoc controller
 * @name lwd.controller:PostgresCtrl
 * @param {} $state - .
 * @description .
 */
class PostgresCtrl {
  constructor($rootScope, sidebarService) {
    'ngInject';

    this.hello = 'I am the Postgres course controller';
    this.$rootScope = $rootScope;
    this.sidebarService = sidebarService;

    this.updateCurrentMenu();
  }

  $onInit() {}

  updateCurrentMenu() {
    this.sidebarService.currentMenu = 'Estoy en el curso de Postgres';
  
    this.$rootScope.$emit('updateCurrentMenu', {});
  }
}

export default PostgresCtrl;
