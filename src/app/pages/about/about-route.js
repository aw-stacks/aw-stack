'use strict';

import AboutTpl from './about-tpl.html';

export default function routes($stateProvider) {

  $stateProvider
    .state('about', {
      url: '/about',
      templateUrl: AboutTpl,
      controller: 'AboutCtrl',
      controllerAs: 'about'
    });
};
