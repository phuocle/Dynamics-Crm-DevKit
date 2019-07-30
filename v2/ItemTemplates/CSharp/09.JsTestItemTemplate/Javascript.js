//@ts-check
///<reference path='xrm-mock.d.ts' />
///<reference path='../node_modules/@types/xrm/index.d.ts' />
///<reference path='../node_modules/@types/sinon/index.d.ts' />
///<reference path='../node_modules/@types/jasmine/index.d.ts' />
// @ts-ignore
define(['xrm-mock', 'sinon'], function (/** @type {XrmMock} */_xrm_mock, /** @type {sinon} */_sinon) {
    describe('$class$.test.js Test', function () {
        it('Test-01', function () {
            _xrm_mock.XrmMockGenerator.initialise();
            expect(true).toBe(true);
        });
    });
});