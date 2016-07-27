'use strict';

import Home from './home';

describe('Controller: Home', function () {
    let $controller;

    beforeEach(angular.mock.module(Home));

    beforeEach(angular.mock.inject(function(_$controller_) {
        $controller = _$controller_;
    }));

    it('name is initialized to Ashwin', function() {
        let ctrl = $controller('HomeCtrl');
        expect(ctrl.name).toBe('Ashwin');
    });
});
