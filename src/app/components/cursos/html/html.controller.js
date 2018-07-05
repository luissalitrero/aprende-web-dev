'use strict';

/**
 * @ngdoc controller
 * @name lwd.controller:HtmlController
 * @param {} $state - .
 * @description .
 */
class HtmlController {
  // static $inject = ['sidebarService'];

  constructor(sidebarService) {
    'ngInject';

    this.hello = 'I am the HTML course controller';

    sidebarService.currentMenu = 'estoy en curso de HTML';
  }

  $onInit() {}
}

export default HtmlController;
