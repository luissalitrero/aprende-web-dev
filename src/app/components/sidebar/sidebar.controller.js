'use strict';

/**
 * @ngdoc controller
 * @name lwd.controller:CompaniasSaldosInicialesMenuController
 * @param {} $state - .
 * @description .
 */
class SidebarController {
  constructor(sidebarService) {
    'ngInject';

    this.sidebarService = sidebarService;
  }

  $onInit() {
    console.log('-----0--',this.sidebarService);
    this.currentMenu = this.sidebarService.currentMenu;
  }
}

export default SidebarController;
