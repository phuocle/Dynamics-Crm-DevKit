const assert = require('assert');
const { XrmMockGenerator, PanelMock, EncodingMock, DeviceMock, NavigationStaticMock } = require('xrm-mock');
const devkit = require('./devkit');

describe('Tests', () => {
    describe('Atributes', () => {
        beforeEach(function () {
            XrmMockGenerator.initialise();
            XrmMockGenerator.Panel = new PanelMock();
            XrmMockGenerator.Encoding = new EncodingMock();
            XrmMockGenerator.Device = new DeviceMock();
            XrmMockGenerator.Navigation = new NavigationStaticMock();
        });
        it('Boolean attribute type', () => {
            XrmMockGenerator.Attribute.createBoolean({
                attributeType: "boolean",
                name: "donotemail",
                initialValue: true,
                value: true
            });
            var executionContext = XrmMockGenerator.formContext;


        });
    });
});

