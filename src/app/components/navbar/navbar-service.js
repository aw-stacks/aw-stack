'use strict';

import angular from 'angular';

class NavbarService {
  constructor() {
    this.navbar = {
      "navItems": [{
        "title": "Dashboard",
        "label": "Dashboard",
        "linkTo": "#"
      }, {
        "title": "About Us",
        "label": "About Us",
        "linkTo": "#about"
      }, {
        "title": "Developers Connection",
        "linkTo": "#",
        "icon": {
          "size": "fa-lg",
          "name": "fa-connectdevelop"
        },
        "placement": "navbar-right",
        "subItems": [{
          "label": "Github Home Page",
          "target": "_blank",
          "linkTo": "//github.com/hegdeashwin/aw-stack"
        }, {
          "divider": true
        }, {
          "label": "Release Page",
          "target": "_blank",
          "linkTo": "//github.com/hegdeashwin/aw-stack/releases"
        }, {
          "label": "Milestones",
          "target": "_blank",
          "linkTo": "//github.com/hegdeashwin/aw-stack/milestones"
        }, {
          "divider": true
        }, {
          "label": "Issues Page",
          "target": "_blank",
          "linkTo": "//github.com/hegdeashwin/aw-stack/issues"
        }, {
          "label": "Open Pull Requests",
          "target": "_blank",
          "linkTo": "//github.com/hegdeashwin/aw-stack/pulls"
        }, {
          "divider": true
        }, {
          "label": "About aw-stack",
          "target": "_blank",
          "linkTo": "//github.com/hegdeashwin/aw-stack"
        }]
      }]
    };
  }

  getNavbar() {
    return this.navbar;
  }
};

export default angular.module('service.navbar', [])
  .service('NavbarService', NavbarService)
  .name;
