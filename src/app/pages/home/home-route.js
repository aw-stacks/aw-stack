'use strict';

import HomeTpl from './home-tpl.html';

export default function routes($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: HomeTpl,
      controller: 'HomeCtrl',
      controllerAs: 'home'
    });
};
