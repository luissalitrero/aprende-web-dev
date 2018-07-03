'use strict';

import angularComponent    from './angular/angular.component.js';
import bootstrapComponent  from './bootstrap/bootstrap.component.js';
import cssComponent        from './css/css.component.js';
import htmlComponent       from './html/html.component.js';
import javascriptComponent from './javascript/javascript.component.js';
import lessComponent       from './less/less.component.js';
import gruntComponent      from './grunt/grunt.component.js';
import postgresComponent   from './postgres/postgres.component.js';
import sailsComponent      from './sails/sails.component.js';
import jqueryComponent      from './jquery/jquery.component.js';

let cursosModule = angular
  .module('lwd.components.cursos', [
    angularComponent,
    bootstrapComponent,
    cssComponent,
    htmlComponent,
    javascriptComponent,
    lessComponent,
    gruntComponent,
    postgresComponent,
    sailsComponent,
    jqueryComponent
  ])
  .config(function ($stateProvider) {
    'ng-inject';
  
    $stateProvider
      .state('lwd.cursos', {
        abstract: true,
        url: '/cursos',
        template: `<section class="col-xs-12 col-sm-9" role="main" ui-view></section>
                   <article class="col-xs-12 col-sm-3" role="complementary">
                     <aside>
                       <sidebar-component></sidebar-component>
                     </aside>
                   </article>`
      });
  })
  .name;

export default cursosModule;
