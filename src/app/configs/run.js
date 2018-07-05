'use strict';

/**
 * 'ngInject' does nothing by itself, it's just a string literal.
 * A tool called ng-annotate uses it as a flag: if a function starts with 'ngInject';, it will be processed by ng-annotate converting this
 * angular.module("MyMod").controller("MyCtrl", function($scope, $timeout) {
 *   "ngInject";
 *   });
 *
 *   to this:
 *   
 *   angular.module("MyMod").controller("MyCtrl", ["$scope", "$timeout", function ($scope, $timeout) {
 *     "ngInject";
 *   }]);
 */
function appRun($rootScope, $state) {
  'ngInject';

  // $rootScope.$on("$stateChangeError", console.log.bind(console));
  $rootScope.$on('$stateChangeError', (event, toState, toParams, fromState, fromParams, error) => {
    console.log.bind(console);

    if (error === 'AUTH_REQUIRED') {
      $state.go('/inicio');
    }
  });
}

appRun.$inject = ['$rootScope', '$state'];

export default appRun;
