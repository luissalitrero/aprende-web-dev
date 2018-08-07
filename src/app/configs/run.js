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
function appRun($transitions, $state, $log, $trace) {
  "ngInject";

  // console.log.bind(console);

  $trace.enable('TRANSITION');

  $transitions.onStart({}, function() {});

  $transitions.onSuccess({}, function() {
    PR.prettyPrint();
  });

  $transitions.onError({}, function() {
    $log.log('-----Transition error--');

    if (error === 'AUTH_REQUIRED') {
      $state.go('/inicio');
    }
  });
}

export default appRun;
