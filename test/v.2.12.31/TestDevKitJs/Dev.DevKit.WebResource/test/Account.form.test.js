//@ts-check
define(['xrm-mock'], function () {
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
                name: "name",
                requiredLevel: "required",
                value: "LE VAN PHUOC",
                maxLength: 100,
                submitMode: "always"
            },
                {
                    controlType: "standard",
                    disabled: true,
                    label: "Account Name",
                    name: "name",
                    visible: true
                }
            );
            var executionContext = xrmMock.XrmMockGenerator.formContext;
            var form = new DevKit.FormAccount(executionContext);
            var nameAddOnChange_data = "";
            var nameAddOnChange = function (executionContent) { nameAddOnChange_data = "ON-CHANGED"; }
            form.Body.Name.AddOnChange(nameAddOnChange);
            form.Body.Name.FireOnChange();
            expect(nameAddOnChange_data).toBe("ON-CHANGED");
            expect(form.Body.Name.AttributeType).toBe(OptionSet.FieldAttributeType.String);
            expect(form.Body.Name.Format).toBe(OptionSet.FieldFormat.Text);
            expect(form.Body.Name.IsDirty).toBeTruthy();
            expect(form.Body.Name.AttributeName).toBe("name");
            expect(() => { form.Body.Name.AttributeParent }).toThrow(new Error("getParent not implemented"));
            expect(form.Body.Name.RequiredLevel).toBe(OptionSet.FieldRequiredLevel.Required);
            expect(form.Body.Name.SubmitMode).toBe(OptionSet.FieldSubmitMode.Always);
            expect(() => { form.Body.Name.UserPrivilege }).toThrow(new Error("getUserPrivilege not implemented"));
            expect(form.Body.Name.Value).toBe("LE VAN PHUOC");
            expect(() => { form.Body.Name.IsValid }).toThrow(new Error("isValid not implemented"));
            nameAddOnChange_data = "REMOVE";
            form.Body.Name.RemoveOnChange(nameAddOnChange);
            form.Body.Name.FireOnChange();
            expect(nameAddOnChange_data).toBe("REMOVE");
            form.Body.Name.RequiredLevel = OptionSet.FieldRequiredLevel.Recommended;
            expect(form.Body.Name.RequiredLevel).toBe(OptionSet.FieldRequiredLevel.Recommended);
            form.Body.Name.SubmitMode = OptionSet.FieldSubmitMode.Never;
            expect(form.Body.Name.SubmitMode).toBe(OptionSet.FieldSubmitMode.Never);
            form.Body.Name.Value = null;
            expect(form.Body.Name.Value).toBeNull();
            form.Body.Name.Value = "NGUYEN VAN PHUOC";
            expect(form.Body.Name.Value).toBe("NGUYEN VAN PHUOC");
            expect(() => { form.Body.Name.SetIsValid(null, null); }).toThrow(new Error("setIsValid not implemented"));
        });
        it('Boolean attribute type', () => {
            xrmMock.XrmMockGenerator.Attribute.createBoolean({
                attributeType: "boolean",
                name: "donotemail",
                initialValue: true,
                value: true
            });
            var executionContext = xrmMock.XrmMockGenerator.formContext;
            var form = new DevKit.FormAccount(executionContext);
            expect(form.Body.DoNotEMail.InitialValue).toBeTruthy();
            form.Body.DoNotEMail.Value = false;
            expect(form.Body.DoNotEMail.Value).toBeFalsy();
            expect(form.Body.DoNotEMail.AttributeType).toBe(OptionSet.FieldAttributeType.Boolean);
        });
        it('Number attribute type (decimal, double, integer, money)', () => {
            xrmMock.XrmMockGenerator.Attribute.createNumber({
                name: "creditlimit",
                max: 123.78,
                min: 12.84,
                precision: 2,
                value: 123.19
            });
            var executionContext = xrmMock.XrmMockGenerator.formContext;
            var form = new DevKit.FormAccount(executionContext);
            expect(form.Body.CreditLimit.Max).toBe(123.78);
            expect(form.Body.CreditLimit.Min).toBe(12.84);
            expect(form.Body.CreditLimit.Precision).toBe(2);
            form.Body.CreditLimit.Precision = 1;
            expect(form.Body.CreditLimit.Precision).toBe(1);
            expect(form.Body.CreditLimit.Value).toBe(123.19);
        });
        it('String attribute type', () => {
            xrmMock.XrmMockGenerator.Attribute.createString({
                attributeType: "string",
                name: "telephone1",
                maxLength: 20,
                value: "+0x 000-123-4567"
            });
            var executionContext = xrmMock.XrmMockGenerator.formContext;
            var form = new DevKit.FormAccount(executionContext);
            expect(form.Body.Telephone1.MaxLength).toBe(20);
            expect(form.Body.Telephone1.Value).toBe("+0x 000-123-4567");
        });
        it('OptionSet attribute types', () => {
            xrmMock.XrmMockGenerator.Attribute.createOptionSet({
                name: "industrycode",
                initialValue: 1,
                options: [
                    { text: "Accounting", value: 1 },
                    { text: "Brokers", value: 4 },
                    { text: "Consulting", value: 7 },
                    { text: "Entertainment_Retail", value: 14 },
                    { text: "Financial", value: 16 },
                    { text: "Insurance", value: 20 }
                ],
                value: 1
            });
            var executionContext = xrmMock.XrmMockGenerator.formContext;
            var form = new DevKit.FormAccount(executionContext);
            expect(form.Body.IndustryCode.InitialValue).toBe(OptionSet.Account.IndustryCode.Accounting);
            var option = form.Body.IndustryCode.Option("Entertainment_Retail");
            expect(option.text).toBe("Entertainment_Retail");
            expect(option.value).toBe(14);
            expect(form.Body.IndustryCode.Options.length).toBe(6);
            expect(form.Body.IndustryCode.Options[0].text).toBe("Accounting");
            expect(form.Body.IndustryCode.Options[0].value).toBe(1);
            var selectedOption = form.Body.IndustryCode.SelectedOption;
            expect(selectedOption.text).toBe("Accounting");
            expect(selectedOption.value).toBe(1);
            expect(form.Body.IndustryCode.Text).toBe("Accounting");
        });
        it('MultiOptionSet attribute types', () => {
            xrmMock.XrmMockGenerator.Attribute.createOptionSet({
                name: "devkit_categorycode",
                options: [
                    { text: "Business", value: 1 },
                    { text: "Family", value: 2 },
                    { text: "Social", value: 3 },
                    { text: "Sales", value: 4 },
                    { text: "Other", value: 5 }
                ],
                value: null
            });
            var executionContext = xrmMock.XrmMockGenerator.formContext;
            var form = new DevKit.FormAccount(executionContext);
            expect(form.Body.devkit_CategoryCode.Value).toBeNull();
            form.Body.devkit_CategoryCode.Value = [1, 2];
            expect(form.Body.devkit_CategoryCode.Value.length).toBe(2);
            var values = form.Body.devkit_CategoryCode.Value;
            expect(values[0]).toBe(1);
            expect(values[1]).toBe(2);
            form.Body.devkit_CategoryCode.Value = null;
            expect(form.Body.devkit_CategoryCode.Value).toBeNull();
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
                value: "LE VAN PHUOC",
                maxLength: 100,
                submitMode: "always"
            },
                [
                    {
                        controlType: "standard",
                        disabled: true,
                        label: "Account Name",
                        name: "name",
                        visible: true
                    },
                    {
                        controlType: "standard",
                        disabled: true,
                        label: "Account Name 2",
                        name: "name_1",
                        visible: false
                    }
                ]
            );
            var executionContext = xrmMock.XrmMockGenerator.formContext;
            var form = new DevKit.FormAccount(executionContext);
            expect(() => { form.Body.Name.AddNotification(null) }).toThrow(new Error("Method not implemented."));
            expect(() => { form.Body.Name.ClearNotification("uniqueId") }).toThrow(new Error("clear notification not implemented"));
            expect(form.Body.Name.Attribute).toBeDefined();
            expect(form.Body.Name.ControlType).toBe(OptionSet.FieldControlType.Standard);
            expect(form.Body.Name.Disabled).toBeTruthy();
            expect(form.Body.Name.Label).toBe("Account Name");
            expect(form.Body.Name.ControlName).toBe("name");
            expect(form.Body.Name_1.ControlName).toBe("name_1");
            expect(form.Body.Name_1.Value).toBe("LE VAN PHUOC");
            expect(form.Body.Name.ControlParent).toBeUndefined();
            expect(form.Body.Name_1.Visible).toBeFalsy(0);
            form.Body.Name.Disabled = false;
            expect(form.Body.Name.Disabled).toBeFalsy();
            expect(form.Body.Name.Focus()).toBeUndefined();
            form.Body.Name.Label = "Account Name New";
            expect(form.Body.Name.Label).toBe("Account Name New");
            expect(() => { form.Body.Name.SetNotification("Field Notification", "uniqueId") }).toThrow(new Error("set notification not implemented"));
            form.Body.Name.Visible = false;
            expect(form.Body.Name.Visible).toBeFalsy();
        });
        it('lookup control type', () => {
            var lookup = xrmMock.XrmMockGenerator.Control.createLookup(new xrmMock.LookupControlMock({
                name: "primarycontactid",
                attribute: new xrmMock.LookupAttributeMock({
                    name: "primarycontactid",
                    isPartyList: false,
                    value: [new xrmMock.LookupValueMock("8d2dbd8c-c9f8-4cb5-8838-f5a916a6098a", "contact", "NGUYEN VAN MINH")]
                }),
                views: [
                    {
                        entityName: "contact",
                        fetchXml: "<fetchxml/>",
                        layoutXml: "<layoutxml/>",
                        viewDisplayName: "Active Contacts",
                        viewId: "DefaultViewId",
                        isDefault: true
                    },
                    {
                        entityName: "contact",
                        fetchXml: "<fetchxml2/>",
                        layoutXml: "<layoutxml2/>",
                        viewDisplayName: "All Contacts",
                        viewId: "DefaultViewId2",
                        isDefault: false
                    }
                ],
                disabled: false,
                label: "Primary Contact",
                visible: true
            }));
            var executionContext = xrmMock.XrmMockGenerator.formContext;
            var form = new DevKit.FormAccount(executionContext);

            expect(lookup.filters.length).toBe(0);
            var abc_LookupAddPreSearch = () => {
                var filter = `
<filter type="and">
    <condition attribute="name" operator="eq" value="name" />
</filter>
`;
                var form = new DevKit.FormAccount(executionContext);
                form.Body.PrimaryContactId.AddCustomFilter(filter, "contact");
            }
            form.Body.PrimaryContactId.AddPreSearch(abc_LookupAddPreSearch);
            abc_LookupAddPreSearch();
            expect(lookup.filters.length).toBe(1);
            expect(lookup.views.length).toBe(2);
            form.Body.PrimaryContactId.AddCustomView("viewid", "enttiyName", "viewDisplayName", "fetchXml", "layoutXml", false);
            expect(lookup.views.length).toBe(3);
            expect(() => { form.Body.PrimaryContactId.AddNotification(null) }).toThrow(new Error("Method not implemented."));
            expect(() => { form.Body.PrimaryContactId.AddOnLookupTagClick(null); }).toThrow(new Error("addOnLookupTagClick not implemented"))
            expect(() => { form.Body.PrimaryContactId.ClearNotification("uniqueId") }).toThrow(new Error("clear notification not implemented"));
            expect(form.Body.PrimaryContactId.Attribute).toBeDefined();
            expect(form.Body.PrimaryContactId.ControlType).toBe(OptionSet.FieldControlType.Lookup);
            expect(form.Body.PrimaryContactId.DefaultView).toBe("DefaultViewId");
            expect(form.Body.PrimaryContactId.Disabled).toBeFalsy();
            expect(() => { form.Body.PrimaryContactId.EntityTypes }).toThrow(new Error("Method not implemented."));
            expect(form.Body.PrimaryContactId.Label).toBe("Primary Contact");
            expect(form.Body.PrimaryContactId.ControlName).toBe("primarycontactid");
            expect(form.Body.PrimaryContactId.ControlParent).toBeUndefined();
            expect(form.Body.PrimaryContactId.Visible).toBeTruthy();
            expect(() => { form.Body.PrimaryContactId.RemoveOnLookupTagClick(null); }).toThrow(new Error("removeOnLookupTagClick not implemented"))
            expect(() => { form.Body.PrimaryContactId.RemovePreSearch(abc_LookupAddPreSearch) }).toThrow(new Error("remove presearch not implemented"));
            form.Body.PrimaryContactId.DefaultView = "DefaultViewId2";
            expect(form.Body.PrimaryContactId.DefaultView).toBe("DefaultViewId2");
            form.Body.PrimaryContactId.Disabled = true;
            expect(form.Body.PrimaryContactId.Disabled).toBeTruthy();
            expect(() => { form.Body.PrimaryContactId.EntityTypes = ["account"] }).toThrow(new Error("Method not implemented."));
            expect(form.Body.PrimaryContactId.Focus()).toBeUndefined();
            form.Body.PrimaryContactId.Label = "Primary Contact New";
            expect(form.Body.PrimaryContactId.Label).toBe("Primary Contact New");
            expect(() => { form.Body.PrimaryContactId.SetNotification("Field Notification", "uniqueId") }).toThrow(new Error("set notification not implemented"));
            form.Body.PrimaryContactId.Visible = false;
            expect(form.Body.PrimaryContactId.Visible).toBeFalsy();
        });
        it('date control type', () => {
            xrmMock.XrmMockGenerator.Attribute.createDate("createdon", new Date());
            xrmMock.XrmMockGenerator.Attribute.createDate("modifiedon", new Date());
            var executionContext = xrmMock.XrmMockGenerator.formContext;
            var form = new DevKit.FormAccount(executionContext);
            expect(form.Body.CreatedOn.ControlName).toBe("createdon");
            expect(form.Body.ModifiedOn.ControlName).toBe("modifiedon");
            form.Body.ModifiedOn.ShowTime = true;
            expect(form.Body.ModifiedOn.ShowTime).toBeTruthy();
            form.Body.ModifiedOn.ShowTime = false;
            expect(form.Body.ModifiedOn.ShowTime).toBeFalsy();
        });
        it('multiselectoptionset and optionset control types', () => {
            var optionSet = xrmMock.XrmMockGenerator.Control.createOptionSet({
                name: "industrycode",
                disabled: true,
                label: "Industry",
                visible: true,
                attribute: new xrmMock.OptionSetAttributeMock({
                    name: "industrycode",
                    options: [
                        { text: "Accounting", value: 1 },
                        { text: "Brokers", value: 4 },
                        { text: "Consulting", value: 7 },
                        { text: "Entertainment_Retail", value: 14 },
                        { text: "Financial", value: 16 },
                        { text: "Insurance", value: 20 }
                    ]
                }),
                options: [
                    { text: "Accounting", value: 1 },
                    { text: "Brokers", value: 4 },
                    { text: "Consulting", value: 7 },
                    { text: "Entertainment_Retail", value: 14 },
                    { text: "Financial", value: 16 },
                    { text: "Insurance", value: 20 }
                ]
            });

            var executionContext = xrmMock.XrmMockGenerator.formContext;
            var form = new DevKit.FormAccount(executionContext);
            expect(() => { form.Body.IndustryCode.AddNotification(null) }).toThrow(new Error("Method not implemented."));
            expect(form.Body.IndustryCode.Options.length).toBe(6);
            expect(form.Body.IndustryCode.AddOption("Others", 999999, 6)).toBeUndefined();
            expect(form.Body.IndustryCode.ControlOptions.length).toBe(7);
            expect(() => { form.Body.IndustryCode.ClearNotification("uniqueId") }).toThrow(new Error("clear notification not implemented"));
            expect(form.Body.IndustryCode.ClearOptions()).toBeUndefined();
            expect(form.Body.IndustryCode.ControlOptions.length).toBe(0);
            expect(form.Body.IndustryCode.Attribute).toBeDefined();
            expect(form.Body.IndustryCode.ControlType).toBe(OptionSet.FieldControlType.OptionSet);
            expect(form.Body.IndustryCode.Disabled).toBeTruthy();
            expect(form.Body.IndustryCode.Label).toBe("Industry");
            expect(form.Body.IndustryCode.ControlName).toBe("industrycode");
            expect(form.Body.IndustryCode.ControlParent).toBeUndefined();
            expect(form.Body.IndustryCode.Visible).toBeTruthy();
            form.Body.IndustryCode.AddOption("New Option 999", 999, 0);
            form.Body.IndustryCode.AddOption("New Option 998", 998, 0);
            form.Body.IndustryCode.AddOption("New Option 997", 997, 0);
            expect(form.Body.IndustryCode.ControlOptions.length).toBe(3);
            expect(form.Body.IndustryCode.RemoveOption(1));
            expect(form.Body.IndustryCode.ControlOptions.length).toBe(2);
            form.Body.IndustryCode.Disabled = false;
            expect(form.Body.IndustryCode.Disabled).toBeFalsy();
            expect(form.Body.IndustryCode.Focus()).toBeUndefined();
            form.Body.IndustryCode.Label = "Industry New";
            expect(form.Body.IndustryCode.Label).toBe("Industry New");
            expect(() => { form.Body.IndustryCode.SetNotification("Field Notification", "uniqueId") }).toThrow(new Error("set notification not implemented"));
            form.Body.IndustryCode.Visible = false;
            expect(form.Body.IndustryCode.Visible).toBeFalsy();
        });
        it('quickform control type', () => {
            var attributes = new xrmMock.ItemCollectionMock([
                new xrmMock.AttributeMock({
                    name: "name"
                })
            ]);
            var entity = new xrmMock.EntityMock({
                attributes: attributes
            });
            var data = new xrmMock.DataMock(entity);
            var quickform = new xrmMock.QuickFormControlMock({
                name: "contactquickform",
                controlType: "quickform",
                label: "Contact Quick Form",
                visible: true
            });
            var ui = new xrmMock.UiMock({
                quickForms: new xrmMock.ItemCollectionMock([quickform])
            });
            xrmMock.XrmMockGenerator.formContext = new xrmMock.FormContextMock(data, ui);
            var executionContext = xrmMock.XrmMockGenerator.formContext;
            var form = new DevKit.FormAccount(executionContext);

            expect(() => { form.QuickForm.contactquickform .Controls() }).toThrow(new Error("Method not implemented."));
            expect(form.QuickForm.contactquickform.ControlType).toBe(OptionSet.FieldControlType.QuickForm);
            expect(() => { form.QuickForm.contactquickform.Disabled }).toThrow(new Error("Method not implemented."));
            expect(form.QuickForm.contactquickform.Label).toBe("Contact Quick Form");
            expect(form.QuickForm.contactquickform.ControlName).toBe("contactquickform");
            expect(form.QuickForm.contactquickform.ControlParent).toBeUndefined();
            expect(form.QuickForm.contactquickform.Visible).toBeTruthy();
            expect(form.QuickForm.contactquickform.IsLoaded()).toBeTruthy();
            expect(() => { form.QuickForm.contactquickform.Refresh() }).toThrow(new Error("Method not implemented."));
            expect(() => { form.QuickForm.contactquickform.Disabled = true }).toThrow(new Error("Method not implemented."));
            expect(() => { form.QuickForm.contactquickform.Focus() }).toThrow(new Error("Method not implemented."));
            form.QuickForm.contactquickform.Label = "Contact Quick Form New";
            expect(form.QuickForm.contactquickform.Label).toBe("Contact Quick Form New");
            expect(() => { form.QuickForm.contactquickform.Visible = false }).toThrow(new Error("Method not implemented."));
            expect(() => { form.QuickForm.contactquickform.Body.EMailAddress1 }).toThrow(new Error("Method not implemented."));
            expect(() => { form.QuickForm.contactquickform.Body.Telephone1 }).toThrow(new Error("Method not implemented."));
        });
        it('subgrid control type', () => {
            var attributes = new xrmMock.ItemCollectionMock([
                new xrmMock.AttributeMock({
                    name: "name"
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

            var form = new DevKit.FormAccount(executionContext);
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
                    name: "name",
                    isDirty: true
                })
            ]);
            var entity = new xrmMock.EntityMock({
                entityName: "account",
                id: "8d2dbd8c-c9f8-4cb5-8838-f5a916a6098a",
                primaryValue: "LE VAN PHUOC",
                attributes: attributes
            });
            var data = new xrmMock.DataMock(entity);
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
            xrmMock.XrmMockGenerator.formContext = new xrmMock.FormContextMock(data, ui);

            var executionContext = xrmMock.XrmMockGenerator.formContext;
            var form = new DevKit.FormAccount(executionContext);
            expect(() => { form.DataXml }).toThrow(new Error("getDataXml not implemented"));
            expect(form.EntityName).toBe("account");
            expect(form.EntityId).toBe("8d2dbd8c-c9f8-4cb5-8838-f5a916a6098a");
            expect(form.PrimaryAttributeValue).toBe("LE VAN PHUOC");
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
            expect(e.id).toBe("8d2dbd8c-c9f8-4cb5-8838-f5a916a6098a");
            expect(e.name).toBe("LE VAN PHUOC");
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
            form.FormNavigate("Account");
            form.FormSetVisible("Account", true);
            form.FormIsVisible("Account");
            expect(form.FormId).toBe("8d2dbd8c-c9f8-4cb5-8838-f5a916a6098a");
            expect(form.FormLabel).toBe("Account");
        });
    });
    describe('Tab & Section', () => {
        beforeEach(function () {
            var XrmMockGenerator = xrmMock.XrmMockGenerator.initialise();
            XrmMockGenerator.Panel = new xrmMock.PanelMock();
            XrmMockGenerator.Encoding = new xrmMock.EncodingMock();
            XrmMockGenerator.Device = new xrmMock.DeviceMock();
            XrmMockGenerator.Navigation = new xrmMock.NavigationStaticMock();
            XrmMockGenerator.App = new xrmMock.AppMock();
        });
        it('Tab & Section', () => {
            var tab_SUMMARY_TAB_Section_ACCOUNT_INFORMATION = xrmMock.XrmMockGenerator.Section.createSection("ACCOUNT_INFORMATION", "ACCOUNT INFORMATION", true, null, null);
            var tab_SUMMARY_TAB_Section_ADDRESS = xrmMock.XrmMockGenerator.Section.createSection("ADDRESS", "ADDRESS", false, null, null);
            var tab_SUMMARY_TAB = xrmMock.XrmMockGenerator.Tab.createTab("SUMMARY_TAB", "Summary", true, "expanded", null, new xrmMock.ItemCollectionMock([tab_SUMMARY_TAB_Section_ACCOUNT_INFORMATION, tab_SUMMARY_TAB_Section_ADDRESS]));
            var addTabStateChange = function (executionContext) { }
            var executionContext = xrmMock.XrmMockGenerator.formContext;
            var form = new DevKit.FormAccount(executionContext);
            expect(tab_SUMMARY_TAB.tabStateChangeHandlers.length).toBe(0);
            form.Body.Tab.SUMMARY_TAB.AddTabStateChange(addTabStateChange);
            expect(tab_SUMMARY_TAB.tabStateChangeHandlers.length).toBe(1);
            expect(form.Body.Tab.SUMMARY_TAB.DisplayState).toBe(OptionSet.TabDisplayState.Expanded);
            form.Body.Tab.SUMMARY_TAB.DisplayState = OptionSet.TabDisplayState.Collapsed;
            expect(form.Body.Tab.SUMMARY_TAB.DisplayState).toBe(OptionSet.TabDisplayState.Collapsed);
            expect(form.Body.Tab.SUMMARY_TAB.Focus()).toBeUndefined();
            expect(form.Body.Tab.SUMMARY_TAB.Label).toBe("Summary");
            form.Body.Tab.SUMMARY_TAB.Label = "General";
            expect(form.Body.Tab.SUMMARY_TAB.Label).toBe("General");
            expect(form.Body.Tab.SUMMARY_TAB.Name).toBe("SUMMARY_TAB");
            form.Body.Tab.SUMMARY_TAB.RemoveTabStateChange(addTabStateChange);
            expect(tab_SUMMARY_TAB.tabStateChangeHandlers.length).toBe(0);
            expect(form.Body.Tab.SUMMARY_TAB.Visible).toBeTruthy();
            form.Body.Tab.SUMMARY_TAB.Visible = false;
            expect(form.Body.Tab.SUMMARY_TAB.Visible).toBeFalsy();
            expect(form.Body.Tab.SUMMARY_TAB.Section.ACCOUNT_INFORMATION.Label).toBe("ACCOUNT INFORMATION");
            form.Body.Tab.SUMMARY_TAB.Section.ACCOUNT_INFORMATION.Label = "ACCOUNT NOTE";
            expect(form.Body.Tab.SUMMARY_TAB.Section.ACCOUNT_INFORMATION.Label).toBe("ACCOUNT NOTE");
            expect(form.Body.Tab.SUMMARY_TAB.Section.ACCOUNT_INFORMATION.Name).toBe("ACCOUNT_INFORMATION");
            expect(form.Body.Tab.SUMMARY_TAB.Section.ACCOUNT_INFORMATION.Visible).toBeTruthy();
            form.Body.Tab.SUMMARY_TAB.Section.ACCOUNT_INFORMATION.Visible = false;
            expect(form.Body.Tab.SUMMARY_TAB.Section.ACCOUNT_INFORMATION.Visible).toBeFalsy();
            expect(form.Body.Tab.SUMMARY_TAB.Section.ACCOUNT_INFORMATION.Parent).toBeDefined();
            expect(form.Body.Tab.SUMMARY_TAB.Parent).toBeDefined();
            expect(() => { form.Body.Tab.SUMMARY_TAB.ContentType }).toThrow(new Error("Method not implemented."));
            expect(() => { form.Body.Tab.SUMMARY_TAB.ContentType = OptionSet.TabContentType.SingleComponent }).toThrow(new Error("Method not implemented."));
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
            var stringControl = new xrmMock.StringControlMock({
                attribute: new xrmMock.StringAttributeMock({
                    name: "numberofemployees",
                    value: "6200"
                }),
                name: "numberofemployees",
                label: "Number of Employees"
            });
            var stringHeaderControl = new xrmMock.StringControlMock({
                attribute: new xrmMock.StringAttributeMock({
                    name: "numberofemployees",
                    value: "6200"
                }),
                name: "header_numberofemployees",
                label: "Number of Employees"
            });
            var ui = new xrmMock.UiMock({
                formSelector: new xrmMock.FormSelectorMock(new xrmMock.ItemCollectionMock([new xrmMock.FormItemMock({
                    id: "8d2dbd8c-c9f8-4cb5-8838-f5a916a6098a",
                    label: "Account",
                    currentItem: true,
                    formType: XrmEnum.FormType.Update
                })])),
                controls: new xrmMock.ItemCollectionMock([
                    stringControl,
                    stringHeaderControl
                ]),
                footerSection: new xrmMock.FooterSectionMock(true),
                headerSection: new xrmMock.HeaderSectionMock(true, true, true)
            });
            var attributes = new xrmMock.ItemCollectionMock([
                new xrmMock.AttributeMock({
                    name: "numberofemployees",
                    isDirty: true
                })
            ]);
            var entity = new xrmMock.EntityMock({
                attributes: attributes
            });
            var data = new xrmMock.DataMock(entity);
            xrmMock.XrmMockGenerator.formContext = new xrmMock.FormContextMock(data, ui);
            var executionContext = xrmMock.XrmMockGenerator.formContext;
            var form = new DevKit.FormAccount(executionContext);
            expect(form.Header.NumberOfEmployees.Label).toBe("Number of Employees");
            expect(form.Header.NumberOfEmployees.ControlName).toBe("header_numberofemployees");
            expect(form.Header.BodyVisible).toBeTruthy();
            expect(form.Header.CommandBarVisible).toBeTruthy();
            expect(form.Header.TabNavigatorVisible).toBeTruthy();
            expect(form.Footer.Visible).toBeTruthy();
            form.Header.BodyVisible = false;
            form.Header.CommandBarVisible = false;
            form.Header.TabNavigatorVisible = false;
            form.Footer.Visible = false;
            expect(form.Header.BodyVisible).toBeFalsy();
            expect(form.Header.CommandBarVisible).toBeFalsy();
            expect(form.Header.TabNavigatorVisible).toBeFalsy();
            expect(form.Footer.Visible).toBeFalsy();
        });
        it('Footer', () => {
            xrmMock.XrmMockGenerator.Control.createLookup({
                name: "footer_transactioncurrencyid",
                attribute: new xrmMock.LookupAttributeMock({
                    name: "transactioncurrencyid",
                    value: [new xrmMock.LookupValueMock("27ae35af-15ab-eb11-8236-000d3a80893f", "transactioncurrency", "US Dollar", )]
                }),
                label: "Currency"
            });
            var executionContext = xrmMock.XrmMockGenerator.formContext;
            var form = new DevKit.FormAccount(executionContext);
            expect(form.Footer.TransactionCurrencyId.Label).toBe("Currency");
            expect(form.Footer.TransactionCurrencyId.ControlName).toBe("footer_transactioncurrencyid");
            expect(form.Footer.TransactionCurrencyId.Value[0].entityType).toBe("transactioncurrency");
            expect(form.Footer.TransactionCurrencyId.Value[0].id).toBe("27ae35af-15ab-eb11-8236-000d3a80893f");
            expect(form.Footer.TransactionCurrencyId.Value[0].name).toBe("US Dollar");
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
                        Eras: [1],
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
                    AbbreviatedDayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    ShortestDayNames: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                    DayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    AbbreviatedMonthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", ""],
                    MonthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
                    AbbreviatedMonthGenitiveNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", ""],
                    MonthGenitiveNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
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
            var form = new DevKit.FormAccount(executionContext, "web-resource-language");

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
    describe('Real Account', () => {
        beforeEach(function () {
            var XrmMockGenerator = xrmMock.XrmMockGenerator.initialise();
            XrmMockGenerator.Panel = new xrmMock.PanelMock();
            XrmMockGenerator.Encoding = new xrmMock.EncodingMock();
            XrmMockGenerator.Device = new xrmMock.DeviceMock();
            XrmMockGenerator.Navigation = new xrmMock.NavigationStaticMock();
        });
        it('Account OnLoad with XrmEnum.FormType.Create', () => {
            //setup
            var controlName = new xrmMock.StringControlMock({
                attribute: new xrmMock.StringAttributeMock({
                    name: "name",
                    value: "LE VAN PHUOC"
                }),
                name: "name",
                label: "Account Name",
                disabled: false
            });
            var entity = new xrmMock.EntityMock({
                entityName: "account",
                id: "8d2dbd8c-c9f8-4cb5-8838-f5a916a6098f",
                primaryValue: "LE VAN PHUOC"
            });
            var data = new xrmMock.DataMock(entity);
            var ui = new xrmMock.UiMock({
                formSelector: new xrmMock.FormSelectorMock(new xrmMock.ItemCollectionMock([new xrmMock.FormItemMock({
                    id: "8d2dbd8c-c9f8-4cb5-8838-f5a916a6098a",
                    label: "Account",
                    currentItem: true,
                    formType: XrmEnum.FormType.Create
                })])),
                controls: new xrmMock.ItemCollectionMock([
                    controlName
                ])
            });
            xrmMock.XrmMockGenerator.Attribute.createDate("modifiedon", new Date());
            xrmMock.XrmMockGenerator.formContext = new xrmMock.FormContextMock(data, ui);
            var executionContext = xrmMock.XrmMockGenerator.formContext;
            //run
            formAccount.OnLoad(executionContext);
            //result
            var form = new DevKit.FormAccount(executionContext);
            expect(form.Body.Name.Disabled).toBeFalsy();
            expect(form.Body.ModifiedOn.ShowTime).toBeFalsy();
        });
        it('Account OnLoad with XrmEnum.FormType.Update', () => {
            //setup
            var controlName = new xrmMock.StringControlMock({
                attribute: new xrmMock.StringAttributeMock({
                    name: "name",
                    value: "LE VAN PHUOC"
                }),
                name: "name",
                label: "Account Name",
                disabled: false
            });
            var entity = new xrmMock.EntityMock({
                entityName: "account",
                id: "8d2dbd8c-c9f8-4cb5-8838-f5a916a6098f",
                primaryValue: "LE VAN PHUOC"
            });
            var data = new xrmMock.DataMock(entity);
            var ui = new xrmMock.UiMock({
                formSelector: new xrmMock.FormSelectorMock(new xrmMock.ItemCollectionMock([new xrmMock.FormItemMock({
                    id: "8d2dbd8c-c9f8-4cb5-8838-f5a916a6098a",
                    label: "Account",
                    currentItem: true,
                    formType: XrmEnum.FormType.Update
                })])),
                controls: new xrmMock.ItemCollectionMock([
                    controlName
                ])
            });
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