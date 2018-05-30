'use strict';

/**
 * @ngdoc controller
 * @name lwd.controller:CompaniasSaldosInicialesMenuController
 * @param {} $state - .
 * @description .
 */
class HomeController {
  constructor(arrays) {
    'ngInject';

    this.courses = arrays.courses;
  }

  $onInit() {
    let thisObj = this;

    this.courses.forEach(function (course) {
      course.link.text = thisObj.linkText;
      course.link.title = thisObj.linkText;
    });
  }
}

export default HomeController;
