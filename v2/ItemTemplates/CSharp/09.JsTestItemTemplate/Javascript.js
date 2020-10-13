//@ts-check
define(['xrm-mock', 'sinon'], function () {
    var xrmMock = require('xrm-mock');
    var sinon = require('sinon');
    describe('$class$.test.js Test', function () {
        beforeEach(function () {
            xrmMock.XrmMockGenerator.initialise();
        });
        it('Test-01', function () {
            expect(true).toBe(true);
        });
    });
});