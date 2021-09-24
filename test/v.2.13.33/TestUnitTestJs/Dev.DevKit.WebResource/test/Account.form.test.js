//@ts-check
define(['xrm-mock', 'sinon'], function () {
    var xrmMock = require('xrm-mock');
    var sinon = require('sinon');
    describe('Account.test.js Test', function () {
        beforeEach(function () {
            xrmMock.XrmMockGenerator.initialise();
        });
        it('Test-Account-LoadLoad', function () {
            //setup
            var stringControl = new xrmMock.StringControlMock({
                attribute: new xrmMock.StringAttributeMock({
                    name: "name",
                    value: "LE VAN PHUOC"
                }),
                name: "name",
                label: "Account Name"
            });
            var ui = new xrmMock.UiMock({
                formSelector: new xrmMock.FormSelectorMock(new xrmMock.ItemCollectionMock([new xrmMock.FormItemMock({
                    id: "8d2dbd8c-c9f8-4cb5-8838-f5a916a6098a",
                    label: "Account",
                    currentItem: true,
                    formType: XrmEnum.FormType.Update
                })])),
                controls: new xrmMock.ItemCollectionMock([
                    stringControl
                ])
            });
            var attributes = new xrmMock.ItemCollectionMock([
                new xrmMock.AttributeMock({
                    name: "name",
                    isDirty: true
                })
            ]);
            var entity = new xrmMock.EntityMock({
                attributes: attributes
            });
            var data = new xrmMock.DataMock(entity);
            xrmMock.XrmMockGenerator.formContext = new xrmMock.FormContextMock(data, ui);
            var executionContext = xrmMock.XrmMockGenerator.formContext;
            //run
            formAccount.OnLoad(executionContext);
            //result
            var form = new DevKit.FormAccount(executionContext);
            expect(form.Body.Name.Disabled).toBeTruthy();
        });
    });
});