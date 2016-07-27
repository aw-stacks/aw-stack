'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import HomeRoute from './home-route';
import HomeCtrl from './home-ctrl';

export default angular.module('awstack.home', [uiRouter])
  .config(['$stateProvider', HomeRoute])
  .controller('HomeCtrl', HomeCtrl)
  .name;
