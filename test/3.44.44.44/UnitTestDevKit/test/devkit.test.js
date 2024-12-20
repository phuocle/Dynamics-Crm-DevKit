import { OptionSet, devKit } from '../lib/devkit.mjs';
import {
    XrmMockGenerator, PanelMock, EncodingMock, DeviceMock, NavigationStaticMock, DataMock, EntityMock, ItemCollectionMock, AttributeMock, StringControlMock,
    StringAttributeMock, UiMock, FormSelectorMock, FormItemMock, FormContextMock
} from 'xrm-mock';
beforeAll(() => {
    XrmMockGenerator.initialise();
});
// describe('OptionSet', () => {
//     test('should have correct FormType values', () => {
//         expect(OptionSet.FormType.Undefined).toBe(0);
//         expect(OptionSet.FormType.Create).toBe(1);
//         expect(OptionSet.FormType.Update).toBe(2);
//         expect(OptionSet.FormType.ReadOnly).toBe(3);
//         expect(OptionSet.FormType.Disabled).toBe(4);
//         expect(OptionSet.FormType.BulkEdit).toBe(5);
//     });

//     test('should have correct SaveOption values', () => {
//         expect(OptionSet.SaveOption.SaveAndClose).toBe('saveandclose');
//         expect(OptionSet.SaveOption.SaveAndNew).toBe('saveandnew');
//     });

//     test('should have correct SaveMode values', () => {
//         expect(OptionSet.SaveMode.Save).toBe(1);
//         expect(OptionSet.SaveMode.SaveAndClose).toBe(2);
//         expect(OptionSet.SaveMode.Deactivate).toBe(5);
//         expect(OptionSet.SaveMode.Reactivate).toBe(6);
//         expect(OptionSet.SaveMode.Email).toBe(7);
//         expect(OptionSet.SaveMode.Disqualify).toBe(15);
//         expect(OptionSet.SaveMode.Qualify).toBe(16);
//         expect(OptionSet.SaveMode.Assign).toBe(47);
//         expect(OptionSet.SaveMode.SaveAsCompleted).toBe(58);
//         expect(OptionSet.SaveMode.SaveAndNew).toBe(59);
//         expect(OptionSet.SaveMode.AutoSave).toBe(70);
//     });

//     test('should have correct FormNotificationLevel values', () => {
//         expect(OptionSet.FormNotificationLevel.Error).toBe('ERROR');
//         expect(OptionSet.FormNotificationLevel.Warning).toBe('WARNING');
//         expect(OptionSet.FormNotificationLevel.Info).toBe('INFO');
//     });

//     test('should have correct TabDisplayState values', () => {
//         expect(OptionSet.TabDisplayState.Expanded).toBe('expanded');
//         expect(OptionSet.TabDisplayState.Collapsed).toBe('collapsed');
//     });

//     test('should have correct TabContentType values', () => {
//         expect(OptionSet.TabContentType.CardSections).toBe('cardSections');
//         expect(OptionSet.TabContentType.SingleComponent).toBe('singleComponent');
//     });

//     test('should have correct ProcessDisplayState values', () => {
//         expect(OptionSet.ProcessDisplayState.Expanded).toBe('expanded');
//         expect(OptionSet.ProcessDisplayState.Collapsed).toBe('collapsed');
//         expect(OptionSet.ProcessDisplayState.Floating).toBe('floating');
//     });

//     test('should have correct ProcessStatus values', () => {
//         expect(OptionSet.ProcessStatus.Active).toBe('active');
//         expect(OptionSet.ProcessStatus.Aborted).toBe('aborted');
//         expect(OptionSet.ProcessStatus.Finished).toBe('finished');
//     });

//     test('should have correct FieldAttributeType values', () => {
//         expect(OptionSet.FieldAttributeType.Boolean).toBe('boolean');
//         expect(OptionSet.FieldAttributeType.DateTime).toBe('datetime');
//         expect(OptionSet.FieldAttributeType.Decimal).toBe('decimal');
//         expect(OptionSet.FieldAttributeType.Double).toBe('double');
//         expect(OptionSet.FieldAttributeType.Integer).toBe('integer');
//         expect(OptionSet.FieldAttributeType.Lookup).toBe('lookup');
//         expect(OptionSet.FieldAttributeType.Memo).toBe('memo');
//         expect(OptionSet.FieldAttributeType.Money).toBe('money');
//         expect(OptionSet.FieldAttributeType.MultiOptionSet).toBe('multioptionset');
//         expect(OptionSet.FieldAttributeType.OptionSet).toBe('optionset');
//         expect(OptionSet.FieldAttributeType.String).toBe('string');
//     });

//     test('should have correct FieldFormat values', () => {
//         expect(OptionSet.FieldFormat.Date).toBe('date');
//         expect(OptionSet.FieldFormat.DateTime).toBe('datetime');
//         expect(OptionSet.FieldFormat.Duration).toBe('duration');
//         expect(OptionSet.FieldFormat.Email).toBe('email');
//         expect(OptionSet.FieldFormat.Language).toBe('language');
//         expect(OptionSet.FieldFormat.None).toBe('none');
//         expect(OptionSet.FieldFormat.TextArea).toBe('textarea');
//         expect(OptionSet.FieldFormat.Text).toBe('text');
//         expect(OptionSet.FieldFormat.TickerSymbol).toBe('tickersymbol');
//         expect(OptionSet.FieldFormat.Phone).toBe('phone');
//         expect(OptionSet.FieldFormat.TimeZone).toBe('timezone');
//         expect(OptionSet.FieldFormat.Url).toBe('url');
//     });

//     test('should have correct FieldRequiredLevel values', () => {
//         expect(OptionSet.FieldRequiredLevel.None).toBe('none');
//         expect(OptionSet.FieldRequiredLevel.Required).toBe('required');
//         expect(OptionSet.FieldRequiredLevel.Recommended).toBe('recommended');
//     });

//     test('should have correct FieldSubmitMode values', () => {
//         expect(OptionSet.FieldSubmitMode.Always).toBe('always');
//         expect(OptionSet.FieldSubmitMode.Never).toBe('never');
//         expect(OptionSet.FieldSubmitMode.Dirty).toBe('dirty');
//     });

//     test('should have correct FieldControlType values', () => {
//         expect(OptionSet.FieldControlType.Standard).toBe('standard');
//         expect(OptionSet.FieldControlType.Iframe).toBe('iframe');
//         expect(OptionSet.FieldControlType.KbSearch).toBe('kbsearch');
//         expect(OptionSet.FieldControlType.Lookup).toBe('lookup');
//         expect(OptionSet.FieldControlType.MultiSelectOptionset).toBe('multiselectoptionset');
//         expect(OptionSet.FieldControlType.Notes).toBe('notes');
//         expect(OptionSet.FieldControlType.OptionSet).toBe('optionset');
//         expect(OptionSet.FieldControlType.QuickForm).toBe('quickform');
//         expect(OptionSet.FieldControlType.SubGrid).toBe('subgrid');
//         expect(OptionSet.FieldControlType.TimerControl).toBe('timercontrol');
//         expect(OptionSet.FieldControlType.TimelineWall).toBe('timelinewall');
//         expect(OptionSet.FieldControlType.WebResource).toBe('webresource');
//     });

//     test('should have correct FieldNotificationLevel values', () => {
//         expect(OptionSet.FieldNotificationLevel.Error).toBe('ERROR');
//         expect(OptionSet.FieldNotificationLevel.Recommendation).toBe('RECOMMENDATION');
//     });
// });
describe('devKit', () => {
    test('devKit.LoadForm', () => {
        var attributes = new ItemCollectionMock([
            new AttributeMock({
                name: "name",
                isDirty: true
            })
        ]);
        var entity = new EntityMock({
            entityName: "account",
            id: "8d2dbd8c-c9f8-4cb5-8838-f5a916a6098a",
            primaryValue: "LE VAN PHUOC",
            attributes: attributes
        });
        var data = new DataMock(entity);
        var stringControl = new StringControlMock({
            attribute: new StringAttributeMock({
                name: "name",
                value: "LE VAN PHUOC"
            }),
            name: "name",
            label: "Account Name"
        });
        var ui = new UiMock({
            formSelector: new FormSelectorMock(new ItemCollectionMock([
                new FormItemMock({
                    id: "8d2dbd8c-c9f8-4cb5-8838-f5a916a6098a",
                    label: "Account",
                    currentItem: true,
                    formType: OptionSet.FormType.Update
                }),
                new FormItemMock({
                    id: "8d2dbd8c-c9f8-4cb5-8838-f5a916a6098b",
                    label: "Contact",
                    currentItem: false,
                    formType: OptionSet.FormType.Create
                })
            ])),
            controls: new ItemCollectionMock([
                stringControl
            ])
        });
        XrmMockGenerator.formContext = new FormContextMock(data, ui);
        var executionContext = XrmMockGenerator.formContext;

        var form = devKit.LoadForm(executionContext);
        var formDataAddOnLoad = function () { };
        expect(data.loadEventHandlers.length).toBe(0);
        form.DataAddOnLoad(formDataAddOnLoad);
        expect(data.loadEventHandlers.length).toBe(1);
        expect(() => { form.Refresh(null, null, null) }).toThrow(new Error("refresh not implemented"));
        form.DataRemoveOnLoad(formDataAddOnLoad);
        expect(data.loadEventHandlers.length).toBe(0);
        expect(() => { form.Save(null, null, null) }).toThrow(new Error("save not implemented"));
        expect(() => { form.DataIsDirty }).toThrow(new Error("getIsDirty not implemented"));
        expect(() => { form.DataIsValid }).toThrow(new Error("isValid not implemented"));
        expect(entity.saveEventHandlers.length).toBe(0);
        const formAddOnSave = function () { };
        form.AddOnSave(formAddOnSave);
        expect(entity.saveEventHandlers.length).toBe(1);
        const formAddOnPostSave = function () { };
        expect(entity.postSaveEventHandlers.length).toBe(0);
        form.AddOnPostSave(formAddOnPostSave);
        expect(entity.postSaveEventHandlers.length).toBe(1);
        form.RemoveOnSave(formAddOnSave);
        expect(entity.saveEventHandlers.length).toBe(0);
        form.RemoveOnPostSave(formAddOnPostSave);
        expect(entity.postSaveEventHandlers.length).toBe(0);
        expect(form.Attributes.get('name')).not.toBeNull();
        expect(() => { form.DataXml }).toThrow(new Error("getDataXml not implemented"));
        expect(form.EntityName).toBe("account");
        const entityReference = form.EntityReference;
        expect(entityReference.id).toBe("8d2dbd8c-c9f8-4cb5-8838-f5a916a6098a");
        expect(entityReference.name).toBe("LE VAN PHUOC");
        expect(entityReference.entityType).toBe("account");
        expect(form.EntityId).toBe("8d2dbd8c-c9f8-4cb5-8838-f5a916a6098a");
        expect(form.EntityIsDirty).toBeTruthy();
        expect(form.PrimaryAttributeValue).toBe("LE VAN PHUOC");
        expect(() => { form.EntityIsValid }).toThrow(new Error("isValid not implemented."));
        expect(form.SetFormNotification("A", OptionSet.FormNotificationLevel.Info, "B")).toBeDefined();
        expect(form.ClearFormNotification("B")).toBeTruthy();
        expect(form.FormType).toBe(OptionSet.FormType.Update);
        expect(() => { form.ViewPortHeight }).toThrow(new Error("getViewPortHeight not implemented"));
        expect(() => { form.ViewPortWidth }).toThrow(new Error("getViewPortWidth not implemented"));
        expect(() => { form.UiAddOnLoad(null) }).toThrow(new Error("addOnLoad not implemented"));
        expect(() => { form.UiRemoveOnLoad(null) }).toThrow(new Error("removeOnLoad not implemented"));
        expect(() => { form.UiAddLoaded(null) }).toThrow(new Error("addLoaded not implemented"));
        expect(() => { form.UiRemoveLoaded(null) }).toThrow(new Error("removeLoaded not implemented"));
        expect(form.Controls).toBeDefined();
        expect(form.FormId).toBe("8d2dbd8c-c9f8-4cb5-8838-f5a916a6098a");
        expect(form.FormLabel).toBe("Account");
        expect(() => { form.SetFormEntityName(null); }).toThrow(new Error("setFormEntityName not implemented"));
        expect(() => { form.Close() }).toThrow(new Error("close not implemented"));
        expect(() => { form.RefreshRibbon() }).toThrow(new Error("refreshRibbon not implemented"));
        expect(() => { form.FormNavigateToFormLabel("Contact") }).toThrow(new Error("Form navigation not implemented."));
        expect(() => { form.FormNavigateToFormId("8d2dbd8c-c9f8-4cb5-8838-f5a916a6098b") }).toThrow(new Error("Form navigation not implemented."));
        expect(() => { form.FormSetVisible("8d2dbd8c-c9f8-4cb5-8838-f5a916a6098b", false) }).toThrow(new Error("setVisible not implemented."));
        expect(() => { form.FormIsVisible("8d2dbd8c-c9f8-4cb5-8838-f5a916a6098b") }).toThrow(new Error("getVisible not implemented."));
    });
    test('devKit.LoadForm', () => {

        var form = {};
        form.Utility = devKit.LoadUtility("web-resource-language");
        expect(() => { form.Utility.LearningPathAttributeName }).toThrow(new Error("Method not implemented."));
        expect(() => { form.Utility.ShowProgressIndicator("Waiting") }).toThrow(new Error("Method not implemented."));
        expect(() => { form.Utility.CloseProgressIndicator() }).toThrow(new Error("Method not implemented."));
        expect(() => { form.Utility.EntityMetadata("devkit_webapi", null, null, null) }).toThrow(new Error("Method not implemented."));
        expect(() => { form.Utility.ResourceString("resourcename", "key") }).toThrow(new Error("Method not implemented."));
        expect(() => { form.Utility.AllowedStatusTransitions(null, null, null, null) }).toThrow(new Error("Method not implemented."));
        expect(() => { form.Utility.Resource(null) }).toThrow(new Error("Method not implemented."));
        expect(() => { form.Utility.InvokeProcessAction("name", null, null, null) }).toThrow(new Error("Method not implemented."));
        expect(() => { form.Utility.LookupObjects(null, null, null); }).toThrow(new Error("Method not implemented."));
        expect(() => { form.Utility.RefreshParentGrid(null) }).toThrow(new Error("Method not implemented."));
        expect(() => { form.Utility.PageContext }).toThrow(new Error("Method not implemented."));
    });
});