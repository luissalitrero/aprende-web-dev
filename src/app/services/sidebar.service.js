'use strict';

/**
 * @ngdoc controller
 */
class SidebarService {
  // static $inject = [];

  constructor() {}

  get currentMenu() {
    return this.menu;
  }

  set currentMenu(menu = []) {
    this.menu = menu;
  }
}

export default SidebarService;
