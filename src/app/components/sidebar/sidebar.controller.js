'use strict';

/**
 * @ngdoc controller
 * @name lwd.controller:CompaniasSaldosInicialesMenuController
 * @param {} $state - .
 * @description .
 */
class SidebarController {
  constructor($rootScope, sidebarService) {
    'ngInject';

    this.$rootScope = $rootScope;
    this.sidebarService = sidebarService;
  }

  $onInit() {
    let listener1 = this.$rootScope.$on('updateCurrentMenu', (event, args) => {
      event.preventDefault();

      this.updateCurrentMenu();
    });
  }

  updateCurrentMenu() {
    this.currentMenu = this.sidebarService.currentMenu;
  }
}

export default SidebarController;
