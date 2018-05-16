'use strict';

/**
 * @ngdoc controller
 * @name lwd.controller:HeaderController
 * @param {} $state - .
 * @description .
 */
class HeaderController {
  constructor($state) {
    this.$state = $state;

    this.headerBla = 'I am in the header component';
  }

  $onInit() {
    console.log('-----0--', this.$state);
    this.currentState = this.$state.current.name;
    console.log('-----0--', this.currentState);

  //   switch (this.$state.current.name) {
  //     case 'lwd.cursos.html':
  //       this.currentState = 'lwd.cursos.html'
  //     case 'lwd.cursos.css':
  //       this.currentState ='lwd.cursos.css' 
  //     case 'lwd.cursos.bootstrap':
  //       this.currentState = 'lwd.cursos.boots
  //     case 'lwd.cursos.less':
  //       this.currentState = 'lwd.cursos.less'
  //     case 'lwd.cursos.javascript':
  //       this.currentState = 'lwd.cursos.javas
  //     case 'lwd.cursos.angularjs':
  //       this.currentState = 'lwd.cursos.angul
  //   }
  }
}

export default HeaderController;
