//@ts-check
define(['xrm-mock', 'sinon'], function () {
    var xrmMock = require('xrm-mock');
    //var sinon = require('sinon');
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
                name: "name",
                requiredLevel: "required",
                value: "NAME VALUE",
                maxLength: 100,
                submitMode: "always"
            },
                {
                    controlType: "standard",
                    disabled: true,
                    label: "NAME LABEL",
                    name: "name",
                    visible: true
                }
            );
            var executionContext = xrmMock.XrmMockGenerator.formContext;
            var form = new LuckyStar.FormAccount(executionContext);

            var onChangeData = "";
            var nameAddOnChange = function (executionContent) { onChangeData = "ON-CHANGED"; }
            form.Body.Name.AddOnChange(nameAddOnChange);
            form.Body.Name.FireOnChange();
            expect(onChangeData).toBe("ON-CHANGED");
            expect(form.Body.Name.AttributeType).toBe(OptionSet.FieldAttributeType.String);
            expect(form.Body.Name.Format).toBe(OptionSet.FieldFormat.Text);
            expect(form.Body.Name.IsDirty).toBeTruthy();
            expect(form.Body.Name.AttributeName).toBe("name");
            expect(() => { form.Body.Name.AttributeParent }).toThrow(new Error("getParent not implemented"));
            expect(form.Body.Name.RequiredLevel).toBe(OptionSet.FieldRequiredLevel.Required);
            expect(form.Body.Name.SubmitMode).toBe(OptionSet.FieldSubmitMode.Always);
            expect(() => { form.Body.Name.UserPrivilege }).toThrow(new Error("getUserPrivilege not implemented"));
            expect(form.Body.Name.Value).toBe("NAME VALUE");
            expect(() => { form.Body.Name.IsValid }).toThrow(new Error("isValid not implemented"));
            onChangeData = "REMOVE";
            form.Body.Name.RemoveOnChange(nameAddOnChange);
            form.Body.Name.FireOnChange();
            expect(onChangeData).toBe("REMOVE");
            form.Body.Name.RequiredLevel = OptionSet.FieldRequiredLevel.Recommended;
            expect(form.Body.Name.RequiredLevel).toBe(OptionSet.FieldRequiredLevel.Recommended);
            form.Body.Name.SubmitMode = OptionSet.FieldSubmitMode.Never;
            expect(form.Body.Name.SubmitMode).toBe(OptionSet.FieldSubmitMode.Never);
            form.Body.Name.Value = null;
            expect(form.Body.Name.Value).toBeNull();
            form.Body.Name.Value = "NAME VALUE NEW";
            expect(form.Body.Name.Value).toBe("NAME VALUE NEW");
            expect(() => { form.Body.Name.SetIsValid(null, null); }).toThrow(new Error("setIsValid not implemented"));
        });
        it('Boolean attribute type', () => {
            xrmMock.XrmMockGenerator.Attribute.createBoolean({
                name: "creditonhold",
                initialValue: true
            });
            var executionContext = xrmMock.XrmMockGenerator.formContext;
            var form = new LuckyStar.FormAccount(executionContext);

            expect(form.Body.CreditOnHold.InitialValue).toBeTruthy();
        });
        it('Lookup attribute type', () => {
            xrmMock.XrmMockGenerator.Control.createLookup(new xrmMock.LookupControlMock({
                name: "parentaccountid",
                attribute: new xrmMock.LookupAttributeMock({
                    name: "parentaccountid",
                    isPartyList: true
                })
            }));
            var executionContext = xrmMock.XrmMockGenerator.formContext;
            var form = new LuckyStar.FormAccount(executionContext);

            expect(form.Body.ParentAccountId.IsPartyList).toBeTruthy();
        });
        it('MultiSelectOptionSet and OptionSet attribute types', () => {
            xrmMock.XrmMockGenerator.Attribute.createOptionSet({
                name: "industrycode",
                initialValue: OptionSet.Account.IndustryCode.Accounting,
                options: [
                    { text: "Accounting", value: OptionSet.Account.IndustryCode.Accounting },
                    { text: "Agriculture and Non petrol Natural Resource Extraction", value: OptionSet.Account.IndustryCode.Agriculture_and_Non_petrol_Natural_Resource_Extraction },
                    { text: "Broadcasting Printing and Publishing", value: OptionSet.Account.IndustryCode.Broadcasting_Printing_and_Publishing },
                    { text: "Brokers", value: OptionSet.Account.IndustryCode.Brokers }
                ],
                value: OptionSet.Account.IndustryCode.Agriculture_and_Non_petrol_Natural_Resource_Extraction
            },
                {
                    name: "industrycode",
                    options: [
                        { text: "Accounting", value: OptionSet.Account.IndustryCode.Accounting },
                        { text: "Agriculture and Non petrol Natural Resource Extraction", value: OptionSet.Account.IndustryCode.Agriculture_and_Non_petrol_Natural_Resource_Extraction },
                        { text: "Broadcasting Printing and Publishing", value: OptionSet.Account.IndustryCode.Broadcasting_Printing_and_Publishing },
                        { text: "Brokers", value: OptionSet.Account.IndustryCode.Brokers }
                    ]
                }
            );
            var executionContext = xrmMock.XrmMockGenerator.formContext;
            var form = new LuckyStar.FormAccount(executionContext);

            expect(form.Body.IndustryCode.InitialValue).toBe(OptionSet.Account.IndustryCode.Accounting);
            var option = form.Body.IndustryCode.Option("Brokers");
            expect(option.text).toBe("Brokers");
            expect(option.value).toBe(OptionSet.Account.IndustryCode.Brokers);
            expect(form.Body.IndustryCode.Options.length).toBe(4);
            expect(form.Body.IndustryCode.Options[0].text).toBe("Accounting");
            expect(form.Body.IndustryCode.Options[0].value).toBe(OptionSet.Account.IndustryCode.Accounting);
            var selectedOption = form.Body.IndustryCode.SelectedOption;
            expect(selectedOption.text).toBe("Agriculture and Non petrol Natural Resource Extraction");
            expect(selectedOption.value).toBe(OptionSet.Account.IndustryCode.Agriculture_and_Non_petrol_Natural_Resource_Extraction);
            expect(form.Body.IndustryCode.Text).toBe("Agriculture and Non petrol Natural Resource Extraction");
        });
        it('Number attribute type (decimal, double, integer, money)', () => {
            xrmMock.XrmMockGenerator.Attribute.createNumber({
                name: "creditlimit",
                max: 123.78,
                min: 12.84,
                precision: 2,
            });
            var executionContext = xrmMock.XrmMockGenerator.formContext;
            var form = new LuckyStar.FormAccount(executionContext);

            expect(form.Body.CreditLimit.Max).toBe(123.78);
            expect(form.Body.CreditLimit.Min).toBe(12.84);
            expect(form.Body.CreditLimit.Precision).toBe(2);
            form.Body.CreditLimit.Precision = 1;
            expect(form.Body.CreditLimit.Precision).toBe(1);
        });
        it('String attribute type', () => {
            xrmMock.XrmMockGenerator.Attribute.createString({
                attributeType: "string",
                name: "description",
                maxLength: 2000
            });
            var executionContext = xrmMock.XrmMockGenerator.formContext;
            var form = new LuckyStar.FormAccount(executionContext);

            expect(form.Body.Description.MaxLength).toBe(2000);
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
                name: "name",
                requiredLevel: "required",
                value: "NAME VALUE",
                maxLength: 100,
                submitMode: "always"
            },
                [
                    {
                        controlType: "standard",
                        disabled: true,
                        label: "NAME LABEL",
                        name: "name",
                        visible: true
                    },
                    {
                        controlType: "standard",
                        disabled: true,
                        label: "NAME LABEL 1",
                        name: "name_1",
                        visible: false
                    }
                ]
            );
            var executionContext = xrmMock.XrmMockGenerator.formContext;
            var form = new LuckyStar.FormAccount(executionContext);

            expect(() => { form.Body.Name.AddNotification(null) }).toThrow(new Error("Method not implemented."));
            expect(() => { form.Body.Name.ClearNotification("uniqueId") }).toThrow(new Error("clear notification not implemented"));
            expect(form.Body.Name.Attribute).toBeDefined();
            expect(form.Body.Name.ControlType).toBe(OptionSet.FieldControlType.Standard);
            expect(form.Body.Name.Disabled).toBeTruthy();
            expect(form.Body.Name.Label).toBe("NAME LABEL");
            expect(form.Body.Name.ControlName).toBe("name");
            expect(form.Body.Name_1.ControlName).toBe("name_1");
            expect(form.Body.Name_1.Value).toBe("NAME VALUE");
            expect(form.Body.Name.ControlParent).toBeUndefined();
            expect(form.Body.Name_1.Visible).toBeFalsy(0);
            form.Body.Name.Disabled = false;
            expect(form.Body.Name.Disabled).toBeFalsy();
            expect(form.Body.Name.Focus()).toBeUndefined();
            form.Body.Name.Label = "NAME LABEL NEW";
            expect(form.Body.Name.Label).toBe("NAME LABEL NEW");
            expect(() => { form.Body.Name.SetNotification("ABC", "ABC") }).toThrow(new Error("set notification not implemented"));
            form.Body.Name.Visible = false;
            expect(form.Body.Name.Visible).toBeFalsy();
        });
        it('iframe control type', () => {
            var attributes = new xrmMock.ItemCollectionMock([
                new xrmMock.AttributeMock({
                    name: "IFRAME_google"
                })
            ]);
            var entity = new xrmMock.EntityMock({
                attributes: attributes
            });
            var data = new xrmMock.DataMock(entity);
            var frame = new xrmMock.IframeControlMock({
                name: "IFRAME_google",
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
            var form = new LuckyStar.FormLocation(executionContext);

            expect(() => { form.Body.IFRAME_google.ContentWindow(null, null) }).toThrow(new Error("getContentWindow not implemented."));
            expect(form.Body.IFRAME_google.ControlType).toBe(OptionSet.FieldControlType.Iframe);
            expect(() => { form.Body.IFRAME_google.Disabled }).toThrow(new Error("getDisabled not implemented."));
            expect(() => { form.Body.IFRAME_google.InitialUrl }).toThrow(new Error("getInitialUrl not implemented."));
            expect(form.Body.IFRAME_google.Label).toBe("IFRAME LABEL");
            expect(form.Body.IFRAME_google.ControlName).toBe("IFRAME_google");
            expect(() => { form.Body.IFRAME_google.Object }).toThrow(new Error("getObject not implemented."));
            expect(form.Body.IFRAME_google.ControlParent).toBeUndefined();
            expect(() => { form.Body.IFRAME_google.Src }).toThrow(new Error("getSrc not implemented."));
            expect(form.Body.IFRAME_google.Visible).toBeTruthy();
            expect(() => { form.Body.IFRAME_google.Disabled = true }).toThrow(new Error("setDisabled not implemented."));
            expect(() => { form.Body.IFRAME_google.Focus() }).toThrow(new Error("setFocus not implemented."));
            form.Body.IFRAME_google.Label = "IFRAME LABEL NEW";
            expect(form.Body.IFRAME_google.Label).toBe("IFRAME LABEL NEW");
            expect(() => { form.Body.IFRAME_google.Src = "ABC" }).toThrow(new Error("setSrc not implemented."));
            expect(() => { form.Body.IFRAME_google.Visible = true }).toThrow(new Error("setVisible not implemented."));
        });
        /*
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
            var form = new Tomato.FormTest(executionContext);

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
        */
        it('lookup control type', () => {
            var lookup = xrmMock.XrmMockGenerator.Control.createLookup(new xrmMock.LookupControlMock({
                name: "parentaccountid",
                attribute: new xrmMock.LookupAttributeMock({
                    name: "parentaccountid",
                    isPartyList: true,
                    value: [new xrmMock.LookupValueMock("ParentAccountId", "account", "ParentAccountName")]
                }),
                views: [
                    {
                        entityName: "account",
                        fetchXml: "<fetchxml/>",
                        layoutXml: "<layoutxml/>",
                        viewDisplayName: "Lookup View",
                        viewId: "DefaultViewId",
                        isDefault: true
                    },
                    {
                        entityName: "account",
                        fetchXml: "<fetchxml2/>",
                        layoutXml: "<layoutxml2/>",
                        viewDisplayName: "Lookup View 2",
                        viewId: "DefaultViewId2",
                        isDefault: false
                    }
                ],
                disabled: false,
                label: "LOOKUP LABEL",
                visible: true
            }));
            var executionContext = xrmMock.XrmMockGenerator.formContext;
            var form = new LuckyStar.FormAccount(executionContext);

            expect(lookup.filters.length).toBe(0);
            var parentAccountIdAddPreSearch = () => {
                var filter = `
<filter type="and">
    <condition attribute="accountnumber" operator="eq" value="ABC" />
</filter>
`;
                var form = new LuckyStar.FormAccount(executionContext);
                form.Body.ParentAccountId.AddCustomFilter(filter, "account");
            }
            form.Body.ParentAccountId.AddPreSearch(parentAccountIdAddPreSearch);
            parentAccountIdAddPreSearch();
            expect(lookup.filters.length).toBe(1);
            expect(lookup.views.length).toBe(2);
            form.Body.ParentAccountId.AddCustomView("viewid", "enttiyName", "viewDisplayName", "fetchXml", "layoutXml", false);
            expect(lookup.views.length).toBe(3);
            expect(() => { form.Body.ParentAccountId.AddNotification(null) }).toThrow(new Error("Method not implemented."));
            expect(() => { form.Body.ParentAccountId.AddOnLookupTagClick(null); }).toThrow(new Error("addOnLookupTagClick not implemented"))
            expect(() => { form.Body.ParentAccountId.ClearNotification("uniqueId") }).toThrow(new Error("clear notification not implemented"));
            expect(form.Body.ParentAccountId.Attribute).toBeDefined();
            expect(form.Body.ParentAccountId.ControlType).toBe(OptionSet.FieldControlType.Lookup);
            expect(form.Body.ParentAccountId.DefaultView).toBe("DefaultViewId");
            expect(form.Body.ParentAccountId.Disabled).toBeFalsy();
            expect(() => { form.Body.ParentAccountId.EntityTypes }).toThrow(new Error("Method not implemented."));
            expect(form.Body.ParentAccountId.Label).toBe("LOOKUP LABEL");
            expect(form.Body.ParentAccountId.ControlName).toBe("parentaccountid");
            expect(form.Body.ParentAccountId.ControlParent).toBeUndefined();
            expect(form.Body.ParentAccountId.Visible).toBeTruthy();
            expect(() => { form.Body.ParentAccountId.RemoveOnLookupTagClick(null); }).toThrow(new Error("removeOnLookupTagClick not implemented"))
            expect(() => { form.Body.ParentAccountId.RemovePreSearch(parentAccountIdAddPreSearch) }).toThrow(new Error("remove presearch not implemented"));
            form.Body.ParentAccountId.DefaultView = "DefaultViewId2";
            expect(form.Body.ParentAccountId.DefaultView).toBe("DefaultViewId2");
            form.Body.ParentAccountId.Disabled = true;
            expect(form.Body.ParentAccountId.Disabled).toBeTruthy();
            expect(() => { form.Body.ParentAccountId.EntityTypes = ["account"] }).toThrow(new Error("Method not implemented."));
            expect(form.Body.ParentAccountId.Focus()).toBeUndefined();
            form.Body.ParentAccountId.Label = "LOOKUP LABEL NEW";
            expect(form.Body.ParentAccountId.Label).toBe("LOOKUP LABEL NEW");
            expect(() => { form.Body.ParentAccountId.SetNotification("ABC", "ABC") }).toThrow(new Error("set notification not implemented"));
            form.Body.ParentAccountId.Visible = false;
            expect(form.Body.ParentAccountId.Visible).toBeFalsy();
        });
        it('multiselectoptionset and optionset control types', () => {
            var optionSet = xrmMock.XrmMockGenerator.Control.createOptionSet({
                name: "industrycode",
                disabled: true,
                label: "OPTIONSET LABEL",
                visible: true,
                attribute: new xrmMock.OptionSetAttributeMock({
                    name: "industrycode",
                    options: [
                        { text: "Accounting", value: OptionSet.Account.IndustryCode.Accounting },
                        { text: "Agriculture and Non petrol Natural Resource Extraction", value: OptionSet.Account.IndustryCode.Agriculture_and_Non_petrol_Natural_Resource_Extraction },
                        { text: "Broadcasting Printing and Publishing", value: OptionSet.Account.IndustryCode.Broadcasting_Printing_and_Publishing },
                        { text: "Brokers", value: OptionSet.Account.IndustryCode.Brokers }
                    ]
                }),
                options: [
                    { text: "Accounting", value: OptionSet.Account.IndustryCode.Accounting },
                    { text: "Agriculture and Non petrol Natural Resource Extraction", value: OptionSet.Account.IndustryCode.Agriculture_and_Non_petrol_Natural_Resource_Extraction },
                    { text: "Broadcasting Printing and Publishing", value: OptionSet.Account.IndustryCode.Broadcasting_Printing_and_Publishing },
                    { text: "Brokers", value: OptionSet.Account.IndustryCode.Brokers }
                ]
            });
            var executionContext = xrmMock.XrmMockGenerator.formContext;
            var form = new LuckyStar.FormAccount(executionContext);

            expect(() => { form.Body.IndustryCode.AddNotification(null) }).toThrow(new Error("Method not implemented."));
            expect(form.Body.IndustryCode.Options.length).toBe(4);
            expect(form.Body.IndustryCode.AddOption("New Option", 100000000, 5)).toBeUndefined();
            expect(form.Body.IndustryCode.ControlOptions.length).toBe(5);
            expect(() => { form.Body.IndustryCode.ClearNotification("uniqueId") }).toThrow(new Error("clear notification not implemented"));
            expect(form.Body.IndustryCode.ClearOptions()).toBeUndefined();
            expect(form.Body.IndustryCode.ControlOptions.length).toBe(0);
            expect(form.Body.IndustryCode.Attribute).toBeDefined();
            expect(form.Body.IndustryCode.ControlType).toBe(OptionSet.FieldControlType.OptionSet);
            expect(form.Body.IndustryCode.Disabled).toBeTruthy();
            expect(form.Body.IndustryCode.Label).toBe("OPTIONSET LABEL");
            expect(form.Body.IndustryCode.ControlName).toBe("industrycode");
            expect(form.Body.IndustryCode.ControlParent).toBeUndefined();
            expect(form.Body.IndustryCode.Visible).toBeTruthy();
            form.Body.IndustryCode.AddOption("A", 1, 0);
            form.Body.IndustryCode.AddOption("B", 2, 0);
            form.Body.IndustryCode.AddOption("C", 3, 0);
            expect(form.Body.IndustryCode.ControlOptions.length).toBe(3);
            expect(form.Body.IndustryCode.RemoveOption(1));
            expect(form.Body.IndustryCode.ControlOptions.length).toBe(2);
            form.Body.IndustryCode.Disabled = false;
            expect(form.Body.IndustryCode.Disabled).toBeFalsy();
            expect(form.Body.IndustryCode.Focus()).toBeUndefined();
            form.Body.IndustryCode.Label = "OPTIONSET LABEL NEW";
            expect(form.Body.IndustryCode.Label).toBe("OPTIONSET LABEL NEW");
            expect(() => { form.Body.IndustryCode.SetNotification("ABC", "ABC") }).toThrow(new Error("set notification not implemented"));
            form.Body.IndustryCode.Visible = false;
            expect(form.Body.IndustryCode.Visible).toBeFalsy();
        });
        it('quickform control type', () => {
            var attributes = new xrmMock.ItemCollectionMock([
                new xrmMock.AttributeMock({
                    name: "quickViewContact"
                })
            ]);
            var entity = new xrmMock.EntityMock({
                attributes: attributes
            });
            var data = new xrmMock.DataMock(entity);
            var quickform = new xrmMock.QuickFormControlMock({
                name: "quickViewContact",
                controlType: "quickform",
                label: "QUICK FORM LABEL",
                visible: true
            });
            var ui = new xrmMock.UiMock({
                quickForms: new xrmMock.ItemCollectionMock([quickform])
            });
            xrmMock.XrmMockGenerator.formContext = new xrmMock.FormContextMock(data, ui);
            var executionContext = xrmMock.XrmMockGenerator.formContext;
            var form = new LuckyStar.FormLocation(executionContext);

            expect(() => { form.QuickForm.quickViewContact.Controls() }).toThrow(new Error("Method not implemented."));
            expect(form.QuickForm.quickViewContact.ControlType).toBe(OptionSet.FieldControlType.QuickForm);
            expect(() => { form.QuickForm.quickViewContact.Disabled }).toThrow(new Error("Method not implemented."));
            expect(form.QuickForm.quickViewContact.Label).toBe("QUICK FORM LABEL");
            expect(form.QuickForm.quickViewContact.ControlName).toBe("quickViewContact");
            expect(form.QuickForm.quickViewContact.ControlParent).toBeUndefined();
            expect(form.QuickForm.quickViewContact.Visible).toBeTruthy();
            expect(() => { form.QuickForm.quickViewContact.IsLoaded() }).toThrow(new Error("Method not implemented."));
            expect(() => { form.QuickForm.quickViewContact.Refresh() }).toThrow(new Error("Method not implemented."));
            expect(() => { form.QuickForm.quickViewContact.Disabled = true }).toThrow(new Error("Method not implemented."));
            expect(() => { form.QuickForm.quickViewContact.Focus() }).toThrow(new Error("Method not implemented."));
            form.QuickForm.quickViewContact.Label = "QUICK FORM LABEL NEW";
            expect(form.QuickForm.quickViewContact.Label).toBe("QUICK FORM LABEL NEW");
            expect(() => { form.QuickForm.quickViewContact.Visible = false }).toThrow(new Error("Method not implemented."));
        });
        /*
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

            var form = new Tomato.FormTest(executionContext);
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
            var form = new LuckyStar.FormLocation(executionContext);

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
        /*
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
            var form = new Tomato.FormTest(executionContext);
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
        */
    });
    describe('Forms', () => {
        beforeEach(function () {
            var XrmMockGenerator = xrmMock.XrmMockGenerator.initialise();
            XrmMockGenerator.Panel = new xrmMock.PanelMock();
            XrmMockGenerator.Encoding = new xrmMock.EncodingMock();
            XrmMockGenerator.Device = new xrmMock.DeviceMock();
            XrmMockGenerator.Navigation = new xrmMock.NavigationStaticMock();
            //XrmMockGenerator.App = new xrmMock.AppMock();
        });
        it('Form', () => {
            var attributes = new xrmMock.ItemCollectionMock([
                new xrmMock.AttributeMock({
                    name: "name",
                    isDirty: true
                })
            ]);
            var entity = new xrmMock.EntityMock({
                entityName: "account",
                id: "GUID",
                primaryValue: "VALUE",
                attributes: attributes
            });
            var data = new xrmMock.DataMock(entity);
            var frame = new xrmMock.IframeControlMock({
                name: "IFRAME_google",
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
            var form = new LuckyStar.FormAccount(executionContext);

            expect(() => { form.DataXml }).toThrow(new Error("getDataXml not implemented"));
            expect(form.EntityName).toBe("account");
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
            expect(e.entityType).toBe("account");
            expect(form.EntityIsDirty).toBeTruthy();
            expect(() => { form.EntityIsValid }).toThrow(new Error("isValid not implemented."));
            expect(form.SetFormNotification("A", OptionSet.FormNotificationLevel.Info, "B")).toBeDefined();
            expect(form.ClearFormNotification("B")).toBeTruthy();
            expect(() => { form.Close() }).toThrow(new Error("close not implemented"));
            expect(() => { form.RefreshRibbon() }).toThrow(new Error("refreshRibbon not implemented"));
            //expect(() => { form.SetFormEntityName(null); }).toThrow(new Error("setFormEntityName not implemented"));
            expect(form.Controls).toBeDefined();
            expect(form.FormType).toBe(OptionSet.FormType.Update);
            expect(() => { form.ViewPortHeight }).toThrow(new Error("getViewPortHeight not implemented"));
            expect(() => { form.ViewPortWidth }).toThrow(new Error("getViewPortWidth not implemented"));
            //expect(() => { form.UiAddOnLoad(null) }).toThrow(new Error("addOnLoad not implemented"));
            //expect(() => { form.UiRemoveOnLoad(null) }).toThrow(new Error("removeOnLoad not implemented"));
            expect(form.FormNavigate("form1")).toBeUndefined();
            expect(form.FormSetVisible("form1", true)).toBeUndefined();
            expect(form.FormIsVisible("form1")).toBeFalsy();
            expect(form.FormId).toBe("form1");
            expect(form.FormLabel).toBe("FORM1");
        });
    });
    describe('Navigations', () => {
        beforeEach(function () {
            var XrmMockGenerator = xrmMock.XrmMockGenerator.initialise();
            XrmMockGenerator.Panel = new xrmMock.PanelMock();
            XrmMockGenerator.Encoding = new xrmMock.EncodingMock();
            XrmMockGenerator.Device = new xrmMock.DeviceMock();
            XrmMockGenerator.Navigation = new xrmMock.NavigationStaticMock();
            //XrmMockGenerator.App = new xrmMock.AppMock();
        });
        it('Navigation', () => {
            var standard = new xrmMock.UiStandardElementMock(new xrmMock.UiLabelElementMock("NAV-LABBEL"), new xrmMock.UiCanGetVisibleElementMock(true));
            var focus = new xrmMock.UiFocusableMock(true);
            var navigation = new xrmMock.NavigationMock(new xrmMock.ItemCollectionMock([
                new xrmMock.NavigationItemMock("nav_devkit_account_devkit_webapi_Customer", standard, focus)
            ]));
            var attributes = new xrmMock.ItemCollectionMock([
                new xrmMock.AttributeMock({
                    name: "name"
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
            var form = new LuckyStar.FormAccount(executionContext);

            expect(form.Navigation.nav_devkit_account_devkit_webapi_Customer.Id).toBe("nav_devkit_account_devkit_webapi_Customer");
            expect(form.Navigation.nav_devkit_account_devkit_webapi_Customer.Label).toBe("NAV-LABBEL");
            form.Navigation.nav_devkit_account_devkit_webapi_Customer.Label = "NAV-LABBEL-NEW";
            expect(form.Navigation.nav_devkit_account_devkit_webapi_Customer.Label).toBe("NAV-LABBEL-NEW");
            expect(form.Navigation.nav_devkit_account_devkit_webapi_Customer.Visible).toBeTruthy();
            form.Navigation.nav_devkit_account_devkit_webapi_Customer.Visible = false;
            expect(form.Navigation.nav_devkit_account_devkit_webapi_Customer.Visible).toBeFalsy();
            expect(form.Navigation.nav_devkit_account_devkit_webapi_Customer.Focus()).toBeUndefined();
        });
    });
    describe('Processes', () => {
        beforeEach(function () {
            var XrmMockGenerator = xrmMock.XrmMockGenerator.initialise();
            XrmMockGenerator.Panel = new xrmMock.PanelMock();
            XrmMockGenerator.Encoding = new xrmMock.EncodingMock();
            XrmMockGenerator.Device = new xrmMock.DeviceMock();
            XrmMockGenerator.Navigation = new xrmMock.NavigationStaticMock();
            //XrmMockGenerator.App = new xrmMock.AppMock();
        });
        it('Process', () => {
            var stage1 = new xrmMock.StageMock("stage1", "Start", XrmEnum.StageStatus.Active, XrmEnum.StageCategory.Identify, [new xrmMock.StepMock("Stage1Step1", "abc_all", true), new xrmMock.StepMock("Stage1Step2", "abc_all2", true)]);
            var stage2 = new xrmMock.StageMock("stage2", "Finish", XrmEnum.StageStatus.Active, XrmEnum.StageCategory.Identify, [new xrmMock.StepMock("Stage2Step1", "abc_all", true)]);
            var process1Control = new xrmMock.ProcessControlMock("expanded", new xrmMock.UiCanGetVisibleElementMock(true), null);
            var process1 = new xrmMock.ProcessMock({ id: "Process_1", name: "PROCESS 1", rendered: true, stages: new xrmMock.ItemCollectionMock([stage1, stage2]) });
            var process = new xrmMock.ProcessManagerMock([process1]);
            var ui = new xrmMock.UiMock({
                process: process1Control
            });
            xrmMock.XrmMockGenerator.initialise({ process: process, ui: ui });
            var executionContext = xrmMock.XrmMockGenerator.formContext;
            var form = new LuckyStar.FormLocation(executionContext);

            //expect(() => { form.Process.AddOnPreProcessStatusChange(null) }).toThrow(new Error("Method not implemented."));
            //expect(() => { form.Process.RemoveOnPreProcessStatusChange(null) }).toThrow(new Error("Method not implemented."));
            //expect(() => { form.Process.AddOnPreStageChange(null) }).toThrow(new Error("Method not implemented."));
            //expect(() => { form.Process.RemoveOnPreStageChange(null) }).toThrow(new Error("Method not implemented."));
            expect(() => { form.Process.AddOnProcessStatusChange(null) }).toThrow(new Error("add on process status change not implemented."));
            expect(() => { form.Process.RemoveOnProcessStatusChange(null) }).toThrow(new Error("remove on process status change not implemented."));
            expect(() => { form.Process.AddOnStageChange(null) }).toThrow(new Error("add on stage change not implemented"));
            expect(() => { form.Process.RemoveOnStageChange(null) }).toThrow(new Error("remove on stage change not implemented"));
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
            //expect(() => { s1.AllowCreateNew(function () { return true; }) }).toThrow(new Error("getNavigationBehavior not implemented"));
            //expect(s1.Category).toBe(OptionSet.ProcessCategory.Identify);
            expect(() => { s1.EntityName }).toThrow(new Error("get entity name not implemented"));
            expect(s1.Id).toBe("stage1");
            expect(s1.Name).toBe("Start");
            expect(s1.Status).toBe("active");
            expect(s1.Steps.length).toBe(2);
            var ss1 = s1.Steps[0];
            expect(ss1.Attribute).toBe("abc_all");
            expect(ss1.Name).toBe("Stage1Step1");
            expect(ss1.Required).toBeTruthy();
            //expect(() => { ss1.Progress }).toThrow(new Error("getProgress not implemented"));
            //expect(() => { ss1.SetProgress(null, null) }).toThrow(new Error("setProgress not implemented"));
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
            expect(() => { form.Process.ActivePath.get(0) }).toThrow(new Error("get active path not implemented"));
        });
    });
});