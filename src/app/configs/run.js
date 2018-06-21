'use strict';

function run($rootScope, $state) {
  'ngInject';

  // $rootScope.$on("$stateChangeError", console.log.bind(console));
  $rootScope.$on('$stateChangeError', (event, toState, toParams, fromState, fromParams, error) => {
    console.log.bind(console);

    if (error === 'AUTH_REQUIRED') {
      $state.go('/inicio');
    }
  });
}

run.$inject = ['$rootScope', '$state'];

export default run;
