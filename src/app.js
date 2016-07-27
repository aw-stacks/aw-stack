'use strict';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './app/stylesheets/override.less';
import './app/stylesheets/common.less';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Routing from './app/router/router-config';

import uiBootstrap from 'angular-ui-bootstrap';

import PageHeaderDirective from './app/components/pageHeader/pageHeader-directive';

import HomePage from './app/pages/home';
import AboutPage from './app/pages/about';

import AuthService from './app/common/services/authenticate';

let app = angular.module('awstack', [
    uiRouter,
    uiBootstrap,
    HomePage,
    AboutPage,
    PageHeaderDirective
  ]);

app.config(['$stateProvider', '$urlRouterProvider', Routing])
