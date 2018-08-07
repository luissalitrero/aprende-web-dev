'use strict';

function appConfig($locationProvider, $urlRouterProvider, $qProvider, $stateProvider, $httpProvider) {
  "ngInject";

  $urlRouterProvider.otherwise('/inicio');

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: true,
    rewriteLinks: true
  });

  // http://stackoverflow.com/questions/41226122/url-hash-bang-prefix-instead-of-simple-hash-in-angular-1-6
  $locationProvider.hashPrefix('!');

  $httpProvider.defaults.headers.post['Content-Type'] = 'application/json';

  // $qProvider.errorOnUnhandledRejections(false);

  $stateProvider
    .state('lwd', {
      abstract: true,
      url: '',
      resolve: {}
    });
}

export default appConfig;
