'use strict';

/**
 * @ngdoc controller
 * @name lwd.controller:HeaderController
 * @param {} $state - .
 * @description .
 */
class HeaderController {
  constructor($transitions, $state) {
    "ngInject";

    this.$state = $state;
    this.$transitions = $transitions;

    this.headerBla = 'I am in the header component';
  };
  
  assignCurrentState() {
    this.currentState = this.$state.current.name;
  };

  $onInit() {
    this.assignCurrentState();

    this.$transitions.onSuccess({}, () => {
      this.assignCurrentState();
    });
  }
}

export default HeaderController;
