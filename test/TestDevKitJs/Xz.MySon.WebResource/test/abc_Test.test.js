//@ts-check
///<reference path='../entities/abc_Test.js' />
define(['xrm-mock'], () => {
    var xrmMock = require('xrm-mock');
    describe('Atributes', () => {
        beforeEach(function () {
            var XrmMockGenerator = xrmMock.XrmMockGenerator.initialise();
            XrmMockGenerator.Panel = new xrmMock.PanelMock();
            XrmMockGenerator.Encoding = new xrmMock.EncodingMock();
            XrmMockGenerator.Device = new xrmMock.DeviceMock();
            XrmMockGenerator.Navigation = new xrmMock.NavigationStaticMock();
        });
        it('All attribute types', () => {
            xrmMock.XrmMockGenerator.Attribute.createString({
                attributeType: "string",
                format: "text",
                isDirty: true,
                name: "abc_all",
                requiredLevel: "required",
                value: "ABC ALL VALUE",
                maxLength: 100,
                submitMode: "always"
            },
                {
                    controlType: "standard",
                    disabled: true,
                    label: "ABC ALL LABEL",
                    name: "abc_all",
                    visible: true
                }
            );
            var executionContext = xrmMock.XrmMockGenerator.formContext;
            var form = new MySon.FormTest(executionContext);
            var addOnChangeData = "";
            var abc_AllAddOnChange = function (executionContent) { addOnChangeData = "ON-CHANGED"; }
            form.Body.abc_All.AddOnChange(abc_AllAddOnChange);
            form.Body.abc_All.FireOnChange();
            expect(addOnChangeData).toBe("ON-CHANGED");
            expect(form.Body.abc_All.AttributeType).toBe(OptionSet.FieldAttributeType.String);
            expect(form.Body.abc_All.Format).toBe(OptionSet.FieldFormat.Text);
            expect(form.Body.abc_All.IsDirty).toBeTruthy();
            expect(form.Body.abc_All.AttributeName).toBe("abc_all");
            expect(() => { form.Body.abc_All.AttributeParent }).toThrow(new Error("getParent not implemented"));
            expect(form.Body.abc_All.RequiredLevel).toBe(OptionSet.FieldRequiredLevel.Required);
            expect(form.Body.abc_All.SubmitMode).toBe(OptionSet.FieldSubmitMode.Always);
            expect(() => { form.Body.abc_All.UserPrivilege }).toThrow(new Error("getUserPrivilege not implemented"));
            expect(form.Body.abc_All.Value).toBe("ABC ALL VALUE");
            expect(() => { form.Body.abc_All.IsValid }).toThrow(new Error("isValid not implemented"));
            addOnChangeData = "REMOVE";
            form.Body.abc_All.RemoveOnChange(abc_AllAddOnChange);
            form.Body.abc_All.FireOnChange();
            expect(addOnChangeData).toBe("REMOVE");
            form.Body.abc_All.RequiredLevel = OptionSet.FieldRequiredLevel.Recommended;
            expect(form.Body.abc_All.RequiredLevel).toBe(OptionSet.FieldRequiredLevel.Recommended);
            form.Body.abc_All.SubmitMode = OptionSet.FieldSubmitMode.Never;
            expect(form.Body.abc_All.SubmitMode).toBe(OptionSet.FieldSubmitMode.Never);
            form.Body.abc_All.Value = null;
            expect(form.Body.abc_All.Value).toBeNull();
            form.Body.abc_All.Value = "ABC ALL VALUE NEW";
            expect(form.Body.abc_All.Value).toBe("ABC ALL VALUE NEW");
            expect(() => { form.Body.abc_All.SetIsValid(null, null); }).toThrow(new Error("setIsValid not implemented"));
        });
        it('Boolean attribute type', () => {
            xrmMock.XrmMockGenerator.Attribute.createBoolean({
                name: "abc_boolean",
                initialValue: true
            });

            var executionContext = xrmMock.XrmMockGenerator.formContext;
            var form = new MySon.FormTest(executionContext);
            expect(form.Body.abc_Boolean.InitialValue).toBeTruthy();
        });
        it('Lookup attribute type', () => {
            xrmMock.XrmMockGenerator.Control.createLookup(new xrmMock.LookupControlMock({
                name: "abc_lookup",
                attribute: new xrmMock.LookupAttributeMock({
                    name: "abc_lookup",
                    isPartyList: true
                })
            }));
            var executionContext = xrmMock.XrmMockGenerator.formContext;
            var form = new MySon.FormTest(executionContext);
            expect(form.Body.abc_Lookup.IsPartyList).toBeTruthy();
        });
        it('MultiSelectOptionSet and OptionSet attribute types', () => {
            xrmMock.XrmMockGenerator.Attribute.createOptionSet({
                name: "abc_optionsetcode",
                initialValue: 100000001,
                options: [
                    { text: "Value 1", value: 100000000 },
                    { text: "Value 2", value: 100000001 },
                    { text: "Value 3", value: 100000002 },
                    { text: "Value 4", value: 100000003 },
                    { text: "Value 5", value: 100000004 },
                    { text: "Value 6", value: 100000005 }
                ],
                value: 100000001
            },
                {
                    name: "abc_optionsetcode",
                    options: [
                        { text: "Value 1", value: 100000000 },
                        { text: "Value 2", value: 100000001 },
                        { text: "Value 3", value: 100000002 },
                        { text: "Value 4", value: 100000003 },
                        { text: "Value 5", value: 100000004 },
                        { text: "Value 6", value: 100000005 }
                    ]
                }
            );
            var executionContext = xrmMock.XrmMockGenerator.formContext;
            var form = new MySon.FormTest(executionContext);
            expect(form.Body.abc_OptionSetCode.InitialValue).toBe(OptionSet.abc_Test.abc_OptionSetCode.Value_2);
            var option = form.Body.abc_OptionSetCode.Option("Value 6");
            expect(option.text).toBe("Value 6");
            expect(option.value).toBe(100000005);
            expect(form.Body.abc_OptionSetCode.Options.length).toBe(6);
            expect(form.Body.abc_OptionSetCode.Options[0].text).toBe("Value 1");
            expect(form.Body.abc_OptionSetCode.Options[0].value).toBe(100000000);
            var selectedOption = form.Body.abc_OptionSetCode.SelectedOption;
            expect(selectedOption.text).toBe("Value 2");
            expect(selectedOption.value).toBe(100000001);
            expect(form.Body.abc_OptionSetCode.Text).toBe("Value 2");
        });
        it('Number attribute type (decimal, double, integer, money)', () => {
            xrmMock.XrmMockGenerator.Attribute.createNumber({
                name: "abc_floatingpointnumber",
                max: 123.78,
                min: 12.84,
                precision: 2,
            });
            var executionContext = xrmMock.XrmMockGenerator.formContext;
            var form = new MySon.FormTest(executionContext);

            expect(form.Body.abc_FloatingPointNumber.Max).toBe(123.78);
            expect(form.Body.abc_FloatingPointNumber.Min).toBe(12.84);
            expect(form.Body.abc_FloatingPointNumber.Precision).toBe(2);
            form.Body.abc_FloatingPointNumber.Precision = 1;
            expect(form.Body.abc_FloatingPointNumber.Precision).toBe(1);
        });
        it('String attribute type', () => {
            xrmMock.XrmMockGenerator.Attribute.createString({
                attributeType: "string",
                name: "abc_all",
                maxLength: 100
            });
            var executionContext = xrmMock.XrmMockGenerator.formContext;
            var form = new MySon.FormTest(executionContext);

            expect(form.Body.abc_All.MaxLength).toBe(100);
        });
    });
    describe('Controls', () => {
        beforeEach(function () {
            var XrmMockGenerator = xrmMock.XrmMockGenerator.initialise();
            XrmMockGenerator.Panel = new xrmMock.PanelMock();
            XrmMockGenerator.Encoding = new xrmMock.EncodingMock();
            XrmMockGenerator.Device = new xrmMock.DeviceMock();
            XrmMockGenerator.Navigation = new xrmMock.NavigationStaticMock();
        });
        it('standard control type', () => {
            xrmMock.XrmMockGenerator.Attribute.createString({
                attributeType: "string",
                format: "text",
                isDirty: true,
                name: "abc_all",
                requiredLevel: "required",
                value: "ABC ALL VALUE",
                maxLength: 100,
                submitMode: "always"
            },
                [
                    {
                        controlType: "standard",
                        disabled: true,
                        label: "ABC ALL LABEL",
                        name: "abc_all",
                        visible: true
                    },
                    {
                        controlType: "standard",
                        disabled: true,
                        label: "ABC ALL LABEL_TAB_2",
                        name: "abc_all_1",
                        visible: false
                    }
                ]
            );
            var executionContext = xrmMock.XrmMockGenerator.formContext;
            var form = new MySon.FormTest(executionContext);

            expect(() => { form.Body.abc_All.AddNotification(null) }).toThrow(new Error("Method not implemented."));
            expect(() => { form.Body.abc_All.ClearNotification("uniqueId") }).toThrow(new Error("clear notification not implemented"));
            expect(form.Body.abc_All.Attribute).toBeDefined();
            expect(form.Body.abc_All.ControlType).toBe(OptionSet.FieldControlType.Standard);
            expect(form.Body.abc_All.Disabled).toBeTruthy();
            expect(form.Body.abc_All.Label).toBe("ABC ALL LABEL");
            expect(form.Body.abc_All.ControlName).toBe("abc_all");
            expect(form.Body.abc_All_1.ControlName).toBe("abc_all_1");
            expect(form.Body.abc_All_1.Value).toBe("ABC ALL VALUE");
            expect(form.Body.abc_All.ControlParent).toBeUndefined();
            expect(form.Body.abc_All_1.Visible).toBeFalsy(0);
            form.Body.abc_All.Disabled = false;
            expect(form.Body.abc_All.Disabled).toBeFalsy();
            expect(form.Body.abc_All.Focus()).toBeUndefined();
            form.Body.abc_All.Label = "ABC ALL LABEL NEW";
            expect(form.Body.abc_All.Label).toBe("ABC ALL LABEL NEW");
            expect(() => { form.Body.abc_All.SetNotification("ABC", "ABC") }).toThrow(new Error("set notification not implemented"));
            form.Body.abc_All.Visible = false;
            expect(form.Body.abc_All.Visible).toBeFalsy();
        });
        it('iframe control type', () => {
            var attributes = new xrmMock.ItemCollectionMock([
                new xrmMock.AttributeMock({
                    name: "abc_iframed"
                })
            ]);
            var entity = new xrmMock.EntityMock({
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
                controls: new xrmMock.ItemCollectionMock([
                    frame
                ])
            });
            xrmMock.XrmMockGenerator.formContext = new xrmMock.FormContextMock(data, ui);
            var executionContext = xrmMock.XrmMockGenerator.formContext;
            var form = new MySon.FormTest(executionContext);

            expect(() => { form.Body.abc_IFramed.ContentWindow(null, null) }).toThrow(new Error("getContentWindow not implemented."));
            expect(form.Body.abc_IFramed.ControlType).toBe(OptionSet.FieldControlType.Iframe);
            expect(() => { form.Body.abc_IFramed.Disabled }).toThrow(new Error("getDisabled not implemented."));
            expect(() => { form.Body.abc_IFramed.InitialUrl }).toThrow(new Error("getInitialUrl not implemented."));
            expect(form.Body.abc_IFramed.Label).toBe("IFRAME LABEL");
            expect(form.Body.abc_IFramed.ControlName).toBe("abc_iframed");
            expect(() => { form.Body.abc_IFramed.Object }).toThrow(new Error("getObject not implemented."));
            expect(form.Body.abc_IFramed.ControlParent).toBeUndefined();
            expect(() => { form.Body.abc_IFramed.Src }).toThrow(new Error("getSrc not implemented."));
            expect(form.Body.abc_IFramed.Visible).toBeTruthy();
            expect(() => { form.Body.abc_IFramed.Disabled = true }).toThrow(new Error("setDisabled not implemented."));
            expect(() => { form.Body.abc_IFramed.Focus() }).toThrow(new Error("setFocus not implemented."));
            form.Body.abc_IFramed.Label = "IFRAME LABEL NEW";
            expect(form.Body.abc_IFramed.Label).toBe("IFRAME LABEL NEW");
            expect(() => { form.Body.abc_IFramed.Src = "ABC" }).toThrow(new Error("setSrc not implemented."));
            expect(() => { form.Body.abc_IFramed.Visible = true }).toThrow(new Error("setVisible not implemented."));
        });
        it('kbsearch (Knowledge base search) control type', () => {
            var attributes = new xrmMock.ItemCollectionMock([
                new xrmMock.AttributeMock({
                    name: "abc_kbsearch"
                })
            ]);
            var entity = new xrmMock.EntityMock({
                attributes: attributes
            });
            var data = new xrmMock.DataMock(entity);
            var kbsearch = new xrmMock.KbSearchControlMock({
                name: "abc_kbsearch",
                controlType: "kbsearch",
                label: "KbSearch LABEL",
                visible: true
            });
            var ui = new xrmMock.UiMock({
                controls: new xrmMock.ItemCollectionMock([
                    kbsearch
                ])
            });
            xrmMock.XrmMockGenerator.formContext = new xrmMock.FormContextMock(data, ui);
            var executionContext = xrmMock.XrmMockGenerator.formContext;
            var form = new MySon.FormTest(executionContext);

            expect(() => { form.Body.abc_KbSearch.AddOnPostSearch(null) }).toThrow(new Error("Method not implemented."));
            expect(() => { form.Body.abc_KbSearch.AddOnResultOpened(null) }).toThrow(new Error("Method not implemented."));
            expect(() => { form.Body.abc_KbSearch.AddOnSelection(null) }).toThrow(new Error("Method not implemented."));
            expect(form.Body.abc_KbSearch.ControlType).toBe(OptionSet.FieldControlType.KbSearch);
            expect(() => { form.Body.abc_KbSearch.Disabled }).toThrow(new Error("Method not implemented."));
            expect(form.Body.abc_KbSearch.Label).toBe("KbSearch LABEL");
            expect(form.Body.abc_KbSearch.AttributeName).toBe("abc_kbsearch");
            expect(form.Body.abc_KbSearch.ControlName).toBe("abc_kbsearch");
            expect(form.Body.abc_KbSearch.ControlParent).toBeUndefined();
            expect(() => { form.Body.abc_KbSearch.SearchQuery }).toThrow(new Error("Method not implemented."));
            expect(() => { form.Body.abc_KbSearch.SelectedResults }).toThrow(new Error("Method not implemented."));
            expect(() => { form.Body.abc_KbSearch.TotalResultCount }).toThrow(new Error("Method not implemented."));
            expect(form.Body.abc_KbSearch.Visible).toBeTruthy();
            expect(() => { form.Body.abc_KbSearch.OpenSearchResult(null, null) }).toThrow(new Error("Method not implemented."));
            expect(() => { form.Body.abc_KbSearch.RemoveOnPostSearch(null) }).toThrow(new Error("Method not implemented."));
            expect(() => { form.Body.abc_KbSearch.RemoveOnResultOpened(null) }).toThrow(new Error("Method not implemented."));
            expect(() => { form.Body.abc_KbSearch.RemoveOnSelection(null) }).toThrow(new Error("Method not implemented."));
            expect(() => { form.Body.abc_KbSearch.Focus() }).toThrow(new Error("Method not implemented."));
            form.Body.abc_KbSearch.Label = "KbSearch LABEL NEW";
            expect(form.Body.abc_KbSearch.Label).toBe("KbSearch LABEL NEW");
            expect(() => { form.Body.abc_KbSearch.SearchQuery = "SEARCH QUERY" }).toThrow(new Error("Method not implemented."));
            expect(() => { form.Body.abc_KbSearch.Visible = true }).toThrow(new Error("Method not implemented."));
        });
        it('lookup control type', () => {
            var lookup = xrmMock.XrmMockGenerator.Control.createLookup(new xrmMock.LookupControlMock({
                name: "abc_lookup",
                attribute: new xrmMock.LookupAttributeMock({
                    name: "abc_lookup",
                    isPartyList: true,
                    value: [new xrmMock.LookupValueMock("id", "abc_test2", "name")]
                }),
                views: [
                    {
                        entityName: "abc_test2",
                        fetchXml: "<fetchxml/>",
                        layoutXml: "<layoutxml/>",
                        viewDisplayName: "Lookup Test2",
                        viewId: "DefaultViewId",
                        isDefault: true
                    },
                    {
                        entityName: "abc_test2",
                        fetchXml: "<fetchxml2/>",
                        layoutXml: "<layoutxml2/>",
                        viewDisplayName: "Lookup Test2 2",
                        viewId: "DefaultViewId2",
                        isDefault: false
                    }
                ],
                disabled: false,
                label: "LOOKUP LABEL",
                visible: true
            }));
            var executionContext = xrmMock.XrmMockGenerator.formContext;
            var form = new MySon.FormTest(executionContext);

            expect(lookup.filters.length).toBe(0);
            var abc_LookupAddPreSearch = () => {
                var filter = `
<filter type="and">
    <condition attribute="abc_name" operator="eq" value="ABC" />
</filter>
`;
                var form = new MySon.FormTest(executionContext);
                form.Body.abc_Lookup.AddCustomFilter(filter, "abc_test");
            }
            form.Body.abc_Lookup.AddPreSearch(abc_LookupAddPreSearch);
            abc_LookupAddPreSearch();
            expect(lookup.filters.length).toBe(1);
            expect(lookup.views.length).toBe(2);
            form.Body.abc_Lookup.AddCustomView("viewid", "enttiyName", "viewDisplayName", "fetchXml", "layoutXml", false);
            expect(lookup.views.length).toBe(3);
            expect(() => { form.Body.abc_Lookup.AddNotification(null) }).toThrow(new Error("Method not implemented."));
            expect(() => { form.Body.abc_Lookup.AddOnLookupTagClick(null); }).toThrow(new Error("addOnLookupTagClick not implemented"))
            expect(() => { form.Body.abc_Lookup.ClearNotification("uniqueId") }).toThrow(new Error("clear notification not implemented"));
            expect(form.Body.abc_Lookup.Attribute).toBeDefined();
            expect(form.Body.abc_Lookup.ControlType).toBe(OptionSet.FieldControlType.Lookup);
            expect(form.Body.abc_Lookup.DefaultView).toBe("DefaultViewId");
            expect(form.Body.abc_Lookup.Disabled).toBeFalsy();
            expect(() => { form.Body.abc_Lookup.EntityTypes }).toThrow(new Error("Method not implemented."));
            expect(form.Body.abc_Lookup.Label).toBe("LOOKUP LABEL");
            expect(form.Body.abc_Lookup.ControlName).toBe("abc_lookup");
            expect(form.Body.abc_Lookup.ControlParent).toBeUndefined();
            expect(form.Body.abc_Lookup.Visible).toBeTruthy();
            expect(() => { form.Body.abc_Lookup.RemoveOnLookupTagClick(null); }).toThrow(new Error("removeOnLookupTagClick not implemented"))
            expect(() => { form.Body.abc_Lookup.RemovePreSearch(abc_LookupAddPreSearch) }).toThrow(new Error("remove presearch not implemented"));
            form.Body.abc_Lookup.DefaultView = "DefaultViewId2";
            expect(form.Body.abc_Lookup.DefaultView).toBe("DefaultViewId2");
            form.Body.abc_Lookup.Disabled = true;
            expect(form.Body.abc_Lookup.Disabled).toBeTruthy();
            expect(() => { form.Body.abc_Lookup.EntityTypes = ["account"] }).toThrow(new Error("Method not implemented."));
            expect(form.Body.abc_Lookup.Focus()).toBeUndefined();
            form.Body.abc_Lookup.Label = "LOOKUP LABEL NEW";
            expect(form.Body.abc_Lookup.Label).toBe("LOOKUP LABEL NEW");
            expect(() => { form.Body.abc_Lookup.SetNotification("ABC", "ABC") }).toThrow(new Error("set notification not implemented"));
            form.Body.abc_Lookup.Visible = false;
            expect(form.Body.abc_Lookup.Visible).toBeFalsy();
        });
        it('multiselectoptionset and optionset control types', () => {
            var optionSet = xrmMock.XrmMockGenerator.Control.createOptionSet({
                name: "abc_optionsetcode",
                disabled: true,
                label: "OPTIONSET LABEL",
                visible: true,
                attribute: new xrmMock.OptionSetAttributeMock({
                    name: "abc_optionsetcode",
                    options: [
                        { text: "Value 1", value: 100000000 },
                        { text: "Value 2", value: 100000001 },
                        { text: "Value 3", value: 100000002 },
                        { text: "Value 4", value: 100000003 },
                        { text: "Value 5", value: 100000004 },
                        { text: "Value 6", value: 100000005 }
                    ]
                }),
                options: [
                    { text: "Value 1", value: 100000000 },
                    { text: "Value 2", value: 100000001 },
                    { text: "Value 3", value: 100000002 },
                    { text: "Value 4", value: 100000003 },
                    { text: "Value 5", value: 100000004 },
                    { text: "Value 6", value: 100000005 }
                ]
            });
            var executionContext = xrmMock.XrmMockGenerator.formContext;
            var form = new MySon.FormTest(executionContext);

            expect(() => { form.Body.abc_OptionSetCode.AddNotification(null) }).toThrow(new Error("Method not implemented."));
            expect(form.Body.abc_OptionSetCode.Options.length).toBe(6);
            expect(form.Body.abc_OptionSetCode.AddOption("Value 7", 100000006, 6)).toBeUndefined();
            expect(form.Body.abc_OptionSetCode.ControlOptions.length).toBe(7);
            expect(() => { form.Body.abc_OptionSetCode.ClearNotification("uniqueId") }).toThrow(new Error("clear notification not implemented"));
            expect(form.Body.abc_OptionSetCode.ClearOptions()).toBeUndefined();
            expect(form.Body.abc_OptionSetCode.ControlOptions.length).toBe(0);
            expect(form.Body.abc_OptionSetCode.Attribute).toBeDefined();
            expect(form.Body.abc_OptionSetCode.ControlType).toBe(OptionSet.FieldControlType.OptionSet);
            expect(form.Body.abc_OptionSetCode.Disabled).toBeTruthy();
            expect(form.Body.abc_OptionSetCode.Label).toBe("OPTIONSET LABEL");
            expect(form.Body.abc_OptionSetCode.ControlName).toBe("abc_optionsetcode");
            expect(form.Body.abc_OptionSetCode.ControlParent).toBeUndefined();
            expect(form.Body.abc_OptionSetCode.Visible).toBeTruthy();
            form.Body.abc_OptionSetCode.AddOption("A", 1, 0);
            form.Body.abc_OptionSetCode.AddOption("B", 2, 0);
            form.Body.abc_OptionSetCode.AddOption("C", 3, 0);
            expect(form.Body.abc_OptionSetCode.ControlOptions.length).toBe(3);
            expect(form.Body.abc_OptionSetCode.RemoveOption(1));
            expect(form.Body.abc_OptionSetCode.ControlOptions.length).toBe(2);
            form.Body.abc_OptionSetCode.Disabled = false;
            expect(form.Body.abc_OptionSetCode.Disabled).toBeFalsy();
            expect(form.Body.abc_OptionSetCode.Focus()).toBeUndefined();
            form.Body.abc_OptionSetCode.Label = "OPTIONSET LABEL NEW";
            expect(form.Body.abc_OptionSetCode.Label).toBe("OPTIONSET LABEL NEW");
            expect(() => { form.Body.abc_OptionSetCode.SetNotification("ABC", "ABC") }).toThrow(new Error("set notification not implemented"));
            form.Body.abc_OptionSetCode.Visible = false;
            expect(form.Body.abc_OptionSetCode.Visible).toBeFalsy();
        });
        it('quickform control type', () => {
            var attributes = new xrmMock.ItemCollectionMock([
                new xrmMock.AttributeMock({
                    name: "quickform"
                })
            ]);
            var entity = new xrmMock.EntityMock({
                attributes: attributes
            });
            var data = new xrmMock.DataMock(entity);
            var quickform = new xrmMock.QuickFormControlMock({
                name: "QuickForm",
                controlType: "quickform",
                label: "QUICK FORM LABEL",
                visible: true
            });
            var ui = new xrmMock.UiMock({
                quickForms: new xrmMock.ItemCollectionMock([quickform])
            });
            xrmMock.XrmMockGenerator.formContext = new xrmMock.FormContextMock(data, ui);
            var executionContext = xrmMock.XrmMockGenerator.formContext;
            var form = new MySon.FormTest(executionContext);

            expect(() => { form.QuickForm.QuickForm.Controls() }).toThrow(new Error("Method not implemented."));
            expect(form.QuickForm.QuickForm.ControlType).toBe(OptionSet.FieldControlType.QuickForm);
            expect(() => { form.QuickForm.QuickForm.Disabled }).toThrow(new Error("Method not implemented."));
            expect(form.QuickForm.QuickForm.Label).toBe("QUICK FORM LABEL");
            expect(form.QuickForm.QuickForm.ControlName).toBe("QuickForm");
            expect(form.QuickForm.QuickForm.ControlParent).toBeUndefined();
            expect(form.QuickForm.QuickForm.Visible).toBeTruthy();
            expect(() => { form.QuickForm.QuickForm.IsLoaded() }).toThrow(new Error("Method not implemented."));
            expect(() => { form.QuickForm.QuickForm.Refresh() }).toThrow(new Error("Method not implemented."));
            expect(() => { form.QuickForm.QuickForm.Disabled = true }).toThrow(new Error("Method not implemented."));
            expect(() => { form.QuickForm.QuickForm.Focus() }).toThrow(new Error("Method not implemented."));
            form.QuickForm.QuickForm.Label = "QUICK FORM LABEL NEW";
            expect(form.QuickForm.QuickForm.Label).toBe("QUICK FORM LABEL NEW");
            expect(() => { form.QuickForm.QuickForm.Visible = false }).toThrow(new Error("Method not implemented."));
        });
        it('subgrid control type', () => {
            var attributes = new xrmMock.ItemCollectionMock([
                new xrmMock.AttributeMock({
                    name: "Contacts"
                })
            ]);
            var entity = new xrmMock.EntityMock({
                attributes: attributes
            });
            var data = new xrmMock.DataMock(entity);

            var grid = new xrmMock.GridControlMock({
                name: "Contacts",
                controlType: "subgrid",
                label: "CONTACTS",
                visible: true,
                entityName: "contact",
                contextType: XrmEnum.GridControlContext.FormContextRelated
            });

            var viewSelector = new xrmMock.ViewSelectorMock(true);
            viewSelector.setCurrentView(new xrmMock.LookupValueMock("GUID-CONTACTS-I-FOLLOW", "1039", "Contacts I Follow"));
            grid.viewSelector = viewSelector;

            var relationship = new xrmMock.RelationshipMock({
                name: "name",
                attributeName: "attributeName",
                navigationPropertyName: "navigationPropertyName",
                relationshipType: XrmEnum.RelationshipType.OneToMany,
                roleType: XrmEnum.RoleType.AssociationEntity
            });
            grid.relationship = relationship;

            var row1Entity = new xrmMock.EntityMock({
                id: "ROW1-GUID",
                primaryValue: "ROW1-VALUE",
                entityName: "contact",
                attributes: new xrmMock.ItemCollectionMock([
                    new xrmMock.StringAttributeMock({ name: "abc_col1", value: "ROW1-COL1", requiredLevel: "recommended", controls: new xrmMock.ItemCollectionMock([new xrmMock.StringControlMock({ attribute: null, name: 'abc_col1', disabled: true })]) }),
                    new xrmMock.StringAttributeMock({ name: "abc_col2", value: "ROW1-COL2" }),
                    new xrmMock.StringAttributeMock({ name: "abc_col3", value: "ROW1-COL3" }),
                ])
            });
            var row1 = new xrmMock.GridRowMock(new xrmMock.DataMock(row1Entity), new xrmMock.GridRowDataMock(null));
            var row2 = new xrmMock.GridRowMock(new xrmMock.DataMock(null), new xrmMock.GridRowDataMock(null));
            var rows = new xrmMock.ItemCollectionMock([row1, row2]);
            var selectedRows = new xrmMock.ItemCollectionMock([row1]);
            grid.grid = new xrmMock.GridMock(rows, selectedRows);

            var ui = new xrmMock.UiMock({
                controls: new xrmMock.ItemCollectionMock([grid])
            });
            xrmMock.XrmMockGenerator.formContext = new xrmMock.FormContextMock(data, ui);
            var executionContext = xrmMock.XrmMockGenerator.formContext;

            var form = new MySon.FormTest(executionContext);
            var ContactsAddOnLoad = function (executionContext) { }
            expect(grid.onLoadHandlers.length).toBe(0);
            form.Grid.Contacts.AddOnLoad(ContactsAddOnLoad);
            expect(grid.onLoadHandlers.length).toBe(1);
            expect(form.Grid.Contacts.EntityName).toBe("contact");
            expect(() => { form.Grid.Contacts.FetchXml }).toThrow(new Error("getFetchXml not implemented."));
            expect(() => { form.Grid.Contacts.GridType }).toThrow(new Error("getGridType not implemented."));
            expect(form.Grid.Contacts.Relationship).toBeDefined();
            expect(form.Grid.Contacts.Relationship.attributeName).toBe("attributeName");
            expect(form.Grid.Contacts.Relationship.name).toBe("name");
            expect(form.Grid.Contacts.Relationship.navigationPropertyName).toBe("navigationPropertyName");
            expect(form.Grid.Contacts.Relationship.relationshipType).toBe(XrmEnum.RelationshipType.OneToMany);
            expect(form.Grid.Contacts.Relationship.roleType).toBe(XrmEnum.RoleType.AssociationEntity);
            expect(() => { form.Grid.Contacts.Url(0); }).toThrow(new Error("getUrl not implemented."));
            expect(form.Grid.Contacts.ViewSelector.CurrentView.entityType).toBe("1039");
            expect(form.Grid.Contacts.ViewSelector.CurrentView.id).toBe("GUID-CONTACTS-I-FOLLOW");
            expect(form.Grid.Contacts.ViewSelector.CurrentView.name).toBe("Contacts I Follow");
            var newCurrentView = {
                entityType: "1039",
                id: "GUID-NEW",
                name: "NAME-NEW"
            };
            form.Grid.Contacts.ViewSelector.CurrentView = newCurrentView;
            expect(form.Grid.Contacts.ViewSelector.CurrentView.entityType).toBe("1039");
            expect(form.Grid.Contacts.ViewSelector.CurrentView.id).toBe("GUID-NEW");
            expect(form.Grid.Contacts.ViewSelector.CurrentView.name).toBe("NAME-NEW");
            expect(form.Grid.Contacts.ViewSelector.Visible).toBeTruthy();
            expect(() => { form.Grid.Contacts.Refresh(); }).toThrow(new Error("Method not implemented."));
            expect(() => { form.Grid.Contacts.RefreshRibbon(); }).toThrow(new Error("Method not implemented."));
            expect(() => { form.Grid.Contacts.OpenRelatedGrid(); }).toThrow(new Error("openRelatedGrid not implemented."));
            form.Grid.Contacts.RemoveOnLoad(ContactsAddOnLoad);
            expect(grid.onLoadHandlers.length).toBe(0);
            expect(form.Grid.Contacts.Rows.getLength()).toBe(2);
            var row0 = form.Grid.Contacts.Rows.get(0);
            expect(row0.EntityId).toBe("ROW1-GUID")
            expect(row0.EntityName).toBe("contact");
            expect(row0.PrimaryAttributeValue).toBe("ROW1-VALUE");
            expect(row0.EntityReference.id).toBe("ROW1-GUID");
            expect(row0.EntityReference.entityType).toBe("contact");
            expect(row0.EntityReference.name).toBe("ROW1-VALUE");
            expect(row0.Columns).toBeDefined();
            expect(row0.Columns.getLength()).toBe(3);
            var row0col0 = row0.Columns.get("abc_col1");
            expect(row0col0).toBeDefined();
            expect(row0col0.Value).toBe("ROW1-COL1");
            row0col0.Value = "ROW1-COL1-NEW";
            expect(row0col0.Value).toBe("ROW1-COL1-NEW");
            expect(row0col0.Name).toBe("abc_col1");
            expect(row0col0.RequiredLevel).toBe(OptionSet.FieldRequiredLevel.Recommended);
            row0col0.RequiredLevel = OptionSet.FieldRequiredLevel.Required;
            expect(row0col0.RequiredLevel).toBe(OptionSet.FieldRequiredLevel.Required);
            expect(row0col0.Disabled).toBeTruthy();
            row0col0.Disabled = false;
            expect(row0col0.Disabled).toBeFalsy();
            expect(row0col0.Label).toBe("abc_col1");
            expect(() => { row0col0.SetNotification(null, null) }).toThrow(new Error("set notification not implemented"));
            expect(() => { row0col0.ClearNotification(null) }).toThrow(new Error("clear notification not implemented"));
            form.Grid.Contacts.Rows.forEach(function (row, index) {
                expect(row).toBeDefined();
                row.Columns.forEach(function (column, index) {
                    expect(column).toBeDefined();
                });
            });
            var rowNotExist = form.Grid.Contacts.Rows.get(4);
            expect(rowNotExist).toBeDefined();
            //expect(rowNotExist.EntityId).toBe("{00000000-0000-0000-0000-000000000000}");
            var columnNotExist = row0.Columns.get("col_not_exisit");
            expect(columnNotExist).toBeDefined();
            //expect(columnNotExist.Name).toBe("");
            //expect(columnNotExist.Value).toBe("");
            expect(form.Grid.Contacts.TotalRecordCount).toBe(2);
            expect(form.Grid.Contacts.SelectedRows.getLength()).toBe(1);
            expect(form.Grid.Contacts.SelectedRows.get(0)).toBeDefined();
            form.Grid.Contacts.SelectedRows.forEach(function (row, index) {
                expect(row).toBeDefined();
            });
        });
        it('timelinewall control type', () => {
            var attributes = new xrmMock.ItemCollectionMock([
                new xrmMock.AttributeMock({
                    name: "abc_timelinewall"
                })
            ]);
            var entity = new xrmMock.EntityMock({
                attributes: attributes
            });
            var data = new xrmMock.DataMock(entity);
            var timelineWall = new xrmMock.TimelineWallMock({
                name: "abc_timelinewall",
                controlType: "timelinewall",
                label: "TIMELINE WALL LABEL",
                visible: true
            });
            var ui = new xrmMock.UiMock({
                controls: new xrmMock.ItemCollectionMock([timelineWall])
            });
            xrmMock.XrmMockGenerator.formContext = new xrmMock.FormContextMock(data, ui);
            var executionContext = xrmMock.XrmMockGenerator.formContext;
            var form = new MySon.FormTest(executionContext);

            expect(form.Body.abc_TimelineWall.ControlType).toBe(OptionSet.FieldControlType.TimelineWall);
            expect(() => { form.Body.abc_TimelineWall.Disabled }).toThrow(new Error("Method not implemented."));
            expect(form.Body.abc_TimelineWall.Label).toBe("TIMELINE WALL LABEL");
            expect(form.Body.abc_TimelineWall.AttributeName).toBe("abc_timelinewall");
            expect(form.Body.abc_TimelineWall.ControlName).toBe("abc_timelinewall");
            expect(form.Body.abc_TimelineWall.ControlParent).toBeUndefined();
            expect(form.Body.abc_TimelineWall.Visible).toBeTruthy();
            expect(() => { form.Body.abc_TimelineWall.Refresh() }).toThrow(new Error("Not implemented."));
            expect(() => { form.Body.abc_TimelineWall.Disabled = true }).toThrow(new Error("Method not implemented."));
            expect(() => { form.Body.abc_TimelineWall.Disabled = true }).toThrow(new Error("Method not implemented."));
            expect(() => { form.Body.abc_TimelineWall.Focus() }).toThrow(new Error("Method not implemented."));
            form.Body.abc_TimelineWall.Label = "TIMELINE WALL LABEL NEW";
            expect(form.Body.abc_TimelineWall.Label).toBe("TIMELINE WALL LABEL NEW");
            expect(() => { form.Body.abc_TimelineWall.Visible = true }).toThrow(new Error("Method not implemented."));
        });
        it('timer control type', () => {
            var attributes = new xrmMock.ItemCollectionMock([
                new xrmMock.AttributeMock({
                    name: "abc_timer"
                })
            ]);
            var entity = new xrmMock.EntityMock({
                attributes: attributes
            });
            var data = new xrmMock.DataMock(entity);
            var timer = new xrmMock.TimerControlMock({
                name: "abc_timer",
                controlType: "timercontrol",
                label: "TIMMER LABEL",
                visible: true
            });
            var ui = new xrmMock.UiMock({
                controls: new xrmMock.ItemCollectionMock([timer])
            });
            xrmMock.XrmMockGenerator.formContext = new xrmMock.FormContextMock(data, ui);
            var executionContext = xrmMock.XrmMockGenerator.formContext;
            var form = new MySon.FormTest(executionContext);
            expect(form.Body.abc_Timer.ControlType).toBe(OptionSet.FieldControlType.TimerControl);
            expect(() => { form.Body.abc_Timer.Disabled }).toThrow(new Error("Method not implemented."));
            expect(form.Body.abc_Timer.Label).toBe("TIMMER LABEL");
            expect(form.Body.abc_Timer.AttributeName).toBe("abc_timer");
            expect(form.Body.abc_Timer.ControlName).toBe("abc_timer");
            expect(form.Body.abc_Timer.ControlParent).toBeUndefined();
            expect(() => { form.Body.abc_Timer.State }).toThrow(new Error("Method not implemented."));
            expect(form.Body.abc_Timer.Visible).toBeTruthy();
            expect(() => { form.Body.abc_Timer.Refresh() }).toThrow(new Error("Not implemented."));
            expect(() => { form.Body.abc_Timer.Disabled = true }).toThrow(new Error("Method not implemented."));
            expect(() => { form.Body.abc_Timer.Focus() }).toThrow(new Error("Method not implemented."));
            form.Body.abc_Timer.Label = "TIMMER LABEL NEW";
            expect(form.Body.abc_Timer.Label).toBe("TIMMER LABEL NEW");
            expect(() => { form.Body.abc_Timer.Visible = false }).toThrow(new Error("Method not implemented."));
        });
        it('webresource control type', () => {
            expect(true).toBeTruthy();
        });
        it('date control type', () => {
            xrmMock.XrmMockGenerator.Attribute.createDate("abc_date", new Date());
            xrmMock.XrmMockGenerator.Attribute.createDate("abc_datetime", new Date());

            var executionContext = xrmMock.XrmMockGenerator.formContext;
            var form = new MySon.FormTest(executionContext);
            expect(form.Body.abc_Date.ControlName).toBe("abc_date");
            expect(form.Body.abc_DateTime.ControlName).toBe("abc_datetime");
            form.Body.abc_DateTime.ShowTime = true;
            expect(form.Body.abc_DateTime.ShowTime).toBeTruthy();
            form.Body.abc_DateTime.ShowTime = false;
            expect(form.Body.abc_DateTime.ShowTime).toBeFalsy();
        });
    });
    describe('Form', () => {
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
            var form = new MySon.FormTest(executionContext);
            expect(() => { form.DataXml }).toThrow(new Error("getDataXml not implemented"));
            expect(form.EntityName).toBe("abc_test");
            expect(form.EntityId).toBe("GUID");
            expect(form.PrimaryAttributeValue).toBe("VALUE");
            var formDataAddOnLoad = function () { };
            expect(data.loadEventHandlers.length).toBe(0);
            form.DataAddOnLoad(formDataAddOnLoad);
            expect(() => { form.PostSave(null) }).toThrow(new Error("Method not implemented."));
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
            expect(() => { form.FormNavigate("form1") }).toThrow(new Error("Form navigation not implemented."));
            expect(() => { form.FormSetVisible("form1", true) }).toThrow(new Error("setVisible not implemented."));
            expect(() => { form.FormIsVisible("form1") }).toThrow(new Error("getVisible not implemented."));
            expect(form.FormId).toBe("form1");
            expect(form.FormLabel).toBe("FORM1");
        });
    });
    describe('', () => {
        beforeEach(function () {
            var XrmMockGenerator = xrmMock.XrmMockGenerator.initialise();
            XrmMockGenerator.Panel = new xrmMock.PanelMock();
            XrmMockGenerator.Encoding = new xrmMock.EncodingMock();
            XrmMockGenerator.Device = new xrmMock.DeviceMock();
            XrmMockGenerator.Navigation = new xrmMock.NavigationStaticMock();
            XrmMockGenerator.App = new xrmMock.AppMock();
        });
        it('Tab', () => {
            var tab1Section1 = xrmMock.XrmMockGenerator.Section.createSection("Tab1Section1", "LABEL-TAB1-SECTION1", true, null, null);
            var tab1Section2 = xrmMock.XrmMockGenerator.Section.createSection("Tab1Section2", "LABEL-TAB1-SECTION2", false, null, null);
            var tab1 = xrmMock.XrmMockGenerator.Tab.createTab("Tab1", "LABEL-TAB1", true, "expanded", null, new xrmMock.ItemCollectionMock([tab1Section1, tab1Section2]));
            var addTabStateChange = function (executionContext) { }
            var executionContext = xrmMock.XrmMockGenerator.formContext;
            var form = new MySon.FormTest(executionContext);
            expect(tab1.tabStateChangeHandlers.length).toBe(0);
            form.Body.Tab.Tab1.AddTabStateChange(addTabStateChange);
            expect(tab1.tabStateChangeHandlers.length).toBe(1);
            expect(form.Body.Tab.Tab1.DisplayState).toBe(OptionSet.TabDisplayState.Expanded);
            form.Body.Tab.Tab1.DisplayState = OptionSet.TabDisplayState.Collapsed;
            expect(form.Body.Tab.Tab1.DisplayState).toBe(OptionSet.TabDisplayState.Collapsed);
            expect(form.Body.Tab.Tab1.Focus()).toBeUndefined();
            expect(form.Body.Tab.Tab1.Label).toBe("LABEL-TAB1");
            form.Body.Tab.Tab1.Label = "LABEL-TAB1-NEW";
            expect(form.Body.Tab.Tab1.Label).toBe("LABEL-TAB1-NEW");
            expect(form.Body.Tab.Tab1.Name).toBe("Tab1");
            form.Body.Tab.Tab1.RemoveTabStateChange(addTabStateChange);
            expect(tab1.tabStateChangeHandlers.length).toBe(0);
            expect(form.Body.Tab.Tab1.Visible).toBeTruthy();
            form.Body.Tab.Tab1.Visible = false;
            expect(form.Body.Tab.Tab1.Visible).toBeFalsy();
            expect(form.Body.Tab.Tab1.Section.Tab1Section1.Label).toBe("LABEL-TAB1-SECTION1");
            form.Body.Tab.Tab1.Section.Tab1Section1.Label = "LABEL-TAB1-SECTION1-NEW";
            expect(form.Body.Tab.Tab1.Section.Tab1Section1.Label).toBe("LABEL-TAB1-SECTION1-NEW");
            expect(form.Body.Tab.Tab1.Section.Tab1Section1.Name).toBe("Tab1Section1");
            expect(form.Body.Tab.Tab1.Section.Tab1Section1.Visible).toBeTruthy();
            form.Body.Tab.Tab1.Section.Tab1Section1.Visible = false;
            expect(form.Body.Tab.Tab1.Section.Tab1Section1.Visible).toBeFalsy();

            expect(form.Body.Tab.Tab1.Section.Tab1Section1.Parent).toBeDefined();
            expect(form.Body.Tab.Tab1.Parent).toBeDefined();
        });
        it('Tab/Section removed', () => {
            var tab2Section1 = xrmMock.XrmMockGenerator.Section.createSection("Tab2Section1", "LABEL-TAB1-SECTION1", true, null, null);
            var tab2Section2 = xrmMock.XrmMockGenerator.Section.createSection("Tab2Section2", "LABEL-TAB1-SECTION2", false, null, null);
            var tab2 = xrmMock.XrmMockGenerator.Tab.createTab("Tab3", "LABEL-TAB2", true, "expanded", null, new xrmMock.ItemCollectionMock([tab2Section1, tab2Section2]));
            var executionContext = xrmMock.XrmMockGenerator.formContext;
            var form = new MySon.FormTest(executionContext);
            expect(true).toBeTruthy();
        });
    });
    describe('Navigation', () => {
        beforeEach(function () {
            var XrmMockGenerator = xrmMock.XrmMockGenerator.initialise();
            XrmMockGenerator.Panel = new xrmMock.PanelMock();
            XrmMockGenerator.Encoding = new xrmMock.EncodingMock();
            XrmMockGenerator.Device = new xrmMock.DeviceMock();
            XrmMockGenerator.Navigation = new xrmMock.NavigationStaticMock();
            XrmMockGenerator.App = new xrmMock.AppMock();
        });
        it('Navigation', () => {
            var standard = new xrmMock.UiStandardElementMock(new xrmMock.UiLabelElementMock("NAV-LABBEL"), new xrmMock.UiCanGetVisibleElementMock(true));
            var focus = new xrmMock.UiFocusableMock(true);
            var navigation = new xrmMock.NavigationMock(new xrmMock.ItemCollectionMock([
                new xrmMock.NavigationItemMock("nav01", standard, focus)
            ]));
            var attributes = new xrmMock.ItemCollectionMock([
                new xrmMock.AttributeMock({
                    name: "abc_dummy"
                })
            ]);
            var entity = new xrmMock.EntityMock({
                attributes: attributes
            });
            var data = new xrmMock.DataMock(entity);
            var ui = new xrmMock.UiMock({
                navigation: navigation
            });
            xrmMock.XrmMockGenerator.formContext = new xrmMock.FormContextMock(data, ui);
            var executionContext = xrmMock.XrmMockGenerator.formContext;
            var form = new MySon.FormTest(executionContext);
            expect(form.Navigation.nav01.Id).toBe("nav01");
            expect(form.Navigation.nav01.Label).toBe("NAV-LABBEL");
            form.Navigation.nav01.Label = "NAV-LABBEL-NEW";
            expect(form.Navigation.nav01.Label).toBe("NAV-LABBEL-NEW");
            expect(form.Navigation.nav01.Visible).toBeTruthy();
            form.Navigation.nav01.Visible = false;
            expect(form.Navigation.nav01.Visible).toBeFalsy();
            expect(form.Navigation.nav01.Focus()).toBeUndefined();
        });
    });
    describe('Process', () => {
        beforeEach(function () {
            var XrmMockGenerator = xrmMock.XrmMockGenerator.initialise();
            XrmMockGenerator.Panel = new xrmMock.PanelMock();
            XrmMockGenerator.Encoding = new xrmMock.EncodingMock();
            XrmMockGenerator.Device = new xrmMock.DeviceMock();
            XrmMockGenerator.Navigation = new xrmMock.NavigationStaticMock();
            XrmMockGenerator.App = new xrmMock.AppMock();
        });
        it('Process', () => {
            var stage1 = new xrmMock.StageMock("stage1", "Start", XrmEnum.StageStatus.Active, XrmEnum.StageCategory.Identify, [new xrmMock.StepMock("Stage1Step1", "abc_all", true), new xrmMock.StepMock("Stage1Step2", "abc_all2", true)]);
            var stage2 = new xrmMock.StageMock("stage2", "Finish", XrmEnum.StageStatus.Active, XrmEnum.StageCategory.Identify, [new xrmMock.StepMock("Stage2Step1", "abc_all", true)]);
            var process1Control = new xrmMock.ProcessControlMock("expanded", new xrmMock.UiCanGetVisibleElementMock(true), new xrmMock.UiCanSetVisibleElementMock());
            var process1 = new xrmMock.ProcessMock({ id: "Process_1", name: "PROCESS 1", rendered: true, stages: new xrmMock.ItemCollectionMock([stage1, stage2]) });
            var process = new xrmMock.ProcessManagerMock([process1]);
            var ui = new xrmMock.UiMock({
                process: process1Control
            });
            xrmMock.XrmMockGenerator.initialise({ process: process, ui: ui });
            var executionContext = xrmMock.XrmMockGenerator.formContext;
            var form = new MySon.FormTest(executionContext);

            expect(() => { form.Process.AddOnPreProcessStatusChange(null) }).toThrow(new Error("Method not implemented."));
            expect(() => { form.Process.AddOnPreStageChange(null) }).toThrow(new Error("Method not implemented."));
            expect(() => { form.Process.RemoveOnPreProcessStatusChange(null) }).toThrow(new Error("Method not implemented."));
            expect(() => { form.Process.AddOnProcessStatusChange(null) }).toThrow(new Error("add on process status change not implemented."));
            expect(() => { form.Process.RemoveOnProcessStatusChange(null) }).toThrow(new Error("remove on process status change not implemented."));
            expect(() => { form.Process.AddOnStageChange(null) }).toThrow(new Error("add on stage change not implemented"));
            expect(() => { form.Process.RemoveOnStageChange(null) }).toThrow(new Error("remove on stage change not implemented"));
            expect(() => { form.Process.RemoveOnPreStageChange(null) }).toThrow(new Error("Method not implemented."));
            expect(() => { form.Process.AddOnStageSelected(null) }).toThrow(new Error("add on stage selected not implemented"));
            expect(() => { form.Process.RemoveOnStageSelected(null) }).toThrow(new Error("remove on stage selected not implemented"));
            form.Process.EnabledProcesses(function (process) {
                expect(process.length).toBe(1);
            });
            expect(() => { form.Process.MoveNext(null) }).toThrow(new Error("move next not implemented"));
            expect(() => { form.Process.MovePrevious(null) }).toThrow(new Error("move previous not implemented"));
            expect(() => { form.Process.ProcessInstances(null) }).toThrow(new Error("get process instances not implemented."));
            expect(form.Process.SetActiveStage("stage1", null)).toBeUndefined();
            expect(() => { form.Process.SetActiveProcessInstance(null, null) }).toThrow(new Error("set active process instance not implemented."));
            expect(form.Process.SetActiveProcess(null, null)).toBeUndefined();
            expect(() => { form.Process.Reflow(null, null, null) }).toThrow(new Error("Not implemented."));
            expect(form.Process.ActiveProcess.Id).toBe("Process_1");
            expect(form.Process.ActiveProcess.Name).toBe("PROCESS 1");
            expect(form.Process.ActiveProcess.IsRendered).toBeTruthy();
            expect(form.Process.ActiveProcess.Stages.getLength()).toBe(2);
            var s1 = form.Process.ActiveProcess.Stages.get(0);
            form.Process.ActiveProcess.Stages.forEach(function (stage, index) {
                expect(stage).toBeDefined();
            });
            expect(() => { s1.AllowCreateNew(function () { return true; }) }).toThrow(new Error("getNavigationBehavior not implemented"));
            expect(s1.Category).toBe(OptionSet.ProcessCategory.Identify);
            expect(() => { s1.EntityName }).toThrow(new Error("get entity name not implemented"));
            expect(s1.Id).toBe("stage1");
            expect(s1.Name).toBe("Start");
            expect(s1.Status).toBe("active");
            expect(s1.Steps.length).toBe(2);
            var ss1 = s1.Steps[0];
            expect(ss1.Attribute).toBe("abc_all");
            expect(ss1.Name).toBe("Stage1Step1");
            expect(ss1.Required).toBeTruthy();
            expect(() => { ss1.Progress }).toThrow(new Error("getProgress not implemented"));
            expect(() => { ss1.SetProgress(null, null) }).toThrow(new Error("setProgress not implemented"));
            expect(() => { form.Process.ProcessInstances(function (processes) { ; }) }).toThrow(new Error("get process instances not implemented."));
            expect(() => { form.Process.SelectedStage }).toThrow(new Error("get selected not implemented"));
            var activeStage = form.Process.ActiveStage;
            expect(activeStage.Name).toBe("Start");
            expect(form.Process.InstanceId).toBe("Process_1");
            expect(form.Process.InstanceName).toBe("PROCESS 1");
            expect(() => { form.Process.Status }).toThrow(new Error("get status not implemented."));
            expect(() => { form.Process.Status = OptionSet.ProcessStatus.Finished }).toThrow(new Error("set status not implemented."));
            expect(form.Process.DisplayState).toBe(OptionSet.ProcessDisplayState.Expanded);
            form.Process.DisplayState = OptionSet.ProcessDisplayState.Collapsed;
            expect(form.Process.DisplayState).toBe(OptionSet.ProcessDisplayState.Collapsed);
            expect(form.Process.Visible).toBeTruthy();
            expect(() => { form.Process.Visible = false; }).toThrow(new Error("Method not implemented."));
            expect(() => { form.Process.ActivePath.get(0) }).toThrow(new Error("get active path not implemented"));
        });
    });
    describe('Utility', () => {
        beforeEach(function () {
            var XrmMockGenerator = xrmMock.XrmMockGenerator.initialise();
            XrmMockGenerator.Panel = new xrmMock.PanelMock();
            XrmMockGenerator.Encoding = new xrmMock.EncodingMock();
            XrmMockGenerator.Device = new xrmMock.DeviceMock();
            XrmMockGenerator.Navigation = new xrmMock.NavigationStaticMock();
            XrmMockGenerator.App = new xrmMock.AppMock();
        });
        it('Utility', () => {
            var context = new xrmMock.ContextMock({
                clientContext: new xrmMock.ClientContextMock("Web", "Online"),
                clientUrl: "https://clienturl.fake",
                userId: "{00000000-0000-0000-0000-000000000000}",
                userName: "DEVKIT",
                userLcid: 1033,
                userRoles: ["{00000001-0000-0000-0000-000000000000}", "{00000002-0000-0000-0000-000000000000}"],
                version: "10.0.0.0",
                orgUniqueName: "OrgUniqueName",
                currentTheme: "Office12Blue",
                isAutoSaveEnabled: true,
                orgLcid: 1033,
                timeZoneOffset: 7,
            });
            context.userSettings = new xrmMock.UserSettingsMock({
                isGuidedHelpEnabled: true,
                isHighContrastEnabled: false,
                isRTL: false,
                userId: "DEVKIT-USERID",
                userName: "DEVKIT-USERNAME",
                defaultDashboardId: "DEFAULT-DASHBOARD-ID",
                languageId: 1066,
                securityRolePrivileges: ["GUID1", "GUID2"],
                securityRoles: ["NAME1", "NAME2", "NAME3"],
                transactionCurrencyId: "VND-GUID",
                dateFormattingInfo: {
                    AmDesignator: "AM",
                    Calendar: {
                        MinSupportedDateTime: new Date(),
                        MaxSupportedDateTime: new Date(),
                        AlgorithmType: 1,
                        CalendarType: 1,
                        Eras: [ 1 ],
                        TwoDigitYearMax: 2029,
                        IsReadOnly: false
                    },
                    DateSeparator: "/",
                    FirstDayOfWeek: 0,
                    CalendarWeekRule: 0,
                    FullDateTimePattern: "dddd, MMMM d, yyyy h:mm:ss tt",
                    LongDatePattern: "dddd, MMMM d, yyyy",
                    LongTimePattern: "h:mm:ss tt",
                    MonthDayPattern: "MMMM dd",
                    PmDesignator: "PM",
                    ShortDatePattern: "M/d/yyyy",
                    ShortTimePattern: "h:mm tt",
                    SortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                    TimeSeparator: ":",
                    UniversalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
                    YearMonthPattern: "MMMM yyyy",
                    AbbreviatedDayNames: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
                    ShortestDayNames: [ "Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                    DayNames: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
                    AbbreviatedMonthNames: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "" ],
                    MonthNames: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "" ],
                    AbbreviatedMonthGenitiveNames: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "" ],
                    MonthGenitiveNames: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "" ],
                },
                roles: new xrmMock.ItemCollectionMock([new xrmMock.LookupValueMock("GUID1", "role", "ROLE-1"), new xrmMock.LookupValueMock("GUID2", "role", "ROLE-2")]),
                transactionCurrency: new xrmMock.LookupValueMock("VND-GUID", "transactioncurrency", "VND")
            });

            context.organizationSettings = new xrmMock.OrganizationSettingsMock({
                baseCurrencyId: "USD-GUID",
                baseCurrency: new xrmMock.LookupValueMock("USD-GUID", "transactioncurrencty", "USD"),
                defaultCountryCode: "VN",
                languageId: 1033,
                organizationId: "OrgGuid",
                uniqueName: "OrgUniqueName",
                isAutoSaveEnabled: true,
                useSkypeProtocol: true,
                attributes: {
                    "abc": "1"
                }
            });

            xrmMock.XrmMockGenerator.context = context;
            xrmMock.XrmMockGenerator.eventContext = new xrmMock.EventContextMock({ formContext: xrmMock.XrmMockGenerator.formContext, context: xrmMock.XrmMockGenerator.context });

            var executionContext = xrmMock.XrmMockGenerator.eventContext;
            var form = new MySon.FormTest(executionContext, "web-resource-language");

            //var getUtility = Xrm.Utility;
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

            //getGlobalContext.client;
            expect(form.Utility.Client.ClientName).toBe(OptionSet.ClientName.Web);
            expect(form.Utility.Client.ClientState).toBe(OptionSet.ClientState.Online);
            expect(() => { form.Utility.Client.FormFactor }).toThrow(new Error("Method not implemented."));
            expect(() => { form.Utility.Client.IsOffline }).toThrow(new Error("Method not implemented."));

            //getGlobalContext.organizationSettings;
            expect(form.Utility.OrganizationSettings.Attributes).toBeDefined();
            expect(form.Utility.OrganizationSettings.BaseCurrencyId).toBe("USD-GUID");
            expect(form.Utility.OrganizationSettings.BaseCurrency.id).toBe("USD-GUID");
            expect(form.Utility.OrganizationSettings.BaseCurrency.name).toBe("USD");
            expect(form.Utility.OrganizationSettings.BaseCurrency.entityType).toBe("transactioncurrencty");
            expect(form.Utility.OrganizationSettings.DefaultCountryCode).toBe("VN");
            expect(form.Utility.OrganizationSettings.IsAutoSaveEnabled).toBeTruthy();
            expect(form.Utility.OrganizationSettings.LanguageId).toBe(1033);
            expect(form.Utility.OrganizationSettings.OrganizationId).toBe("OrgGuid");
            expect(form.Utility.OrganizationSettings.UniqueName).toBe("OrgUniqueName");
            expect(form.Utility.OrganizationSettings.UseSkypeProtocol).toBeTruthy();

            //getGlobalContext.userSettings
            expect(form.Utility.UserSettings.DateFormattingInfo.AmDesignator).toBe("AM");
            expect(form.Utility.UserSettings.DateFormattingInfo.Calendar).toBeDefined();
            expect(form.Utility.UserSettings.DateFormattingInfo.Calendar.MinSupportedDateTime.toString()).toBeDefined();
            expect(form.Utility.UserSettings.DateFormattingInfo.Calendar.MaxSupportedDateTime.toString()).toBeDefined();
            expect(form.Utility.UserSettings.DateFormattingInfo.Calendar.AlgorithmType).toBe(1);
            expect(form.Utility.UserSettings.DateFormattingInfo.Calendar.CalendarType).toBe(1);
            expect(form.Utility.UserSettings.DateFormattingInfo.Calendar.Eras.length).toBeGreaterThan(0);
            expect(form.Utility.UserSettings.DateFormattingInfo.Calendar.TwoDigitYearMax).toBe(2029);
            expect(form.Utility.UserSettings.DateFormattingInfo.Calendar.IsReadOnly).toBeFalsy();
            expect(form.Utility.UserSettings.DateFormattingInfo.DateSeparator).toBe("/");
            expect(form.Utility.UserSettings.DateFormattingInfo.FirstDayOfWeek).toBe(0);
            expect(form.Utility.UserSettings.DateFormattingInfo.CalendarWeekRule).toBe(0);
            expect(form.Utility.UserSettings.DateFormattingInfo.FullDateTimePattern).toBe("dddd, MMMM d, yyyy h:mm:ss tt");
            expect(form.Utility.UserSettings.DateFormattingInfo.LongDatePattern).toBe("dddd, MMMM d, yyyy");
            expect(form.Utility.UserSettings.DateFormattingInfo.LongTimePattern).toBe("h:mm:ss tt");
            expect(form.Utility.UserSettings.DateFormattingInfo.MonthDayPattern).toBe("MMMM dd");
            expect(form.Utility.UserSettings.DateFormattingInfo.PmDesignator).toBe("PM");
            expect(form.Utility.UserSettings.DateFormattingInfo.ShortDatePattern).toBe("M/d/yyyy");
            expect(form.Utility.UserSettings.DateFormattingInfo.ShortTimePattern).toBe("h:mm tt");
            expect(form.Utility.UserSettings.DateFormattingInfo.SortableDateTimePattern).toBe("yyyy'-'MM'-'dd'T'HH':'mm':'ss");
            expect(form.Utility.UserSettings.DateFormattingInfo.TimeSeparator).toBe(":");
            expect(form.Utility.UserSettings.DateFormattingInfo.UniversalSortableDateTimePattern).toBe("yyyy'-'MM'-'dd HH':'mm':'ss'Z'");
            expect(form.Utility.UserSettings.DateFormattingInfo.YearMonthPattern).toBe("MMMM yyyy");
            expect(form.Utility.UserSettings.DateFormattingInfo.AbbreviatedDayNames.length).toBeGreaterThan(0);
            expect(form.Utility.UserSettings.DateFormattingInfo.ShortestDayNames.length).toBeGreaterThan(0);
            expect(form.Utility.UserSettings.DateFormattingInfo.DayNames.length).toBeGreaterThan(0);
            expect(form.Utility.UserSettings.DateFormattingInfo.AbbreviatedMonthNames.length).toBeGreaterThan(0);
            expect(form.Utility.UserSettings.DateFormattingInfo.MonthNames.length).toBeGreaterThan(0);
            expect(form.Utility.UserSettings.DateFormattingInfo.AbbreviatedMonthGenitiveNames.length).toBeGreaterThan(0);
            expect(form.Utility.UserSettings.DateFormattingInfo.MonthGenitiveNames.length).toBeGreaterThan(0);
            expect(form.Utility.UserSettings.DateFormattingInfo.DayNames.length).toBeGreaterThan(0);
            expect(form.Utility.UserSettings.DefaultDashboardId).toBe("DEFAULT-DASHBOARD-ID");
            expect(form.Utility.UserSettings.IsGuidedHelpEnabled).toBeTruthy();
            expect(form.Utility.UserSettings.IsHighContrastEnabled).toBeFalsy();
            expect(form.Utility.UserSettings.IsRTL).toBeFalsy();
            expect(form.Utility.UserSettings.LanguageId).toBe(1066);
            expect(form.Utility.UserSettings.Roles.getLength()).toBe(2);
            expect(form.Utility.UserSettings.Roles.get(0).id).toBe("GUID1");
            expect(form.Utility.UserSettings.Roles.get(0).name).toBe("ROLE-1");
            expect(form.Utility.UserSettings.Roles.get(0).entityType).toBe("role");
            expect(form.Utility.UserSettings.SecurityRolePrivileges.length).toBe(2);
            expect(form.Utility.UserSettings.SecurityRoles.length).toBe(3);
            expect(form.Utility.UserSettings.TransactionCurrency.id).toBe("VND-GUID");
            expect(form.Utility.UserSettings.TransactionCurrency.entityType).toBe("transactioncurrency");
            expect(form.Utility.UserSettings.TransactionCurrency.name).toBe("VND");
            expect(form.Utility.UserSettings.TransactionCurrencyId).toBe("VND-GUID");
            expect(form.Utility.UserSettings.UserId).toBe("DEVKIT-USERID");
            expect(form.Utility.UserSettings.UserName).toBe("DEVKIT-USERNAME")
            expect(() => { form.Utility.UserSettings.TimeZoneOffsetMinutes }).toThrow(new Error("Not implemented"));

            expect(() => { form.Utility.AdvancedConfigSetting(OptionSet.AdvancedConfigSetting.MaxChildIncidentNumber); }).toThrow(new Error("Method not implemented."));
            expect(form.Utility.ClientUrl).toBe("https://clienturl.fake");
            expect(() => { form.Utility.CurrentAppName(null, null); }).toThrow(new Error("Method not implemented."));
            expect(() => { form.Utility.CurrentAppProperties(null, null) }).toThrow(new Error("Method not implemented."));
            expect(() => { form.Utility.CurrentAppUrl; }).toThrow(new Error("Method not implemented."));
            expect(form.Utility.Version).toBe("10.0.0.0");
            expect(() => { form.Utility.WebResourceUrl(null) }).toThrow(new Error("Method not implemented."));
            expect(() => { form.Utility.IsOnPremises; }).toThrow(new Error("Method not implemented."));
            expect(form.Utility.PrependOrgName("abc-")).toBe("abc-OrgUniqueName");

            //var getPanel = Xrm.Panel;
            expect(() => { form.Utility.LoadPanel("url", "title"); }).toThrow(new Error("Not implemented."));

            //var getEncoding = Xrm.Encoding;
            expect(() => { form.Utility.XmlAttributeEncode("code"); }).toThrow(new Error("Not implemented"));
            expect(() => { form.Utility.XmlEncode("code"); }).toThrow(new Error("Not implemented"));
            expect(() => { form.Utility.HtmlAttributeEncode("code"); }).toThrow(new Error("Not implemented"));
            expect(() => { form.Utility.HtmlDecode("code"); }).toThrow(new Error("Not implemented"));
            expect(() => { form.Utility.HtmlEncode("code"); }).toThrow(new Error("Not implemented"));

            //var getDevice = Xrm.Device;
            expect(() => { form.Utility.CaptureAudio(null, null) }).toThrow(new Error("Not implemented."));
            expect(() => { form.Utility.CaptureImage(null, null, null) }).toThrow(new Error("Not implemented."));
            expect(() => { form.Utility.CaptureVideo(null, null) }).toThrow(new Error("Not implemented."));
            expect(() => { form.Utility.BarcodeValue(null, null) }).toThrow(new Error("Not implemented."));
            expect(() => { form.Utility.CurrentPosition(null, null) }).toThrow(new Error("Not implemented."));
            expect(() => { form.Utility.PickFile(null, null, null) }).toThrow(new Error("Not implemented."));

            //var getNavigation = Xrm.Navigation;
            expect(() => { form.Utility.OpenAlertDialog(null, null, null, null); }).toThrow(new Error("Navigation methods not implemented. Consider stubbing calls using a tool such as Sinon.JS"));
            expect(() => { form.Utility.OpenConfirmDialog(null, null, null, null); }).toThrow(new Error("Navigation methods not implemented. Consider stubbing calls using a tool such as Sinon.JS"));
            expect(() => { form.Utility.OpenErrorDialog(null, null, null); }).toThrow(new Error("Navigation methods not implemented. Consider stubbing calls using a tool such as Sinon.JS"));
            expect(() => { form.Utility.OpenFile(null, null); }).toThrow(new Error("Navigation methods not implemented. Consider stubbing calls using a tool such as Sinon.JS"));
            expect(() => { form.Utility.OpenForm(null, null, null, null); }).toThrow(new Error("Navigation methods not implemented. Consider stubbing calls using a tool such as Sinon.JS"));
            expect(() => { form.Utility.OpenUrl(null, null); }).toThrow(new Error("Navigation methods not implemented. Consider stubbing calls using a tool such as Sinon.JS"));
            expect(() => { form.Utility.OpenWebResource(null, null, null); }).toThrow(new Error("Navigation methods not implemented. Consider stubbing calls using a tool such as Sinon.JS"));
            expect(() => { form.Utility.NavigateTo(null, null, null, null) }).toThrow(new Error("Navigation methods not implemented. Consider stubbing calls using a tool such as Sinon.JS"));

            //var getApp = Xrm.App;
            expect(() => { form.Utility.AddGlobalNotification(null, null, null) }).toThrow(new Error("Method not implemented."));
            expect(() => { form.Utility.ClearGlobalNotification(null, null, null) }).toThrow(new Error("Method not implemented."));

            //Execution Context
            expect(() => { form.ExecutionContext.Depth }).toThrow(new Error("not implemented"));
            expect(() => { form.ExecutionContext.EventArgs }).toThrow(new Error("not implemented"));
            expect(() => { form.ExecutionContext.EventSource }).toThrow(new Error("not implemented"));
            expect(form.ExecutionContext.FormContext).toBeDefined();
            expect(() => { form.ExecutionContext.GetSharedVariable("A") }).toThrow(new Error("not implemented"));
            expect(() => { form.ExecutionContext.SetSharedVariable("A", "B") }).toThrow(new Error("not implemented"));
            expect(() => { form.ExecutionContext.SaveMode }).toThrow(new Error("not implemented"));
            expect(() => { form.ExecutionContext.IsDefaultPrevented() }).toThrow(new Error("not implemented"));
            expect(() => { form.ExecutionContext.SetPreventDefault() }).toThrow(new Error("not implemented"));

            expect(() => { form.ExecutionContext.EntityReference }).toThrow(new Error("not implemented"));
            expect(() => { form.ExecutionContext.IsSaveSuccess }).toThrow(new Error("not implemented"));
            expect(() => { form.ExecutionContext.SaveErrorInfo }).toThrow(new Error("not implemented"));

        });
    });
    describe('Header & Footer', () => {
        beforeEach(function () {
            var XrmMockGenerator = xrmMock.XrmMockGenerator.initialise();
            XrmMockGenerator.Panel = new xrmMock.PanelMock();
            XrmMockGenerator.Encoding = new xrmMock.EncodingMock();
            XrmMockGenerator.Device = new xrmMock.DeviceMock();
            XrmMockGenerator.Navigation = new xrmMock.NavigationStaticMock();
            XrmMockGenerator.App = new xrmMock.AppMock();
        });
        it('Header', () => {
            xrmMock.XrmMockGenerator.Attribute.createString({
                attributeType: "string",
                format: "text",
                isDirty: true,
                name: "abc_all",
                requiredLevel: "required",
                value: "ABC ALL VALUE",
                maxLength: 100,
                submitMode: "always"
            },
                [{
                    controlType: "standard",
                    disabled: true,
                    label: "ABC ALL LABEL",
                    name: "abc_all",
                    visible: true
                }, {
                    label: "HEADER ABC ALL LABEL",
                    name: "header_abc_all",
                }]
            );
            var executionContext = xrmMock.XrmMockGenerator.formContext;
            var form = new MySon.FormTest(executionContext);

            expect(form.Body.abc_All.Label).toBe("ABC ALL LABEL");
            expect(form.Body.abc_All.ControlName).toBe("abc_all");
            expect(form.Header.abc_All.Label).toBe("HEADER ABC ALL LABEL");
            expect(form.Header.abc_All.ControlName).toBe("header_abc_all");

            //form.Header.BodyVisible
            //form.Header.CommandBarVisible
            //form.Header.TabNavigatorVisible
        });

        it('Footer', () => {
            xrmMock.XrmMockGenerator.Attribute.createString({
                attributeType: "string",
                format: "text",
                isDirty: true,
                name: "abc_all",
                requiredLevel: "required",
                value: "ABC ALL VALUE",
                maxLength: 100,
                submitMode: "always"
            },
                [{
                    controlType: "standard",
                    disabled: true,
                    label: "ABC ALL LABEL",
                    name: "abc_all",
                    visible: true
                }, {
                    label: "FOOTER ABC ALL LABEL",
                    name: "footer_abc_all",
                }]
            );
            var executionContext = xrmMock.XrmMockGenerator.formContext;
            var form = new MySon.FormTest(executionContext);

            expect(form.Body.abc_All.Label).toBe("ABC ALL LABEL");
            expect(form.Body.abc_All.ControlName).toBe("abc_all");
            expect(form.Footer.abc_All.Label).toBe("FOOTER ABC ALL LABEL");
            expect(form.Footer.abc_All.ControlName).toBe("footer_abc_all");

            //form.Footer.BodyVisible
        });
    });
});