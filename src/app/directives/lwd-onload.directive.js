'use strict';

/**
 * In case directives don't work as expected, use register.js
 * 
 * https://github.com/michaelbromley/angular-es6
 * https://stackoverflow.com/questions/28620479/using-es6-classes-as-angular-1-x-directives
 * 
 * Example (export this, and import the directives module in app.js):
 * 
 * import LwdOnloadDirective from './app/directives/lwd-onload.directive.js';
 * 
 * let Directives = angular
 *   .module('lwd.directives', [])
 *   .directive('lwdOnloadDirective', register(AuthLinkDirective))
 *   .name;
 * 
 * export default Directives;
 */

/**
 * @ngdoc controller
 */
class LwdOnloadDirective {
  // static $inject = [];
  // restrict = 'A';

  constructor() {
    "ngInject";

    console.log('-----00--');

    this.restrict = 'A';
  }

  controller($scope) {
    "ngInject";

    console.log('-----000--');
  }

  link(scope, element, attrs) {
    "ngInject";

    element.html(prettyPrintOne(replaceText(element.html()),'',true));

    console.log('-----01--');
    angular.element(document).ready(() => {
      console.log('-----00--document ready');
    });
  }
}

export default LwdOnloadDirective;
