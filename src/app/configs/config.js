'use strict';

function appConfig($locationProvider, $urlRouterProvider, $qProvider, $stateProvider, $httpProvider) {
  'ng-inject';

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: true,
    rewriteLinks: true
  });

  // http://stackoverflow.com/questions/41226122/url-hash-bang-prefix-instead-of-simple-hash-in-angular-1-6
  $locationProvider.hashPrefix('!');
  $urlRouterProvider.otherwise('/inicio');
  $httpProvider.defaults.headers.post['Content-Type'] = 'application/json';

  // $qProvider.errorOnUnhandledRejections(false);

  $stateProvider
    .state('lwd', {
      abstract: true,
      url: ''
    });
}

appConfig.$inject = ['$locationProvider', '$urlRouterProvider', '$qProvider', '$stateProvider', '$httpProvider'];

export default appConfig;
