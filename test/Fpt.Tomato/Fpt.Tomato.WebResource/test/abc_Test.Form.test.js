//@ts-check
define(['xrm-mock'], () => {
    var xrmMock = require('xrm-mock');
    describe('', () => {
        beforeEach(function () {
            var XrmMockGenerator = xrmMock.XrmMockGenerator.initialise();
            XrmMockGenerator.Panel = new xrmMock.PanelMock();
            XrmMockGenerator.Encoding = new xrmMock.EncodingMock();
            XrmMockGenerator.Device = new xrmMock.DeviceMock();
            XrmMockGenerator.Navigation = new xrmMock.NavigationStaticMock();
            XrmMockGenerator.App = new xrmMock.AppMock();
        });
        it('Form', () => {
            var attributes = new xrmMock.ItemCollectionMock([
                new xrmMock.AttributeMock({
                    name: "abc_all",
                    isDirty: true
                })
            ]);
            var entity = new xrmMock.EntityMock({
                entityName: "abc_test",
                id: "GUID",
                primaryValue: "VALUE",
                attributes: attributes
            });
            var data = new xrmMock.DataMock(entity);
            var frame = new xrmMock.IframeControlMock({
                name: "abc_iframed",
                controlType: "iframe",
                label: "IFRAME LABEL",
                visible: true
            });
            var ui = new xrmMock.UiMock({
                formSelector: new xrmMock.FormSelectorMock(new xrmMock.ItemCollectionMock([new xrmMock.FormItemMock({
                    id: "form1",
                    label: "FORM1",
                    currentItem: true,
                    formType: XrmEnum.FormType.Update
                })])),
                controls: new xrmMock.ItemCollectionMock([
                    frame
                ])
            });
            xrmMock.XrmMockGenerator.formContext = new xrmMock.FormContextMock(data, ui);

            var executionContext = xrmMock.XrmMockGenerator.formContext;
            var form = new Tomato.FormTest(executionContext);
            expect(() => { form.DataXml }).toThrow(new Error("getDataXml not implemented"));
            expect(form.EntityName).toBe("abc_test");
            expect(form.EntityId).toBe("GUID");
            expect(form.PrimaryAttributeValue).toBe("VALUE");
            var formDataAddOnLoad = function () { };
            expect(data.loadEventHandlers.length).toBe(0);
            form.DataAddOnLoad(formDataAddOnLoad);
            expect(data.loadEventHandlers.length).toBe(1);
            expect(() => { form.Refresh(true, null, null) }).toThrow(new Error("refresh not implemented"));
            form.DataRemoveOnLoad(formDataAddOnLoad);
            expect(data.loadEventHandlers.length).toBe(0);
            expect(() => { form.Save(null, null, null) }).toThrow(new Error("save not implemented"));
            expect(() => { form.DataIsDirty }).toThrow(new Error("getIsDirty not implemented"));
            expect(() => { form.DataIsValid }).toThrow(new Error("isValid not implemented"));
            expect(entity.saveEventHandlers.length).toBe(0);
            var formAddOnSave = function () { };
            form.AddOnSave(formAddOnSave);
            expect(entity.saveEventHandlers.length).toBe(1);
            form.RemoveOnSave(formAddOnSave);
            expect(entity.saveEventHandlers.length).toBe(0);
            expect(form.Attributes).toBeDefined();
            var e = form.EntityReference;
            expect(e.id).toBe("GUID");
            expect(e.name).toBe("VALUE");
            expect(e.entityType).toBe("abc_test");
            expect(form.EntityIsDirty).toBeTruthy();
            expect(() => { form.EntityIsValid }).toThrow(new Error("isValid not implemented."));
            expect(form.SetFormNotification("A", OptionSet.FormNotificationLevel.Info, "B")).toBeDefined();
            expect(form.ClearFormNotification("B")).toBeTruthy();
            expect(() => { form.Close() }).toThrow(new Error("close not implemented"));
            expect(() => { form.RefreshRibbon() }).toThrow(new Error("refreshRibbon not implemented"));
            expect(() => { form.SetFormEntityName(null); }).toThrow(new Error("setFormEntityName not implemented"));
            expect(form.Controls).toBeDefined();
            expect(form.FormType).toBe(OptionSet.FormType.Update);
            expect(() => { form.ViewPortHeight }).toThrow(new Error("getViewPortHeight not implemented"));
            expect(() => { form.ViewPortWidth }).toThrow(new Error("getViewPortWidth not implemented"));
            expect(() => { form.UiAddOnLoad(null) }).toThrow(new Error("addOnLoad not implemented"));
            expect(() => { form.UiRemoveOnLoad(null) }).toThrow(new Error("removeOnLoad not implemented"));
            expect(form.FormNavigate("form1")).toBeUndefined();
            expect(form.FormSetVisible("form1", true)).toBeUndefined();
            expect(form.FormIsVisible("form1")).toBeFalsy();
            expect(form.FormId).toBe("form1");
            expect(form.FormLabel).toBe("FORM1");
        });
    });
});
