(function() {

    /* global module, inject */

    'use strict';

    describe('Controller: Home', function() {

        beforeEach(module('app.core'));
        beforeEach(module('app.home'));

        var ctrl;
        var scope;

        beforeEach(inject(function($controller, $injector) {

            scope = $injector.get('$rootScope');

            ctrl = $controller('Home', {
                //add injectable services
            });

        }));

        it('should do nothing', function() {
            expect(true).toBe(false);
        });

    });
}());
