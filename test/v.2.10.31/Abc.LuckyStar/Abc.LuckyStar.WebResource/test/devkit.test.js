//@ts-check
define(['xrm-mock', 'sinon'], function () {
    var xrmMock = require('xrm-mock');
    var sinon = require('sinon');
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
            XrmMockGenerator.App = new xrmMock.AppMock();
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
    describe('Navigations', () => {
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
            XrmMockGenerator.App = new xrmMock.AppMock();
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

            expect(() => { form.Process.AddOnPreProcessStatusChange(null) }).toThrow(new Error("Method not implemented."));
            expect(() => { form.Process.RemoveOnPreProcessStatusChange(null) }).toThrow(new Error("Method not implemented."));
            expect(() => { form.Process.AddOnPreStageChange(null) }).toThrow(new Error("Method not implemented."));
            expect(() => { form.Process.RemoveOnPreStageChange(null) }).toThrow(new Error("Method not implemented."));
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
            expect(() => { form.Process.ActivePath.get(0) }).toThrow(new Error("get active path not implemented"));
        });
    });
    describe('Utilities', () => {
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
                //dateFormattingInfo: {
                //    AMDesignator: "AM",
                //    Calendar: {
                //        MinSupportedDateTime: "0001-01-01T00:00:00",
                //        MaxSupportedDateTime: "9999-12-31T23:59:59.9999999",
                //        AlgorithmType: 1,
                //        CalendarType: 1,
                //        Eras: [ 1 ],
                //        TwoDigitYearMax: 2029,
                //        IsReadOnly: false
                //    },
                //    DateSeparator: "/",
                //    FirstDayOfWeek: 0,
                //    CalendarWeekRule: 0,
                //    FullDateTimePattern: "dddd, MMMM d, yyyy h:mm:ss tt",
                //    LongDatePattern: "dddd, MMMM d, yyyy",
                //    LongTimePattern: "h:mm:ss tt",
                //    MonthDayPattern: "MMMM dd",
                //    PMDesignator: "PM",
                //    RFC1123Pattern: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
                //    ShortDatePattern: "M/d/yyyy",
                //    ShortTimePattern: "h:mm tt",
                //    SortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                //    TimeSeparator: ":",
                //    UniversalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
                //    YearMonthPattern: "MMMM yyyy",
                //    AbbreviatedDayNames: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
                //    ShortestDayNames: [ "Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                //    DayNames: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
                //    AbbreviatedMonthNames: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "" ],
                //    MonthNames: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "" ],
                //    IsReadOnly: false,
                //    NativeCalendarName: "Gregorian Calendar",
                //    AbbreviatedMonthGenitiveNames: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "" ],
                //    MonthGenitiveNames: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "" ],
                //    eras: [ 1, "A.D.", null, 0 ]
                //},
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
            var form = new LuckyStar.FormAccount(executionContext, "web-resource-language");

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
            //expect(form.Utility.UserSettings.DateFormattingInfo.AMDesignator).toBe("AM");
            //expect(form.Utility.UserSettings.DateFormattingInfo.Calendar).toBeDefined();
            //expect(form.Utility.UserSettings.DateFormattingInfo.Calendar.MinSupportedDateTime.toString()).toBe("0001-01-01T00:00:00");
            //expect(form.Utility.UserSettings.DateFormattingInfo.Calendar.MaxSupportedDateTime.toString()).toBe("9999-12-31T23:59:59.9999999");
            //expect(form.Utility.UserSettings.DateFormattingInfo.Calendar.AlgorithmType).toBe(1);
            //expect(form.Utility.UserSettings.DateFormattingInfo.Calendar.CalendarType).toBe(1);
            //expect(form.Utility.UserSettings.DateFormattingInfo.Calendar.Eras.length).toBeGreaterThan(0);
            //expect(form.Utility.UserSettings.DateFormattingInfo.Calendar.TwoDigitYearMax).toBe(2029);
            //expect(form.Utility.UserSettings.DateFormattingInfo.Calendar.IsReadOnly).toBeFalsy();
            //expect(form.Utility.UserSettings.DateFormattingInfo.DateSeparator).toBe("/");
            //expect(form.Utility.UserSettings.DateFormattingInfo.FirstDayOfWeek).toBe(0);
            //expect(form.Utility.UserSettings.DateFormattingInfo.CalendarWeekRule).toBe(0);
            //expect(form.Utility.UserSettings.DateFormattingInfo.FullDateTimePattern).toBe("dddd, MMMM d, yyyy h:mm:ss tt");
            //expect(form.Utility.UserSettings.DateFormattingInfo.LongDatePattern).toBe("dddd, MMMM d, yyyy");
            //expect(form.Utility.UserSettings.DateFormattingInfo.LongTimePattern).toBe("h:mm:ss tt");
            //expect(form.Utility.UserSettings.DateFormattingInfo.MonthDayPattern).toBe("MMMM dd");
            //expect(form.Utility.UserSettings.DateFormattingInfo.PMDesignator).toBe("PM");
            //expect(form.Utility.UserSettings.DateFormattingInfo.RFC1123Pattern).toBe("ddd, dd MMM yyyy HH':'mm':'ss 'GMT'");
            //expect(form.Utility.UserSettings.DateFormattingInfo.ShortDatePattern).toBe("M/d/yyyy");
            //expect(form.Utility.UserSettings.DateFormattingInfo.ShortTimePattern).toBe("h:mm tt");
            //expect(form.Utility.UserSettings.DateFormattingInfo.SortableDateTimePattern).toBe("yyyy'-'MM'-'dd'T'HH':'mm':'ss");
            //expect(form.Utility.UserSettings.DateFormattingInfo.TimeSeparator).toBe(":");
            //expect(form.Utility.UserSettings.DateFormattingInfo.UniversalSortableDateTimePattern).toBe("yyyy'-'MM'-'dd HH':'mm':'ss'Z'");
            //expect(form.Utility.UserSettings.DateFormattingInfo.YearMonthPattern).toBe("MMMM yyyy");
            //expect(form.Utility.UserSettings.DateFormattingInfo.AbbreviatedDayNames.length).toBeGreaterThan(0);
            //expect(form.Utility.UserSettings.DateFormattingInfo.ShortestDayNames.length).toBeGreaterThan(0);
            //expect(form.Utility.UserSettings.DateFormattingInfo.DayNames.length).toBeGreaterThan(0);
            //expect(form.Utility.UserSettings.DateFormattingInfo.AbbreviatedMonthNames.length).toBeGreaterThan(0);
            //expect(form.Utility.UserSettings.DateFormattingInfo.MonthNames.length).toBeGreaterThan(0);
            //expect(form.Utility.UserSettings.DateFormattingInfo.AbbreviatedMonthGenitiveNames.length).toBeGreaterThan(0);
            //expect(form.Utility.UserSettings.DateFormattingInfo.MonthGenitiveNames.length).toBeGreaterThan(0);
            //expect(form.Utility.UserSettings.DateFormattingInfo.DayNames.length).toBeGreaterThan(0);
            //expect(form.Utility.UserSettings.DateFormattingInfo.eras.length).toBeGreaterThan(0);
            //expect(form.Utility.UserSettings.DateFormattingInfo.IsReadOnly).toBeFalsy();
            //expect(form.Utility.UserSettings.DateFormattingInfo.NativeCalendarName).toBe("Gregorian Calendar");
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
        });
    });
    describe('Tabs', () => {
        beforeEach(function () {
            var XrmMockGenerator = xrmMock.XrmMockGenerator.initialise();
            XrmMockGenerator.Panel = new xrmMock.PanelMock();
            XrmMockGenerator.Encoding = new xrmMock.EncodingMock();
            XrmMockGenerator.Device = new xrmMock.DeviceMock();
            XrmMockGenerator.Navigation = new xrmMock.NavigationStaticMock();
            //XrmMockGenerator.App = new xrmMock.AppMock();
        });
        it('Tab', () => {
            var tab1Section1 = xrmMock.XrmMockGenerator.Section.createSection("ACCOUNT_INFORMATION", "LABEL-TAB1-SECTION1", true, null, null);
            var tab1Section2 = xrmMock.XrmMockGenerator.Section.createSection("Tab1Section2", "LABEL-TAB1-SECTION2", false, null, null);
            var tab1 = xrmMock.XrmMockGenerator.Tab.createTab("SUMMARY_TAB", "LABEL-TAB1", true, "expanded", null, new xrmMock.ItemCollectionMock([tab1Section1, tab1Section2]));
            var addTabStateChange = function (executionContext) { }
            var executionContext = xrmMock.XrmMockGenerator.formContext;
            var form = new LuckyStar.FormAccount(executionContext);

            expect(tab1.tabStateChangeHandlers.length).toBe(0);
            form.Body.Tab.SUMMARY_TAB.AddTabStateChange(addTabStateChange);
            expect(tab1.tabStateChangeHandlers.length).toBe(1);
            expect(form.Body.Tab.SUMMARY_TAB.DisplayState).toBe(OptionSet.TabDisplayState.Expanded);

            form.Body.Tab.SUMMARY_TAB.DisplayState = OptionSet.TabDisplayState.Collapsed;
            expect(form.Body.Tab.SUMMARY_TAB.DisplayState).toBe(OptionSet.TabDisplayState.Collapsed);
            expect(form.Body.Tab.SUMMARY_TAB.Focus()).toBeUndefined();
            expect(form.Body.Tab.SUMMARY_TAB.Label).toBe("LABEL-TAB1");
            form.Body.Tab.SUMMARY_TAB.Label = "LABEL-TAB1-NEW";
            expect(form.Body.Tab.SUMMARY_TAB.Label).toBe("LABEL-TAB1-NEW");
            expect(form.Body.Tab.SUMMARY_TAB.Name).toBe("SUMMARY_TAB");
            expect(form.Body.Tab.SUMMARY_TAB.Parent).toBeDefined();
            form.Body.Tab.SUMMARY_TAB.RemoveTabStateChange(addTabStateChange);
            expect(tab1.tabStateChangeHandlers.length).toBe(0);
            expect(form.Body.Tab.SUMMARY_TAB.Visible).toBeTruthy();
            form.Body.Tab.SUMMARY_TAB.Visible = false;
            expect(form.Body.Tab.SUMMARY_TAB.Visible).toBeFalsy();
            expect(form.Body.Tab.SUMMARY_TAB.Section.ACCOUNT_INFORMATION.Label).toBe("LABEL-TAB1-SECTION1");
            form.Body.Tab.SUMMARY_TAB.Section.ACCOUNT_INFORMATION.Label = "LABEL-TAB1-SECTION1-NEW";
            expect(form.Body.Tab.SUMMARY_TAB.Section.ACCOUNT_INFORMATION.Label).toBe("LABEL-TAB1-SECTION1-NEW");
            expect(form.Body.Tab.SUMMARY_TAB.Section.ACCOUNT_INFORMATION.Name).toBe("ACCOUNT_INFORMATION");
            expect(form.Body.Tab.SUMMARY_TAB.Section.ACCOUNT_INFORMATION.Parent).toBeDefined();
            expect(form.Body.Tab.SUMMARY_TAB.Section.ACCOUNT_INFORMATION.Visible).toBeTruthy();
            form.Body.Tab.SUMMARY_TAB.Section.ACCOUNT_INFORMATION.Visible = false;
            expect(form.Body.Tab.SUMMARY_TAB.Section.ACCOUNT_INFORMATION.Visible).toBeFalsy();
        });
    });
    describe('WebApi Retreive', () => {
        afterEach(function () {
            sinon.restore()
        });
        it('WebApi Retreive STRING', async () => {
            var entities = [
                {
                    "@odata.etag": "W/\"588561\"",
                    "devkit_singlelineoftexttickersymbol": "APP",
                    "devkit_singlelineoftextphone": "84 0907952232",
                    "devkit_singlelineoftextemail": "a@a.a",
                    "devkit_singlelineoftexturl": "https://google.com",
                    "devkit_singlelineoftexttextarea": "Single\nline\nof\ntext\ntext\narea",
                    "devkit_singlelineoftexttext": "abcd",
                    "devkit_multipleliniesoftext": "multiple\nlines\nof\ntext",
                    "_ownerid_value@OData.Community.Display.V1.FormattedValue": "dev kit",
                    "_ownerid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "ownerid",
                    "_ownerid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "systemuser",
                    "_ownerid_value": "739d2b22-5f57-42f9-9a17-ebad89799e7e",
                    "_devkit_linkwebapiid_value@OData.Community.Display.V1.FormattedValue": "DATETIME",
                    "_devkit_linkwebapiid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "devkit_LinkWebApiId",
                    "_devkit_linkwebapiid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "devkit_webapi",
                    "_devkit_linkwebapiid_value": "f55a0d1e-286b-e911-a997-000d3a802135",
                    "_devkit_customerid_value@OData.Community.Display.V1.FormattedValue": "A. Datum Corporation (sample)",
                    "_devkit_customerid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "devkit_CustomerId_account",
                    "_devkit_customerid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "account",
                    "_devkit_customerid_value": "928d37ec-9e66-e911-a993-000d3a804bc9",
                    "devkit_name": "STRING",
                    "devkit_webapiid": "3c254671-456d-e911-a98d-000d3a80280e"
                }
            ];
            sinon.stub(Xrm.WebApi, 'retrieveMultipleRecords')
                .withArgs("devkit_webapi")
                .returns({ entities });
            var fetchData = {
                devkit_name: "STRING"
            };
            var fetchXml = `<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>
  <entity name='devkit_webapi'>
    <attribute name='devkit_name'/>
    <attribute name='devkit_singlelineoftexturl'/>
    <attribute name='devkit_singlelineoftexttickersymbol'/>
    <attribute name='devkit_singlelineoftexttextarea'/>
    <attribute name='devkit_singlelineoftexttext'/>
    <attribute name='devkit_singlelineoftextphone'/>
    <attribute name='devkit_singlelineoftextemail'/>
    <attribute name='ownerid'/>
    <attribute name='devkit_multipleliniesoftext'/>
    <attribute name='devkit_linkwebapiid'/>
    <attribute name='devkit_customerid'/>
    <attribute name='devkit_webapiid'/>
    <order attribute='devkit_name' descending='false'/>
    <filter type='and'>
      <condition attribute='devkit_name' operator='eq' value='${fetchData.devkit_name}'/>
    </filter>
  </entity>
</fetch>`;
            fetchXml = "?fetchXml=" + encodeURIComponent(fetchXml);
            var res = await Xrm.WebApi.retrieveMultipleRecords("devkit_webapi", fetchXml);

            var webapi = new LuckyStar.devkit_WebApiApi(res.entities[0]);
            expect(res.nextLink).toBeUndefined();

            //single line of text
            expect(webapi.devkit_SingleLineofTextText.Value).toEqual("abcd");
            expect(webapi.devkit_SingleLineofTextEmail.Value).toEqual("a@a.a");
            expect(webapi.devkit_SingleLineofTextPhone.Value).toEqual("84 0907952232");
            expect(webapi.devkit_SingleLineofTextTickerSymbol.Value).toEqual("APP");
            expect(webapi.devkit_SingleLineofTextUrl.Value).toEqual("https://google.com");
            expect(webapi.devkit_SingleLineofTextTextArea.Value).toEqual("Single\nline\nof\ntext\ntext\narea");
            //multiple lilnes of text
            expect(webapi.devkit_MultipleLiniesofText.Value).toEqual("multiple\nlines\nof\ntext");
            //loolup
            expect(webapi.devkit_LinkWebApiId.Value).toEqual("f55a0d1e-286b-e911-a997-000d3a802135");
            expect(webapi.devkit_LinkWebApiId.FormattedValue).toEqual("DATETIME");
            expect(webapi.OwnerId_systemuser.Value).toEqual("739d2b22-5f57-42f9-9a17-ebad89799e7e");
            expect(webapi.OwnerId_systemuser.FormattedValue).toEqual("dev kit");
            expect(webapi.OwnerId_team.Value).toBeNull();
            expect(webapi.OwnerId_team.FormattedValue).toEqual("");
            expect(webapi.devkit_CustomerId_account.Value).toEqual("928d37ec-9e66-e911-a993-000d3a804bc9");
            expect(webapi.devkit_CustomerId_account.FormattedValue).toEqual("A. Datum Corporation (sample)");
            expect(webapi.devkit_CustomerId_contact.Value).toBeNull();
            expect(webapi.devkit_CustomerId_contact.FormattedValue).toEqual("");
            //guid
            expect(webapi.devkit_WebApiId.Value).toEqual("3c254671-456d-e911-a98d-000d3a80280e");
            //others
            expect(webapi["@odata.etag"]).toBe("W/\"588561\"");
            expect(webapi.Entity).toBeDefined();
        });
        it('WebApi Retreive OPTIONSET', async () => {
            var entities = [
                {
                    "@odata.etag": "W/\"585157\"",
                    "devkit_yesandnocalculated@OData.Community.Display.V1.FormattedValue": "Yes",
                    "devkit_yesandnocalculated": true,
                    "devkit_singleoptionsetcodecalculated@OData.Community.Display.V1.FormattedValue": "Crm 4",
                    "devkit_singleoptionsetcodecalculated": 100000000,
                    "statuscode@OData.Community.Display.V1.FormattedValue": "Active",
                    "statuscode": 1,
                    "devkit_singleoptionsetcode@OData.Community.Display.V1.FormattedValue": "Crm 4",
                    "devkit_singleoptionsetcode": 100000000,
                    "devkit_name": "OPTIONSET",
                    "devkit_webapiid": "d7f649ca-d864-e911-a991-000d3a802ab7",
                    "devkit_yesandno@OData.Community.Display.V1.FormattedValue": "Yes",
                    "devkit_yesandno": true,
                    "statecode@OData.Community.Display.V1.FormattedValue": "Active",
                    "statecode": 0,
                    "devkit_multioptionsetcode@OData.Community.Display.V1.FormattedValue": "Crm 4; Crm 2011; Crm 2013",
                    "devkit_multioptionsetcode": "100000000,100000001,100000002",
                    "a.devkit_multioptionsetcode@OData.Community.Display.V1.AttributeName": "devkit_multioptionsetcode",
                    "a.devkit_multioptionsetcode@OData.Community.Display.V1.FormattedValue": "Crm 4; Crm 2011; Crm 2013",
                    "a.devkit_multioptionsetcode": "100000000,100000001,100000002",
                    "a.devkit_singleoptionsetcode@OData.Community.Display.V1.AttributeName": "devkit_singleoptionsetcode",
                    "a.devkit_singleoptionsetcode@OData.Community.Display.V1.FormattedValue": "Crm 4",
                    "a.devkit_singleoptionsetcode": 100000000,
                    "a.devkit_yesandno@OData.Community.Display.V1.AttributeName": "devkit_yesandno",
                    "a.devkit_yesandno@OData.Community.Display.V1.FormattedValue": "Yes",
                    "a.devkit_yesandno": true,
                    "a.devkit_singleoptionsetcodecalculated@OData.Community.Display.V1.AttributeName": "devkit_singleoptionsetcodecalculated",
                    "a.devkit_singleoptionsetcodecalculated@OData.Community.Display.V1.FormattedValue": "Crm 4",
                    "a.devkit_singleoptionsetcodecalculated": 100000000,
                    "a.statecode@OData.Community.Display.V1.AttributeName": "statecode",
                    "a.statecode@OData.Community.Display.V1.FormattedValue": "Active",
                    "a.statecode": 0,
                    "a.devkit_yesandnocalculated@OData.Community.Display.V1.AttributeName": "devkit_yesandnocalculated",
                    "a.devkit_yesandnocalculated@OData.Community.Display.V1.FormattedValue": "Yes",
                    "a.devkit_yesandnocalculated": true,
                    "a.statuscode@OData.Community.Display.V1.AttributeName": "statuscode",
                    "a.statuscode@OData.Community.Display.V1.FormattedValue": "Active",
                    "a.statuscode": 1
                }
            ];
            sinon.stub(Xrm.WebApi, 'retrieveMultipleRecords')
                .withArgs("devkit_webapi")
                .returns({ entities });
            var fetchData = {
                devkit_name: "OPTIONSET%"
            };
            var fetchXml = [
                "<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>",
                "  <entity name='devkit_webapi'>",
                "    <attribute name='devkit_name'/>",
                "    <attribute name='devkit_yesandnocalculated'/>",
                "    <attribute name='devkit_yesandno'/>",
                "    <attribute name='statuscode'/>",
                "    <attribute name='statecode'/>",
                "    <attribute name='devkit_singleoptionsetcodecalculated'/>",
                "    <attribute name='devkit_singleoptionsetcode'/>",
                "    <attribute name='devkit_multioptionsetcode'/>",
                "    <attribute name='devkit_webapiid'/>",
                "    <order attribute='devkit_name' descending='false'/>",
                "    <filter type='and'>",
                "      <condition attribute='devkit_name' operator='eq' value='", fetchData.devkit_name, "'/>",
                "    </filter>",
                "    <link-entity name='devkit_webapi' from='devkit_webapiid' to='devkit_linkwebapiid' visible='false' link-type='outer' alias='a'>",
                "      <attribute name='devkit_singleoptionsetcode'/>",
                "      <attribute name='devkit_multioptionsetcode'/>",
                "      <attribute name='devkit_yesandnocalculated'/>",
                "      <attribute name='devkit_yesandno'/>",
                "      <attribute name='statuscode'/>",
                "      <attribute name='statecode'/>",
                "      <attribute name='devkit_singleoptionsetcodecalculated'/>",
                "    </link-entity>",
                "  </entity>",
                "</fetch>",
            ].join("");
            fetchXml = "?fetchXml=" + encodeURIComponent(fetchXml);
            var res = await Xrm.WebApi.retrieveMultipleRecords("devkit_webapi", fetchXml);

            var webapi = new LuckyStar.devkit_WebApiApi(res.entities[0]);
            expect(webapi.statuscode.Value).toEqual(1);
            expect(webapi.statuscode.FormattedValue).toEqual("Active");
            expect(webapi.statecode.Value).toEqual(0);
            expect(webapi.statecode.FormattedValue).toEqual("Active");
            expect(webapi.devkit_SingleOptionSetCode.Value).toEqual(OptionSet.devkit_WebApi.devkit_SingleOptionSetCode.Crm_4);
            expect(webapi.devkit_SingleOptionSetCode.FormattedValue).toEqual("Crm 4");
            expect(webapi.devkit_SingleOptionSetCodeCalculated.Value).toEqual(OptionSet.devkit_WebApi.devkit_SingleOptionSetCode.Crm_4);
            expect(webapi.devkit_SingleOptionSetCodeCalculated.FormattedValue).toEqual("Crm 4");
            expect(webapi.devkit_MultiOptionSetCode.Value.length).toEqual(3);
            expect(webapi.devkit_MultiOptionSetCode.Value[0]).toEqual(OptionSet.devkit_WebApi.devkit_MultiOptionSetCode.Crm_4);
            expect(webapi.devkit_MultiOptionSetCode.Value[1]).toEqual(OptionSet.devkit_WebApi.devkit_MultiOptionSetCode.Crm_2011);
            expect(webapi.devkit_MultiOptionSetCode.Value[2]).toEqual(OptionSet.devkit_WebApi.devkit_MultiOptionSetCode.Crm_2013);
            expect(webapi.devkit_MultiOptionSetCode.FormattedValue.length).toEqual(3);
            expect(webapi.devkit_MultiOptionSetCode.FormattedValue[0]).toEqual("Crm 4");
            expect(webapi.devkit_MultiOptionSetCode.FormattedValue[1]).toEqual("Crm 2011");
            expect(webapi.devkit_MultiOptionSetCode.FormattedValue[2]).toEqual("Crm 2013");
            expect(webapi.devkit_YesAndNo.Value).toBeTruthy();
            expect(webapi.devkit_YesAndNo.FormattedValue).toEqual("Yes");
            expect(webapi.devkit_YesAndNoCalculated.Value).toBeTruthy();
            expect(webapi.devkit_YesAndNoCalculated.FormattedValue).toEqual("Yes");
            expect(webapi.getAliasedValue("a.devkit_singleoptionsetcode")).toEqual(OptionSet.devkit_WebApi.devkit_SingleOptionSetCode.Crm_4);
            var multi = webapi.getAliasedValue("a.devkit_multioptionsetcode", true);
            expect(multi.length).toEqual(3);
            expect(multi[0]).toEqual(OptionSet.devkit_WebApi.devkit_MultiOptionSetCode.Crm_4);
            expect(multi[1]).toEqual(OptionSet.devkit_WebApi.devkit_MultiOptionSetCode.Crm_2011);
            expect(multi[2]).toEqual(OptionSet.devkit_WebApi.devkit_MultiOptionSetCode.Crm_2013);
            var multi2 = webapi.getAliasedFormattedValue("a.devkit_multioptionsetcode", true);
            expect(multi2.length).toEqual(3);
            expect(multi2[0]).toEqual("Crm 4");
            expect(multi2[1]).toEqual("Crm 2011");
            expect(multi2[2]).toEqual("Crm 2013");
            expect(webapi["@odata.etag"]).not.toBeUndefined();
            expect(res.entities.length).toBe(1);
            expect(res["@odata.nextLink"]).toBeUndefined();
        });
        it('WebApi Retreive DATETIME', async () => {
            var entities = [
                {
                    "@odata.etag": "W/\"585967\"",
                    "devkit_dateonlydateonlyrollup@OData.Community.Display.V1.FormattedValue": "07.04.2019",
                    "devkit_dateonlydateonlyrollup": "2019-04-07",
                    "devkit_dateonlydateonly@OData.Community.Display.V1.FormattedValue": "29.04.2019",
                    "devkit_dateonlydateonly": "2019-04-29",
                    "devkit_userlocaldateonly@OData.Community.Display.V1.FormattedValue": "30.04.2019",
                    "devkit_userlocaldateonly": "2019-04-29T17:00:00Z",
                    "devkit_timezonedateandtimecalculated@OData.Community.Display.V1.FormattedValue": "28.04.2019 03:30 CH",
                    "devkit_timezonedateandtimecalculated": "2019-04-28T15:30:00Z",
                    "devkit_userlocaldateandtimerollup_date@OData.Community.Display.V1.FormattedValue": "01.05.2019 04:08 SA",
                    "devkit_userlocaldateandtimerollup_date": "2019-04-30T21:08:14Z",
                    "devkit_timezonedateandtimerollup_date@OData.Community.Display.V1.FormattedValue": "01.05.2019 09:35 CH",
                    "devkit_timezonedateandtimerollup_date": "2019-05-01T14:35:49Z",
                    "devkit_userlocaldateonlyrollup_state@OData.Community.Display.V1.FormattedValue": "1",
                    "devkit_userlocaldateonlyrollup_state": 1,
                    "devkit_userlocaldateonlyrollup_date@OData.Community.Display.V1.FormattedValue": "01.05.2019 03:52 SA",
                    "devkit_userlocaldateonlyrollup_date": "2019-04-30T20:52:27Z",
                    "devkit_dateonlydateonlyrollup_date@OData.Community.Display.V1.FormattedValue": "01.05.2019 09:35 CH",
                    "devkit_dateonlydateonlyrollup_date": "2019-05-01T14:35:54Z",
                    "devkit_userlocaldateandtime@OData.Community.Display.V1.FormattedValue": "27.04.2019 02:30 CH",
                    "devkit_userlocaldateandtime": "2019-04-27T07:30:00Z",
                    "devkit_timezonedateonlyrollup_state@OData.Community.Display.V1.FormattedValue": "1",
                    "devkit_timezonedateonlyrollup_state": 1,
                    "devkit_timezonedateonly@OData.Community.Display.V1.FormattedValue": "26.04.2019",
                    "devkit_timezonedateonly": "2019-04-26T00:00:00Z",
                    "devkit_dateonlydateonlyrollup_state@OData.Community.Display.V1.FormattedValue": "1",
                    "devkit_dateonlydateonlyrollup_state": 1,
                    "devkit_timezonedateonlyrollup_date@OData.Community.Display.V1.FormattedValue": "01.05.2019 09:35 CH",
                    "devkit_timezonedateonlyrollup_date": "2019-05-01T14:35:44Z",
                    "devkit_userlocaldateandtimerollup_state@OData.Community.Display.V1.FormattedValue": "1",
                    "devkit_userlocaldateandtimerollup_state": 1,
                    "devkit_userlocaldateandtimecalculated@OData.Community.Display.V1.FormattedValue": "27.04.2019 02:30 CH",
                    "devkit_userlocaldateandtimecalculated": "2019-04-27T07:30:00Z",
                    "devkit_webapiid": "f55a0d1e-286b-e911-a997-000d3a802135",
                    "devkit_userlocaldateandtimerollup@OData.Community.Display.V1.FormattedValue": "08.04.2019 08:30 SA",
                    "devkit_userlocaldateandtimerollup": "2019-04-08T01:30:00Z",
                    "devkit_dateonlydateonlycalculated@OData.Community.Display.V1.FormattedValue": "29.04.2019",
                    "devkit_dateonlydateonlycalculated": "2019-04-29",
                    "devkit_timezonedateandtimerollup@OData.Community.Display.V1.FormattedValue": "10.04.2019 01:30 SA",
                    "devkit_timezonedateandtimerollup": "2019-04-10T01:30:00Z",
                    "devkit_userlocaldateonlyrollup@OData.Community.Display.V1.FormattedValue": "06.04.2019",
                    "devkit_userlocaldateonlyrollup": "2019-04-05T17:00:00Z",
                    "devkit_timezonedateonlycalculated@OData.Community.Display.V1.FormattedValue": "26.04.2019",
                    "devkit_timezonedateonlycalculated": "2019-04-26T00:00:00Z",
                    "devkit_userlocaldateonlycalculated@OData.Community.Display.V1.FormattedValue": "30.04.2019",
                    "devkit_userlocaldateonlycalculated": "2019-04-29T17:00:00Z",
                    "devkit_timezonedateonlyrollup@OData.Community.Display.V1.FormattedValue": "09.04.2019",
                    "devkit_timezonedateonlyrollup": "2019-04-09T00:00:00Z",
                    "devkit_timezonedateandtime@OData.Community.Display.V1.FormattedValue": "28.04.2019 03:30 CH",
                    "devkit_timezonedateandtime": "2019-04-28T15:30:00Z",
                    "devkit_timezonedateandtimerollup_state@OData.Community.Display.V1.FormattedValue": "1",
                    "devkit_timezonedateandtimerollup_state": 1
                }
            ];
            sinon.stub(Xrm.WebApi, 'retrieveMultipleRecords')
                .withArgs("devkit_webapi")
                .returns({ entities });
            var fetchData = {
                devkit_name: "DATETIME"
            };
            var fetchXml = [
                "<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>",
                "  <entity name='devkit_webapi'>",
                "    <attribute name='devkit_dateonlydateonly'/>",
                "    <attribute name='devkit_dateonlydateonlycalculated'/>",
                "    <attribute name='devkit_dateonlydateonlyrollup'/>",
                "    <attribute name='devkit_dateonlydateonlyrollup_state'/>",
                "    <attribute name='devkit_dateonlydateonlyrollup_date'/>",
                "    <attribute name='devkit_userlocaldateonly'/>",
                "    <attribute name='devkit_userlocaldateonlycalculated'/>",
                "    <attribute name='devkit_userlocaldateonlyrollup'/>",
                "    <attribute name='devkit_userlocaldateonlyrollup_state'/>",
                "    <attribute name='devkit_userlocaldateonlyrollup_date'/>",
                "    <attribute name='devkit_userlocaldateandtime'/>",
                "    <attribute name='devkit_userlocaldateandtimecalculated'/>",
                "    <attribute name='devkit_userlocaldateandtimerollup'/>",
                "    <attribute name='devkit_userlocaldateandtimerollup_state'/>",
                "    <attribute name='devkit_userlocaldateandtimerollup_date'/>",
                "    <attribute name='devkit_timezonedateonly'/>",
                "    <attribute name='devkit_timezonedateonlycalculated'/>",
                "    <attribute name='devkit_timezonedateonlyrollup'/>",
                "    <attribute name='devkit_timezonedateonlyrollup_state'/>",
                "    <attribute name='devkit_timezonedateonlyrollup_date'/>",
                "    <attribute name='devkit_timezonedateandtime'/>",
                "    <attribute name='devkit_timezonedateandtimecalculated'/>",
                "    <attribute name='devkit_timezonedateandtimerollup'/>",
                "    <attribute name='devkit_timezonedateandtimerollup_state'/>",
                "    <attribute name='devkit_timezonedateandtimerollup_date'/>",
                "    <filter type='and'>",
                "      <condition attribute='devkit_name' operator='eq' value='", fetchData.devkit_name, "'/>",
                "    </filter>",
                "  </entity>",
                "</fetch>",
            ].join("");
            fetchXml = "?fetchXml=" + encodeURIComponent(fetchXml);
            var res = await Xrm.WebApi.retrieveMultipleRecords("devkit_webapi", fetchXml);

            var webapi = new LuckyStar.devkit_WebApiApi(res.entities[0]);
            //date only date only
            expect(webapi.devkit_DateOnlyDateOnly_DateOnly.Value).toEqual("2019-04-29");
            expect(webapi.devkit_DateOnlyDateOnly_DateOnly.FormattedValue).toEqual("29.04.2019");
            expect(webapi.devkit_DateOnlyDateOnlyCalculated_DateOnly.Value).toEqual("2019-04-29");
            expect(webapi.devkit_DateOnlyDateOnlyCalculated_DateOnly.FormattedValue).toEqual("29.04.2019");
            expect(webapi.devkit_DateOnlyDateOnlyRollup_DateOnly.Value).toEqual("2019-04-07");
            expect(webapi.devkit_DateOnlyDateOnlyRollup_DateOnly.FormattedValue).toEqual("07.04.2019");
            expect(webapi.devkit_DateOnlyDateOnlyRollup_State.Value).toEqual(OptionSet.devkit_WebApi.RollupState.Calculated);
            expect(webapi.devkit_DateOnlyDateOnlyRollup_State.FormattedValue).toEqual(OptionSet.devkit_WebApi.RollupState.Calculated.toString());
            expect(webapi.devkit_DateOnlyDateOnlyRollup_Date_UtcDateAndTime.Value).toEqual("2019-05-01T14:35:54Z");
            expect(webapi.devkit_DateOnlyDateOnlyRollup_Date_UtcDateAndTime.FormattedValue).toEqual("01.05.2019 09:35 CH");
            //user local date only
            expect(webapi.devkit_UserLocalDateOnly_UtcDateOnly.Value).toEqual("2019-04-29T17:00:00Z");
            expect(webapi.devkit_UserLocalDateOnly_UtcDateOnly.FormattedValue).toEqual("30.04.2019");
            expect(webapi.devkit_UserLocalDateOnlyCalculated_UtcDateOnly.Value).toEqual("2019-04-29T17:00:00Z");
            expect(webapi.devkit_UserLocalDateOnlyCalculated_UtcDateOnly.FormattedValue).toEqual("30.04.2019");
            expect(webapi.devkit_UserLocalDateOnlyRollup_UtcDateOnly.Value).toEqual("2019-04-05T17:00:00Z");
            expect(webapi.devkit_UserLocalDateOnlyRollup_UtcDateOnly.FormattedValue).toEqual("06.04.2019");
            expect(webapi.devkit_UserLocalDateOnlyRollup_State.Value).toEqual(OptionSet.devkit_WebApi.RollupState.Calculated);
            expect(webapi.devkit_UserLocalDateOnlyRollup_State.FormattedValue).toEqual(OptionSet.devkit_WebApi.RollupState.Calculated.toString());
            expect(webapi.devkit_UserLocalDateOnlyRollup_Date_UtcDateAndTime.Value).toEqual("2019-04-30T20:52:27Z");
            expect(webapi.devkit_UserLocalDateOnlyRollup_Date_UtcDateAndTime.FormattedValue).toEqual("01.05.2019 03:52 SA");
            //user local date and time
            expect(webapi.devkit_UserLocalDateAndTime_UtcDateAndTime.Value).toEqual("2019-04-27T07:30:00Z");
            expect(webapi.devkit_UserLocalDateAndTime_UtcDateAndTime.FormattedValue).toEqual("27.04.2019 02:30 CH");
            expect(webapi.devkit_UserLocalDateAndTimeCalculated_UtcDateAndTime.Value).toEqual("2019-04-27T07:30:00Z");
            expect(webapi.devkit_UserLocalDateAndTimeCalculated_UtcDateAndTime.FormattedValue).toEqual("27.04.2019 02:30 CH");
            expect(webapi.devkit_UserLocalDateAndTimeRollup_UtcDateAndTime.Value).toEqual("2019-04-08T01:30:00Z");
            expect(webapi.devkit_UserLocalDateAndTimeRollup_UtcDateAndTime.FormattedValue).toEqual("08.04.2019 08:30 SA");
            expect(webapi.devkit_UserLocalDateAndTimeRollup_State.Value).toEqual(OptionSet.devkit_WebApi.RollupState.Calculated);
            expect(webapi.devkit_UserLocalDateAndTimeRollup_State.FormattedValue).toEqual(OptionSet.devkit_WebApi.RollupState.Calculated.toString());
            expect(webapi.devkit_UserLocalDateAndTimeRollup_Date_UtcDateAndTime.Value).toEqual("2019-04-30T21:08:14Z");
            expect(webapi.devkit_UserLocalDateAndTimeRollup_Date_UtcDateAndTime.FormattedValue).toEqual("01.05.2019 04:08 SA");
            //time-zone date only
            expect(webapi.devkit_TimeZoneDateOnly_TimezoneDateOnly.Value).toEqual("2019-04-26T00:00:00Z");
            expect(webapi.devkit_TimeZoneDateOnly_TimezoneDateOnly.FormattedValue).toEqual("26.04.2019");
            expect(webapi.devkit_TimeZoneDateOnlyCalculated_TimezoneDateOnly.Value).toEqual("2019-04-26T00:00:00Z");
            expect(webapi.devkit_TimeZoneDateOnlyCalculated_TimezoneDateOnly.FormattedValue).toEqual("26.04.2019");
            expect(webapi.devkit_TimeZoneDateOnlyRollup_TimezoneDateOnly.Value).toEqual("2019-04-09T00:00:00Z");
            expect(webapi.devkit_TimeZoneDateOnlyRollup_TimezoneDateOnly.FormattedValue).toEqual("09.04.2019");
            expect(webapi.devkit_TimeZoneDateOnlyRollup_State.Value).toEqual(OptionSet.devkit_WebApi.RollupState.Calculated);
            expect(webapi.devkit_TimeZoneDateOnlyRollup_State.FormattedValue).toEqual(OptionSet.devkit_WebApi.RollupState.Calculated.toString());
            expect(webapi.devkit_TimeZoneDateOnlyRollup_Date_UtcDateAndTime.Value).toEqual("2019-05-01T14:35:44Z");
            expect(webapi.devkit_TimeZoneDateOnlyRollup_Date_UtcDateAndTime.FormattedValue).toEqual("01.05.2019 09:35 CH");
            //time-zone date and time
            expect(webapi.devkit_TimeZoneDateAndTime_TimezoneDateAndTime.Value).toEqual("2019-04-28T15:30:00Z");
            expect(webapi.devkit_TimeZoneDateAndTime_TimezoneDateAndTime.FormattedValue).toEqual("28.04.2019 03:30 CH");
            expect(webapi.devkit_TimeZoneDateAndTimeCalculated_TimezoneDateAndTime.Value).toEqual("2019-04-28T15:30:00Z");
            expect(webapi.devkit_TimeZoneDateAndTimeCalculated_TimezoneDateAndTime.FormattedValue).toEqual("28.04.2019 03:30 CH");
            expect(webapi.devkit_TimeZoneDateAndTimeRollup_TimezoneDateAndTime.Value).toEqual("2019-04-10T01:30:00Z");
            expect(webapi.devkit_TimeZoneDateAndTimeRollup_TimezoneDateAndTime.FormattedValue).toEqual("10.04.2019 01:30 SA");
            expect(webapi.devkit_TimeZoneDateAndTimeRollup_State.Value).toEqual(OptionSet.devkit_WebApi.RollupState.Calculated);
            expect(webapi.devkit_TimeZoneDateAndTimeRollup_State.FormattedValue).toEqual(OptionSet.devkit_WebApi.RollupState.Calculated.toString());
            expect(webapi.devkit_TimeZoneDateAndTimeRollup_Date_UtcDateAndTime.Value).toEqual("2019-05-01T14:35:49Z");
            expect(webapi.devkit_TimeZoneDateAndTimeRollup_Date_UtcDateAndTime.FormattedValue).toEqual("01.05.2019 09:35 CH");
            //others
            expect(webapi["@odata.etag"]).not.toBeUndefined();
            expect(res.entities.length).toBe(1);
            expect(res["@odata.nextLink"]).toBeUndefined();
        });
        it('WebApi Retreive NUMBER', async () => {
            var entities = [
                {
                    "@odata.etag": "W/\"586414\"",
                    "devkit_wholenumbernone@OData.Community.Display.V1.FormattedValue": "1.234",
                    "devkit_wholenumbernone": 1234,
                    "_transactioncurrencyid_value@OData.Community.Display.V1.FormattedValue": "US Dollar",
                    "_transactioncurrencyid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "transactioncurrencyid",
                    "_transactioncurrencyid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "transactioncurrency",
                    "_transactioncurrencyid_value": "08a827ca-9063-e911-a836-000d3a80e227",
                    "devkit_webapiid": "9670bbc4-2b6c-e911-a997-000d3a802135",
                    "devkit_wholenumbertimezone@OData.Community.Display.V1.FormattedValue": "205",
                    "devkit_wholenumbertimezone": 205,
                    "devkit_wholenumberduration@OData.Community.Display.V1.FormattedValue": "480",
                    "devkit_wholenumberduration": 480,
                    "devkit_currency_base@OData.Community.Display.V1.FormattedValue": "123.456,35 $",
                    "devkit_currency_base": 123456.35,
                    "devkit_currency@OData.Community.Display.V1.FormattedValue": "123.456,35 $",
                    "devkit_currency": 123456.35,
                    "devkit_decimalnumber@OData.Community.Display.V1.FormattedValue": "1.234.567,89",
                    "devkit_decimalnumber": 1234567.89,
                    "exchangerate@OData.Community.Display.V1.FormattedValue": "1,0000000000",
                    "exchangerate": 1,
                    "devkit_wholenumberlanguage@OData.Community.Display.V1.FormattedValue": "1.033",
                    "devkit_wholenumberlanguage": 1033,
                    "devkit_floatingpointnumber@OData.Community.Display.V1.FormattedValue": "1.234,57",
                    "devkit_floatingpointnumber": 1234.57
                }
            ];
            sinon.stub(Xrm.WebApi, 'retrieveMultipleRecords')
                .withArgs("devkit_webapi")
                .returns({ entities });
            var fetchData = {
                devkit_name: "NUMBER"
            };
            var fetchXml = [
                "<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>",
                "  <entity name='devkit_webapi'>",
                "    <attribute name='devkit_wholenumbertimezone'/>",
                "    <attribute name='devkit_wholenumbernone'/>",
                "    <attribute name='devkit_wholenumberlanguage'/>",
                "    <attribute name='devkit_wholenumberduration'/>",
                "    <attribute name='devkit_floatingpointnumber'/>",
                "    <attribute name='exchangerate'/>",
                "    <attribute name='devkit_decimalnumber'/>",
                "    <attribute name='devkit_currency_base'/>",
                "    <attribute name='devkit_currency'/>",
                "    <attribute name='transactioncurrencyid'/>",
                "    <filter type='and'>",
                "      <condition attribute='devkit_name' operator='eq' value='", fetchData.devkit_name, "'/>",
                "    </filter>",
                "  </entity>",
                "</fetch>",
            ].join("");
            fetchXml = "?fetchXml=" + encodeURIComponent(fetchXml);
            var res = await Xrm.WebApi.retrieveMultipleRecords("devkit_webapi", fetchXml);

            var webapi = new LuckyStar.devkit_WebApiApi(res.entities[0]);
            //whole number
            expect(webapi.devkit_WholeNumberNone.Value).toEqual(1234);
            expect(webapi.devkit_WholeNumberNone.FormattedValue).toEqual("1.234");
            expect(webapi.devkit_WholeNumberDuration.Value).toEqual(480);
            expect(webapi.devkit_WholeNumberDuration.FormattedValue).toEqual("480");
            expect(webapi.devkit_WholeNumberLanguage.Value).toEqual(1033);
            expect(webapi.devkit_WholeNumberLanguage.FormattedValue).toEqual("1.033");
            expect(webapi.devkit_WholeNumberTimeZone.Value).toEqual(205);
            expect(webapi.devkit_WholeNumberTimeZone.FormattedValue).toEqual("205");
            //floating point number
            expect(webapi.devkit_FloatingPointNumber.Value).toEqual(1234.57);
            expect(webapi.devkit_FloatingPointNumber.FormattedValue).toEqual("1.234,57");
            //decimal
            expect(webapi.devkit_DecimalNumber.Value).toEqual(1234567.89);
            expect(webapi.devkit_DecimalNumber.FormattedValue).toEqual("1.234.567,89");
            //currency
            expect(webapi.devkit_Currency.Value).toEqual(123456.35);
            expect(webapi.devkit_Currency.FormattedValue).toEqual("123.456,35 $");
            expect(webapi.devkit_currency_Base.Value).toEqual(123456.35);
            expect(webapi.devkit_currency_Base.FormattedValue).toEqual("123.456,35 $");
            expect(webapi.ExchangeRate.Value).toEqual(1);
            expect(webapi.ExchangeRate.FormattedValue).toEqual("1,0000000000");
            //others
            expect(webapi["@odata.etag"]).not.toBeUndefined();
            expect(res.entities.length).toBe(1);
            expect(res["@odata.nextLink"]).toBeUndefined();
        });
        it('WebApi Retreive IMAGE', async () => {
            var entities = [
                {
                    "@odata.etag": "W/\"588558\"",
                    "entityimageid": "cbc7d336-456d-e911-a98d-000d3a80280e",
                    "devkit_webapiid": "c9c7d336-456d-e911-a98d-000d3a80280e",
                    "entityimage": "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",
                    "entityimage_url": "/Image/download.aspx?Entity=devkit_webapi&Attribute=entityimage&Id=c9c7d336-456d-e911-a98d-000d3a80280e&Timestamp=636924447719637143",
                    "entityimage_timestamp@OData.Community.Display.V1.FormattedValue": "636.924.447.719.637.000",
                    "entityimage_timestamp": 636924447719637100
                }
            ];
            sinon.stub(Xrm.WebApi, 'retrieveMultipleRecords')
                .withArgs("devkit_webapi")
                .returns({ entities });
            var fetchData = {
                devkit_name: "IMAGE"
            };
            var fetchXml = [
                "<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>",
                "  <entity name='devkit_webapi'>",
                "    <attribute name='entityimage'/>",
                "    <attribute name='entityimageid'/>",
                "    <attribute name='entityimage_url'/>",
                "    <attribute name='entityimage_timestamp'/>",
                "    <filter type='and'>",
                "      <condition attribute='devkit_name' operator='eq' value='", fetchData.devkit_name, "'/>",
                "    </filter>",
                "  </entity>",
                "</fetch>",
            ].join("");
            fetchXml = "?fetchXml=" + encodeURIComponent(fetchXml);
            var res = await Xrm.WebApi.retrieveMultipleRecords("devkit_webapi", fetchXml);

            var webapi = new LuckyStar.devkit_WebApiApi(res.entities[0]);
            //image
            expect(webapi.EntityImageId.Value).toEqual("cbc7d336-456d-e911-a98d-000d3a80280e");
            expect(webapi.EntityImage.Value).toBe("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");
            expect(webapi.EntityImage_URL.Value).toEqual("/Image/download.aspx?Entity=devkit_webapi&Attribute=entityimage&Id=c9c7d336-456d-e911-a98d-000d3a80280e&Timestamp=636924447719637143");
            expect(webapi.EntityImage_Timestamp.Value).toEqual(636924447719637100);
            expect(webapi.EntityImage_Timestamp.FormattedValue).toEqual("636.924.447.719.637.000");
            //others
            expect(webapi["@odata.etag"]).not.toBeUndefined();
            expect(res.entities.length).toBe(1);
            expect(res["@odata.nextLink"]).toBeUndefined();
        });
        it('WebApi Retreive PARTYLIST', async () => {
            var entities = [
                {
                    "@odata.etag": "W/\"591128\"",
                    "subject": "EMAIL",
                    "prioritycode@OData.Community.Display.V1.FormattedValue": "Normal",
                    "prioritycode": 1,
                    "statuscode@OData.Community.Display.V1.FormattedValue": "Draft",
                    "statuscode": 1,
                    "modifiedon@OData.Community.Display.V1.FormattedValue": "03.05.2019 11:40 CH",
                    "modifiedon": "2019-05-03T16:40:20Z",
                    "activityid": "df6bec1b-c26d-e911-a98d-000d3a80280e",
                    "email_activity_parties": [{
                        "@odata.etag": "W/\"591126\"",
                        "addressusedemailcolumnnumber@OData.Community.Display.V1.FormattedValue": "35",
                        "addressusedemailcolumnnumber": 35,
                        "donotemail@OData.Community.Display.V1.FormattedValue": "Allow",
                        "donotemail": false,
                        "instancetypecode@OData.Community.Display.V1.FormattedValue": "Not Recurring",
                        "instancetypecode": 0,
                        "donotfax@OData.Community.Display.V1.FormattedValue": "Allow",
                        "donotfax": false,
                        "addressused": "someone9@example.com",
                        "_activityid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "activityid_activitypointer",
                        "_activityid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "activitypointer",
                        "_activityid_value": "df6bec1b-c26d-e911-a98d-000d3a80280e",
                        "_partyid_value@OData.Community.Display.V1.FormattedValue": "A. Datum Corporation (sample)",
                        "_partyid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "partyid_account",
                        "_partyid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "account",
                        "_partyid_value": "928d37ec-9e66-e911-a993-000d3a804bc9",
                        "donotphone@OData.Community.Display.V1.FormattedValue": "Allow",
                        "donotphone": false,
                        "participationtypemask@OData.Community.Display.V1.FormattedValue": "To Recipient",
                        "participationtypemask": 2,
                        "ispartydeleted@OData.Community.Display.V1.FormattedValue": "No",
                        "ispartydeleted": false,
                        "_ownerid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "systemuser",
                        "_ownerid_value": "739d2b22-5f57-42f9-9a17-ebad89799e7e",
                        "donotpostalmail@OData.Community.Display.V1.FormattedValue": "Allow",
                        "donotpostalmail": false,
                        "activitypartyid": "e16bec1b-c26d-e911-a98d-000d3a80280e"
                    }, {
                        "@odata.etag": "W/\"591127\"",
                        "addressusedemailcolumnnumber@OData.Community.Display.V1.FormattedValue": "35",
                        "addressusedemailcolumnnumber": 35,
                        "donotemail@OData.Community.Display.V1.FormattedValue": "Allow",
                        "donotemail": false,
                        "instancetypecode@OData.Community.Display.V1.FormattedValue": "Not Recurring",
                        "instancetypecode": 0,
                        "donotfax@OData.Community.Display.V1.FormattedValue": "Allow",
                        "donotfax": false,
                        "addressused": "someone8@example.com",
                        "_activityid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "activityid_activitypointer",
                        "_activityid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "activitypointer",
                        "_activityid_value": "df6bec1b-c26d-e911-a98d-000d3a80280e",
                        "_partyid_value@OData.Community.Display.V1.FormattedValue": "Alpine Ski House (sample)",
                        "_partyid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "partyid_account",
                        "_partyid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "account",
                        "_partyid_value": "908d37ec-9e66-e911-a993-000d3a804bc9",
                        "donotphone@OData.Community.Display.V1.FormattedValue": "Allow",
                        "donotphone": false,
                        "participationtypemask@OData.Community.Display.V1.FormattedValue": "To Recipient",
                        "participationtypemask": 2,
                        "ispartydeleted@OData.Community.Display.V1.FormattedValue": "No",
                        "ispartydeleted": false,
                        "_ownerid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "systemuser",
                        "_ownerid_value": "739d2b22-5f57-42f9-9a17-ebad89799e7e",
                        "donotpostalmail@OData.Community.Display.V1.FormattedValue": "Allow",
                        "donotpostalmail": false,
                        "activitypartyid": "e26bec1b-c26d-e911-a98d-000d3a80280e"
                    }, {
                        "@odata.etag": "W/\"591125\"",
                        "addressusedemailcolumnnumber@OData.Community.Display.V1.FormattedValue": "15",
                        "addressusedemailcolumnnumber": 15,
                        "instancetypecode@OData.Community.Display.V1.FormattedValue": "Not Recurring",
                        "instancetypecode": 0,
                        "addressused": "devkit@crmgridplus.com",
                        "_activityid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "activityid_activitypointer",
                        "_activityid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "activitypointer",
                        "_activityid_value": "df6bec1b-c26d-e911-a98d-000d3a80280e",
                        "_partyid_value@OData.Community.Display.V1.FormattedValue": "dev kit",
                        "_partyid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "systemuser",
                        "_partyid_value": "739d2b22-5f57-42f9-9a17-ebad89799e7e",
                        "participationtypemask@OData.Community.Display.V1.FormattedValue": "Sender",
                        "participationtypemask": 1,
                        "ispartydeleted@OData.Community.Display.V1.FormattedValue": "No",
                        "ispartydeleted": false,
                        "_ownerid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "systemuser",
                        "_ownerid_value": "739d2b22-5f57-42f9-9a17-ebad89799e7e",
                        "activitypartyid": "e06bec1b-c26d-e911-a98d-000d3a80280e"
                    }]
                }
            ];
            sinon.stub(Xrm.WebApi, 'retrieveMultipleRecords')
                .withArgs("email")
                .returns({ entities });
            var fetchData = {
                subject: "EMAIL"
            };
            var fetchXml = [
                "<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>",
                "  <entity name='email'>",
                "    <attribute name='subject'/>",
                "    <attribute name='regardingobjectid'/>",
                "    <attribute name='from'/>",
                "    <attribute name='to'/>",
                "    <attribute name='prioritycode'/>",
                "    <attribute name='statuscode'/>",
                "    <attribute name='modifiedon'/>",
                "    <attribute name='activityid'/>",
                "    <order attribute='subject' descending='false'/>",
                "    <filter type='and'>",
                "      <condition attribute='subject' operator='eq' value='", fetchData.subject, "'/>",
                "    </filter>",
                "  </entity>",
                "</fetch>",
            ].join("");
            fetchXml = "?fetchXml=" + encodeURIComponent(fetchXml);
            var res = await Xrm.WebApi.retrieveMultipleRecords("email", fetchXml);

            var webapi = new LuckyStar.EmailApi(res.entities[0]);
            var ActivityParties = webapi.ActivityParties;
            var party0 = new LuckyStar.ActivityPartyApi(ActivityParties[0]);
            expect(party0.ParticipationTypeMask.Value).toEqual(OptionSet.ActivityParty.ParticipationTypeMask.To_Recipient);
            expect(party0.partyid_account.FormattedValue).toEqual("A. Datum Corporation (sample)");
            expect(party0.AddressUsed.Value).toEqual("someone9@example.com");
            var party2 = new LuckyStar.ActivityPartyApi(ActivityParties[2]);
            expect(party2.partyid_systemuser.FormattedValue).toEqual("dev kit");
            //others
            expect(webapi["@odata.etag"]).not.toBeUndefined();
            expect(res.entities.length).toEqual(1);
            expect(res["@odata.nextLink"]).toBeUndefined();

        });

    });
    describe("WebApi Insert", function () {
        it("Insert", async () => {
            var obj =
            {
                id: "8d2dbd8c-c9f8-4cb5-8838-f5a916a6098f",
                entityType: "devkit_webapi"
            };
            var api = new LuckyStar.devkit_WebApiApi();
            api.devkit_Name.Value = "OPTIONSET - INSERT";
            api.devkit_SingleOptionSetCode.Value = OptionSet.devkit_WebApi.devkit_SingleOptionSetCode.Dynamics_365;
            api.devkit_MultiOptionSetCode.Value = [OptionSet.devkit_WebApi.devkit_MultiOptionSetCode.Crm_2015, OptionSet.devkit_WebApi.devkit_MultiOptionSetCode.Crm_2016];
            api.devkit_YesAndNo.Value = false;

            sinon.stub(Xrm.WebApi, 'createRecord')
                .withArgs("devkit_webapi", api.Entity)
                .returns(obj);

            var res = await Xrm.WebApi.createRecord("devkit_webapi", api.Entity);
            expect(res.id).toBe("8d2dbd8c-c9f8-4cb5-8838-f5a916a6098f");
            expect(res.entityType).toBe("devkit_webapi");
        });
    });
    describe("WebApi Delete", () => {
        afterEach(function () {
            sinon.restore()
        });
        it("Delete", async () => {
            var obj =
            {
                id: "8d2dbd8c-c9f8-4cb5-8838-f5a916a6098f",
                entityType: "devkit_webapi"
            };
            sinon.stub(Xrm.WebApi, 'deleteRecord')
                .withArgs("devkit_webapi", "8d2dbd8c-c9f8-4cb5-8838-f5a916a6098f")
                .returns(obj);
            var res = await Xrm.WebApi.deleteRecord("devkit_webapi", "8d2dbd8c-c9f8-4cb5-8838-f5a916a6098f");
            expect(res.id).toBe("8d2dbd8c-c9f8-4cb5-8838-f5a916a6098f");
            expect(res.entityType).toBe("devkit_webapi");
        });
    });
});
