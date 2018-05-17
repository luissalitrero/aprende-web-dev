'use strict';

function run($rootScope, $state) {
  'ngInject';

  $rootScope.$on('$stateChangeError', (event, toState, toParams, fromState, fromParams, error) => {
    if (error === 'AUTH_REQUIRED') {
      $state.go('parties');
    }
  });
}

run.$inject = ['$rootScope', '$state'];

export default run;
