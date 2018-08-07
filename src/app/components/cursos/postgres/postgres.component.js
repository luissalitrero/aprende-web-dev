'use strict';

import PostgresController from './postgres.controller.js';

let postgresComponentDef = {
  restrict: 'E',
  bindings: {},
  templateUrl: './components/cursos/postgres/postgres.tpl.html',
  controller: PostgresController,
  controllerAs: 'PostgresCtrl'
};

export default angular
  .module('lwd.components.cursos.postgres', ['ui.router'])
  .config(function ($stateProvider) {
    "ngInject";
  
    $stateProvider
      .state('lwd.cursos.postgres', {
        url: '/postgres',
        template: '<postgres-component></postgres-component>'
      });
  })
  .component('postgresComponent', postgresComponentDef)
  .name;
