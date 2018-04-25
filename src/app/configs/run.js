'use strict';

export default function run($rootScope, $state) {
  'ngInject';

  console.log('-----000--');

  $rootScope.$on('$stateChangeError', (event, toState, toParams, fromState, fromParams, error) => {
    console.log('-----001--',name);

      if (error === 'AUTH_REQUIRED') {
        $state.go('parties');
      }
  });
}

run.$inject = ['$rootScope', '$state'];
