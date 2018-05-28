'use strict';

/**
 * @ngdoc controller
 * @name lwd.controller:CompaniasSaldosInicialesMenuController
 * @param {} $state - .
 * @description .
 */
class HomeController {
  constructor() {
    'ngInject';

    this.courses = [
      {
        description: "Aprende a crear aplicaciones web semánticas con HTML5 y sus nuevas características.",
        link: {href: "lwd.cursos.html", text: "", title: ""},
        logo: {src: 'http://www.simpsoncrazy.com/content/pictures/homer/homer-pythagoras.png', alt: "Logo de HTML5", title: "Logo de HTML5"},
        title: "HTML5"
      },
      {
        description: "Aprende a usar las hojas de estilo en cascada (CSS) y embellece tus aplicaciones web.",
        link: {href: "lwd.cursos.css", text: "", title: ""},
        logo: {src: 'http://www.simpsoncrazy.com/content/pictures/homer/homer-pythagoras.png', alt: "Logo de CSS3", title: "Logo de CSS3"},
        title: "CSS3"
      },
      {
        description: "Con LESS llevarás tu CSS a otro nivel, gracias al uso de variables, funciones y mucho más.",
        link: {href: "lwd.cursos.less", text: "", title: ""},
        logo: {src: 'http://www.simpsoncrazy.com/content/pictures/homer/homer-pythagoras.png', alt: "Logo de LESS", title: "Logo de LESS"},
        title: "LESS"
      },
      {
        description: "Agiliza la creación de tus aplicaciones web con este gran framework CSS.",
        link: {href: "lwd.cursos.bootstrap", text: "", title: ""},
        logo: {src: 'http://www.simpsoncrazy.com/content/pictures/homer/homer-pythagoras.png', alt: "Logo de Bootstrap", title: "Logo de Bootstrap"},
        title: "Bootstrap3"
      },
      {
        description: "Conoce el lenguaje de programación esencial para desarrollar aplicaciones web interactivas.",
        link: {href: "lwd.cursos.javascript", text: "", title: ""},
        logo: {src: 'http://www.simpsoncrazy.com/content/pictures/homer/homer-pythagoras.png', alt: "Logo de Javascript", title: "Logo de Javascript"},
        title: "Javascript"
      },
      {
        description: "",
        link: {href: "lwd.cursos.jquery", text: "", title: ""},
        logo: {src: 'http://www.simpsoncrazy.com/content/pictures/homer/homer-pythagoras.png', alt: "Logo de jQuery", title: "Logo de jQuery"},
        title: "jQuery"
      },
      {
        description: "",
        link: {href: "lwd.cursos.angular", text: "", title: ""},
        logo: {src: 'http://www.simpsoncrazy.com/content/pictures/homer/homer-pythagoras.png', alt: "Logo de Angular", title: "Logo de Angular"},
        title: "Angular"
      }
    ];
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
