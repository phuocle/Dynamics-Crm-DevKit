//@ts-check
define(['xrm-mock', 'sinon'], function () {
    var xrmMock = require('xrm-mock');
    var sinon = require('sinon');
    describe('Email.test.js Test', function () {
        beforeEach(function () {
            var XrmMockGenerator = xrmMock.XrmMockGenerator.initialise();
            XrmMockGenerator.Panel = new xrmMock.PanelMock();
            XrmMockGenerator.Encoding = new xrmMock.EncodingMock();
            XrmMockGenerator.Device = new xrmMock.DeviceMock();
            XrmMockGenerator.Navigation = new xrmMock.NavigationStaticMock();
        });
        it('Lookup attribute type', () => {
            xrmMock.XrmMockGenerator.Control.createLookup(new xrmMock.LookupControlMock({
                name: "to",
                attribute: new xrmMock.LookupAttributeMock({
                    name: "to",
                    isPartyList: true
                })
            }));
            var executionContext = xrmMock.XrmMockGenerator.formContext;
            var form = new DevKit.FormEmail(executionContext);
            expect(form.Body.to.IsPartyList).toBeTruthy();
        });
    });
});