'use strict';

export default function appConfig($locationProvider, $urlRouterProvider, $qProvider, $stateProvider, $httpProvider) {
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
    .state('lwda', {
      abstract: true,
      url: '',
      template: '<div ui-view></div>'
    })
    .state('lwda.index', {
      url: '/inicio',
      templateUrl: './components/main-app/main.app.tpl.html',
      controller: function () {
        console.log('-----1--');
      }
    });
}

appConfig.$inject = ['$locationProvider', '$urlRouterProvider', '$qProvider', '$stateProvider', '$httpProvider'];
