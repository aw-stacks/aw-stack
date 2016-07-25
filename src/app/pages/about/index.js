'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import AboutRoute from './about-route';
import AboutCtrl from './about-ctrl';

export default angular.module('awstack.about', [uiRouter])
  .config(['$stateProvider', AboutRoute])
  .controller('AboutCtrl', AboutCtrl)
  .name;
