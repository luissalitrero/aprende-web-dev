'use strict';

// Comenté esto para probar usando estas librerías como globales cargadas desde una CDN
// import angular from 'angular';
// import uiRouter from '@uirouter/angularjs';

// https://github.com/michaelbromley/angular-es6
// https://www.npmjs.com/package/angular-es6
// import register from './app/utilities/register.js';
import AppConfig from './app/configs/config.js';
import AppRun from './app/configs/run.js';
import AppComponents from './app/components';
import ConstantsUtilities from './app/constants/utilities.js';
import ConstantsArrays from './app/constants/arrays.js';
import SidebarService from './app/services/sidebar.service.js';
// import LwdOnloadDirective from './app/directives/lwd-onload.directive.js';

// console.log('-----00--',LwdOnloadDirective);

angular
  .module('lwd', [
    // uiRouter,
    'ui.router',
    AppComponents
  ])
  .constant('utils', ConstantsUtilities)
  .constant('arrays', ConstantsArrays)
  .service('sidebarService', SidebarService)
  .directive('lwdOnloadDirective', function () {
    "ngInject";
    console.log('-----01--');
  
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        console.log('-----02--');
    
        // element.html(prettyPrintOne(replaceText(element.html()),'',true));
        element.on('click', () => {
          console.log('-----03--');
        });
      }
    }
  })
  .config(AppConfig)
  .run(AppRun);

// .directive('lwdOnloadDirective', register(LwdOnloadDirective))
// register('lwd').directive('lwdOnloadDirective', LwdOnloadDirective);
