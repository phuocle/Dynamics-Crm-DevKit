//@ts-check
///<reference path='xrm-mock.d.ts' />
///<reference path='../node_modules/@types/xrm/index.d.ts' />
///<reference path='../node_modules/@types/sinon/index.d.ts' />
///<reference path='../node_modules/@types/jasmine/index.d.ts' />
// @ts-ignore
define(['xrm-mock', 'sinon'], function (/** @type {XrmMock} */_xrm_mock, /** @type {sinon} */_sinon) {
    /*
    describe('devkit_WebApi.test.js Test', function () {
        beforeEach(function () {
            var XrmMockGenerator = _xrm_mock.XrmMockGenerator.initialise();
            XrmMockGenerator.Panel = new _xrm_mock.PanelMock();
            XrmMockGenerator.Encoding = new _xrm_mock.EncodingMock();
            XrmMockGenerator.Device = new _xrm_mock.DeviceMock();
            XrmMockGenerator.Navigation = new _xrm_mock.NavigationStaticMock();
        });
        it('DevKit.Form.Controls.ControlString', () => {
            _xrm_mock.XrmMockGenerator.Attribute.createString({
                    attributeType: "string",
                    format: "text",
                    isDirty: true,
                    name: "devkit_name",
                    requiredLevel: "required",
                    value: "CONTROL-STRING",
                    maxLength: 100,
                    submitMode: "always"
                },
                {
                    controlType: "standard",
                    disabled: true,
                    label: "CONTROL-STRING-LABEL",
                    name: "devkit_name",
                    visible: true
                }
            );
            var executionContext = _xrm_mock.XrmMockGenerator.formContext;
            var form = new Tomato.FormWebApi(executionContext);
            //CHECK DATA
            //TODO: form.Body.devkit_Name.AddNotification
            var addOnChangeData = "";
            var devkit_NameAddOnChange = function (executionContent) { addOnChangeData = "ON-CHANGED"; }
            form.Body.devkit_Name.AddOnChange(devkit_NameAddOnChange);
            form.Body.devkit_Name.FireOnChange();
            expect(addOnChangeData).toBe("ON-CHANGED");
            addOnChangeData = "REMOVE";
            form.Body.devkit_Name.RemoveOnChange(devkit_NameAddOnChange);
            form.Body.devkit_Name.FireOnChange();
            expect(addOnChangeData).toBe("REMOVE");

            //TODO: form.Body.devkit_Name.AttributeParent
            expect(form.Body.devkit_Name.AttributeType).toBe(OptionSet.FieldAttributeType.String);
            //TODO: form.Body.devkit_Name.ClearNotification
            //TODO: form.Body.devkit_Name.ControlParent
            expect(form.Body.devkit_Name.ControlType).toBe(OptionSet.FieldControlType.Standard);
            expect(form.Body.devkit_Name.Disabled).toBe(true);
            form.Body.devkit_Name.Disabled = false;
            expect(form.Body.devkit_Name.Disabled).toBe(false);
            //TODO: form.Body.devkit_Name.Focus
            expect(form.Body.devkit_Name.Format).toBe(OptionSet.FieldFormat.Text);
            expect(form.Body.devkit_Name.IsDirty).toBe(true);
            expect(form.Body.devkit_Name.Label).toBe("CONTROL-STRING-LABEL");
            form.Body.devkit_Name.Label = "CONTROL-STRING-LABEL-CHANGED";
            expect(form.Body.devkit_Name.Label).toBe("CONTROL-STRING-LABEL-CHANGED");
            expect(form.Body.devkit_Name.MaxLength).toBe(100);
            expect(form.Body.devkit_Name.Name).toBe("devkit_name");
            //TODO: form.Body.devkit_Name.Name2
            expect(form.Body.devkit_Name.RequiredLevel).toBe(OptionSet.FieldRequiredLevel.Required);
            form.Body.devkit_Name.RequiredLevel = OptionSet.FieldRequiredLevel.Recommended;
            expect(form.Body.devkit_Name.RequiredLevel).toBe(OptionSet.FieldRequiredLevel.Recommended);
            //TODO: form.Body.devkit_Name.SetNotification
            expect(form.Body.devkit_Name.SubmitMode).toBe(OptionSet.FieldSubmitMode.Always);
            form.Body.devkit_Name.SubmitMode = OptionSet.FieldSubmitMode.Never;
            expect(form.Body.devkit_Name.SubmitMode).toBe(OptionSet.FieldSubmitMode.Never);
            //TODO: form.Body.devkit_Name.UserPrivilege
            //TODO: form.Body.devkit_Name.Valid
            expect(form.Body.devkit_Name.Value).toBe("CONTROL-STRING");
            form.Body.devkit_Name.Value = "CONTROL-STRING-CHANGED";
            expect(form.Body.devkit_Name.Value).toBe("CONTROL-STRING-CHANGED");
            form.Body.devkit_Name.Value = null;
            expect(form.Body.devkit_Name.Value).toBeNull();
            //TODO: form.Body.devkit_Name.Value2
            expect(form.Body.devkit_Name.Visible).toBeTruthy();
            form.Body.devkit_Name.Visible = false;
            expect(form.Body.devkit_Name.Visible).toBeFalsy();
        });
        it('DevKit.Form.Controls.ControlInteger', () => {
            _xrm_mock.XrmMockGenerator.Attribute.createNumber({
                name: "devkit_wholenumbernone",
                min: 100,
                max: 1000
            });
            var executionContext = _xrm_mock.XrmMockGenerator.formContext;
            var form = new Tomato.FormWebApi(executionContext);
            expect(form.Body.devkit_WholeNumberNone.Min).toBe(100);
            expect(form.Body.devkit_WholeNumberNone.Max).toBe(1000);
        });
        it('DevKit.Form.Controls.ControlDouble', () => {
            _xrm_mock.XrmMockGenerator.Attribute.createNumber({
                name: "devkit_floatingpointnumber",
                precision: 2,
            });
            var executionContext = _xrm_mock.XrmMockGenerator.formContext;
            var form = new Tomato.FormWebApi(executionContext);
            expect(form.Body.devkit_FloatingPointNumber.Precision).toBe(2);
            //@XRM-MOCK - dont have this function
            //form.Body.devkit_FloatingPointNumber.Precision = 1;
            //expect(form.Body.devkit_FloatingPointNumber.Precision).toBe(1);
        });
        it('DevKit.Form.Controls.ControlOptionSet', () => {
            _xrm_mock.XrmMockGenerator.Attribute.createOptionSet({
                    name: "devkit_singleoptionsetcode",
                    initialValue: 100000001,
                    options: [
                        { text: "Crm 4", value: 100000000 },
                        { text: "Crm 2011", value: 100000001 },
                        { text: "Crm 2013", value: 100000002 },
                        { text: "Crm 2015", value: 100000003 },
                        { text: "Crm 2016", value: 100000004 },
                        { text: "Dynamics 365", value: 100000005 }
                    ],
                    value: 100000001
                },
                {
                    name: "devkit_singleoptionsetcode",
                    options: [
                        { text: "Crm 4", value: 100000000 },
                        { text: "Crm 2011", value: 100000001 },
                        { text: "Crm 2013", value: 100000002 },
                        { text: "Crm 2015", value: 100000003 },
                        { text: "Crm 2016", value: 100000004 },
                        { text: "Dynamics 365", value: 100000005 }
                    ]
                }
            );
            var executionContext = _xrm_mock.XrmMockGenerator.formContext;
            var form = new Tomato.FormWebApi(executionContext);
            expect(form.Body.devkit_SingleOptionSetCode.InitialValue).toBe(OptionSet.devkit_WebApi.devkit_SingleOptionSetCode.Crm_2011);
            expect(form.Body.devkit_SingleOptionSetCode.Options.length).toBe(6);
            expect(form.Body.devkit_SingleOptionSetCode.Options[0].text).toBe("Crm 4");
            expect(form.Body.devkit_SingleOptionSetCode.Options[0].value).toBe(100000000);
            expect(form.Body.devkit_SingleOptionSetCode.SelectedOption.text).toBe("Crm 2011");
            expect(form.Body.devkit_SingleOptionSetCode.SelectedOption.value).toBe(100000001);
            expect(form.Body.devkit_SingleOptionSetCode.Text).toBe("Crm 2011");
            var option = form.Body.devkit_SingleOptionSetCode.Option("Dynamics 365");
            expect(option.text).toBe("Dynamics 365");
            expect(option.value).toBe(100000005);
            form.Body.devkit_SingleOptionSetCode.AddOption("Dynamics 365 v.9", 100000006, 0);
            //XRM-MOCK don't have method getOptions in the control
            form.Body.devkit_SingleOptionSetCode.RemoveOption(100000003);
            form.Body.devkit_SingleOptionSetCode.ClearOptions();
        });
        it('DevKit.Form.Controls.ControlDateTime', () => {
            _xrm_mock.XrmMockGenerator.Attribute.createDate(
                {
                    name: "devkit_userlocaldateandtime"
                },
                {
                    name: "devkit_userlocaldateandtime",
                    showTime: true
                }
            );
            var executionContext = _xrm_mock.XrmMockGenerator.formContext;
            var form = new Tomato.FormWebApi(executionContext);
            expect(form.Body.devkit_UserLocalDateAndTime.ShowTime).toBeTruthy();
            form.Body.devkit_UserLocalDateAndTime.ShowTime = false;
            expect(form.Body.devkit_UserLocalDateAndTime.ShowTime).toBeFalsy();
        });
        it('DevKit.Form.Controls.ControlLookup', () => {
            var lookup = _xrm_mock.XrmMockGenerator.Control.createLookup(new _xrm_mock.LookupControlMock({
                name: "devkit_linkwebapiid",
                attribute: new _xrm_mock.LookupAttributeMock({
                    name: "devkit_linkwebapiid",
                    isPartyList: true,
                    value: [new _xrm_mock.LookupValueMock("id", "devkit_webapi", "name")]
                }),
                views: [{
                        entityName: "devkit_webapi",
                        fetchXml: "<fetchxml/>",
                        layoutXml: "<layoutxml/>",
                        viewDisplayName: "Lookup WebApi",
                        viewId: "DefaultViewId",
                        isDefault: true
                    }, {
                        entityName: "devkit_webapi",
                        fetchXml: "<fetchxml2/>",
                        layoutXml: "<layoutxml2/>",
                        viewDisplayName: "Lookup WebApi2",
                        viewId: "DefaultViewId2",
                        isDefault: false
                    }
                ]
            }));
            var executionContext = _xrm_mock.XrmMockGenerator.formContext;
            var form = new Tomato.FormWebApi(executionContext);
            expect(form.Body.devkit_LinkWebApiId.DefaultView).toBe("DefaultViewId");
            form.Body.devkit_LinkWebApiId.DefaultView = "DefaultViewId2";
            expect(form.Body.devkit_LinkWebApiId.DefaultView).toBe("DefaultViewId2");
            expect(form.Body.devkit_LinkWebApiId.IsPartyList).toBeTruthy();
            expect(form.Body.devkit_LinkWebApiId.Value).not.toBeNull();
            expect(form.Body.devkit_LinkWebApiId.Value[0].id).toBe("id");
            expect(form.Body.devkit_LinkWebApiId.Value[0].name).toBe("name");
            expect(form.Body.devkit_LinkWebApiId.Value[0].entityType).toBe("devkit_webapi");

            expect(() => { form.Body.devkit_LinkWebApiId.SetNotification("Notification Message", "NotificationId") }).toThrow(new Error("set notification not implemented"));
            expect(() => { form.Body.devkit_LinkWebApiId.ClearNotification("NotificationId") }).toThrow(new Error("clear notification not implemented"));
            expect(() => { form.Body.devkit_LinkWebApiId.EntityTypes }).toThrow(new Error("Method not implemented."));
            expect(() => { form.Body.devkit_LinkWebApiId.EntityTypes = ["account"] }).toThrow(new Error("Method not implemented."));

            expect(lookup.filters.length).toBe(0);
            var devkit_LinkWebApiIdAddPreSearch = () => {
                var filter = `
<filter type="and">
    <condition attribute="devkit_name" operator="eq" value="ABCD" />
</filter>
`;
                var form = new Tomato.FormWebApi(executionContext);
                form.Body.devkit_LinkWebApiId.AddCustomFilter(filter, "devkit_webapi");
            }
            form.Body.devkit_LinkWebApiId.AddPreSearch(devkit_LinkWebApiIdAddPreSearch);
            devkit_LinkWebApiIdAddPreSearch();
            expect(lookup.filters.length).toBe(1);

            expect(lookup.views.length).toBe(2);
            form.Body.devkit_LinkWebApiId.AddCustomView("viewid", "enttiyName", "viewDisplayName", "fetchXml", "layoutXml", false);
            expect(lookup.views.length).toBe(3);
        });
        it('TAB & SECTION', () => {
            var ui = new _xrm_mock.UiMock({
                formSelector: new _xrm_mock.FormSelectorMock(
                    new _xrm_mock.ItemCollectionMock([
                        new _xrm_mock.FormItemMock({
                            label: "DEVKIT WEBAPI FORM",
                            id: "devkit_webapi_form_id",
                            formType: 1,
                            currentItem: true
                        })
                    ])
                ),
            });
            var tab = _xrm_mock.XrmMockGenerator.Tab.createTab("ADMINISTRATOR", "TAB LABEL", true, "expanded", ui, null);
            _xrm_mock.XrmMockGenerator.Section.createSection("ADMINISTRATOR_section_1", "SECTION LABEL", true, tab, null);
            var executionContext = _xrm_mock.XrmMockGenerator.formContext;
            var form = new Tomato.FormWebApi(executionContext);
            expect(form.Body.Tab.ADMINISTRATOR.DisplayState).toBe(OptionSet.TabDisplayState.Expanded);
            form.Body.Tab.ADMINISTRATOR.DisplayState = OptionSet.TabDisplayState.Collapsed;
            expect(form.Body.Tab.ADMINISTRATOR.DisplayState).toBe(OptionSet.TabDisplayState.Collapsed);
            expect(form.Body.Tab.ADMINISTRATOR.Label).toBe("TAB LABEL");
            expect(form.Body.Tab.ADMINISTRATOR.Name).toBe("ADMINISTRATOR");
            expect(form.Body.Tab.ADMINISTRATOR.Parent).toBeDefined();
            expect(form.Body.Tab.ADMINISTRATOR.Visible).toBeTruthy();
            form.Body.Tab.ADMINISTRATOR.Visible = false;
            expect(form.Body.Tab.ADMINISTRATOR.Visible).toBeFalsy();
            expect(form.Body.Tab.ADMINISTRATOR.Section.ADMINISTRATOR_section_1.Label).toBe("SECTION LABEL");
            expect(form.Body.Tab.ADMINISTRATOR.Section.ADMINISTRATOR_section_1.Name).toBe("ADMINISTRATOR_section_1");
            expect(form.Body.Tab.ADMINISTRATOR.Section.ADMINISTRATOR_section_1.Parent).toBeDefined();
            expect(form.Body.Tab.ADMINISTRATOR.Section.ADMINISTRATOR_section_1.Visible).toBeTruthy();
            form.Body.Tab.ADMINISTRATOR.Section.ADMINISTRATOR_section_1.Visible = false;
            expect(form.Body.Tab.ADMINISTRATOR.Section.ADMINISTRATOR_section_1.Visible).toBeFalsy();

            expect(tab.tabStateChangeHandlers.length).toBe(0);
            form.Body.Tab.ADMINISTRATOR.AddTabStateChange(() => { });
            expect(tab.tabStateChangeHandlers.length).toBe(1);
            form.Body.Tab.ADMINISTRATOR.RemoveTabStateChange(() => { });
            expect(tab.tabStateChangeHandlers.length).toBe(0);
            form.Body.Tab.ADMINISTRATOR.Focus();

        });
        it('HEADER & FOOTER', () => {
            _xrm_mock.XrmMockGenerator.Attribute.createString(
                {
                    attributeType: "string",
                    format: "text",
                    isDirty: true,
                    name: "header_devkit_name",
                    requiredLevel: "required",
                    value: "CONTROL-STRING-HEADER",
                    maxLength: 100,
                    submitMode: "always"
                },
                {
                    controlType: "standard",
                    disabled: true,
                    label: "CONTROL-STRING-LABEL",
                    name: "header_devkit_name",
                    visible: true
                }
            );
            _xrm_mock.XrmMockGenerator.Attribute.createString(
                {
                    attributeType: "string",
                    format: "text",
                    isDirty: true,
                    name: "footer_devkit_name",
                    requiredLevel: "required",
                    value: "CONTROL-STRING-FOOTER",
                    maxLength: 100,
                    submitMode: "always"
                },
                {
                    controlType: "standard",
                    disabled: true,
                    label: "CONTROL-STRING-LABEL",
                    name: "footer_devkit_name",
                    visible: true
                }
            );
            var executionContext = _xrm_mock.XrmMockGenerator.formContext;
            var form = new Tomato.FormWebApi(executionContext);
            expect(form.Header.devkit_Name.Value).toBe("CONTROL-STRING-HEADER");
            expect(form.Footer.devkit_Name.Value).toBe("CONTROL-STRING-FOOTER");
        });
        it('Utility', () => {
            var context = _xrm_mock.XrmMockGenerator.context = new _xrm_mock.ContextMock({
                clientContext: new _xrm_mock.ClientContextMock("Web", "Online"),
                clientUrl: "https://clienturl.fake",
                userId: "{00000000-0000-0000-0000-000000000000}",
                userName: "DEVKIT",
                userLcid: 1033,
                userRoles: ["{00000001-0000-0000-0000-000000000000}", "{00000002-0000-0000-0000-000000000000}"],
                version: "10.0.0.0",
                userSettings: new _xrm_mock.UserSettingsMock({
                    isGuidedHelpEnabled: true,
                    userId: "DEVKIT-USERID",
                    userName: "DEVKIT-USERNAME",
                    isHighContrastEnabled: false,
                    isRTL: false,
                    defaultDashboardId: "DEFAULT-DASHBOARD-ID",
                    languageId: 1066,
                    transactionCurrencyId: "VND",
                    securityRolePrivileges: ["GUID1", "GUID2"],
                    securityRoles: ["NAME1", "NAME2", "NAME3"]
                }),
                orgUniqueName: "OrgUniqueName",
                currentTheme: "Office12Blue",
                isAutoSaveEnabled: true,
                orgLcid: 1033,
                timeZoneOffset: 7
            });
            context.organizationSettings = new _xrm_mock.OrganizationSettingsMock({
                baseCurrencyId: "USD",
                defaultCountryCode: "VN",
                languageId: 1033,
                organizationId: "OrgGuid",
                uniqueName: "OrgUniqueName",
                isAutoSaveEnabled: true,
                useSkypeProtocol: true
            });

            var executionContext = _xrm_mock.XrmMockGenerator.formContext;
            var form = new Tomato.FormWebApi(executionContext);
            //TODO: form.Utility.LearningPathAttributeName
            expect(() => { form.Utility.ShowProgressIndicator("Waiting"); }).toThrow(new Error("Method not implemented."));
            expect(() => { form.Utility.CloseProgressIndicator(); }).toThrow(new Error("Method not implemented."));
            expect(() => { form.Utility.EntityMetadata("devkit_webapi", null, null, null); }).toThrow(new Error("Method not implemented."));
            expect(() => { form.Utility.ResourceString("resourcename", "key"); }).toThrow(new Error("Method not implemented."));
            expect(() => { form.Utility.AllowedStatusTransitions(null, null, null, null); }).toThrow(new Error("Method not implemented."));
            //TODO: form.Utility.Resource
            expect(() => { form.Utility.InvokeProcessAction("name", null, null, null); }).toThrow(new Error("Method not implemented."));
            expect(() => { form.Utility.LookupObjects(null, null, null); }).toThrow(new Error("Method not implemented."));
            expect(() => { form.Utility.RefreshParentGrid(null); }).toThrow(new Error("Method not implemented."));
            expect(form.Utility.ClientUrl).toBe("https://clienturl.fake");
            expect(() => { form.Utility.CurrentAppUrl; }).toThrow(new Error("Method not implemented."));
            expect(form.Utility.Version).toBe("10.0.0.0");
            //MISSED - XRM-MOCK - Type mistake expect(() => { form.Utility.IsOnPremises; }).toThrow(new Error("Method not implemented."));
            expect(form.Utility.Client.ClientName).toBe(OptionSet.ClientName.Web);
            expect(form.Utility.Client.ClientState).toBe(OptionSet.ClientState.Online);
            expect(() => { form.Utility.Client.FormFactor }).toThrow(new Error("Method not implemented."));
            expect(() => { form.Utility.Client.IsOffline }).toThrow(new Error("Method not implemented."));

            expect(form.Utility.OrganizationSettings.BaseCurrencyId).toBe("USD");
            expect(form.Utility.OrganizationSettings.DefaultCountryCode).toBe("VN");
            expect(form.Utility.OrganizationSettings.IsAutoSaveEnabled).toBeTruthy();
            expect(form.Utility.OrganizationSettings.LanguageId).toBe(1033);
            expect(form.Utility.OrganizationSettings.OrganizationId).toBe("OrgGuid");
            expect(form.Utility.OrganizationSettings.UniqueName).toBe("OrgUniqueName");
            expect(form.Utility.OrganizationSettings.UseSkypeProtocol).toBeTruthy();

            //MISSED: form.Utility.UserSettings.DateFormattingInfo
            expect(form.Utility.UserSettings.DefaultDashboardId).toBe("DEFAULT-DASHBOARD-ID");
            expect(form.Utility.UserSettings.IsGuidedHelpEnabled).toBeTruthy();
            expect(form.Utility.UserSettings.IsHighContrastEnabled).toBeFalsy();
            expect(form.Utility.UserSettings.IsRTL).toBeFalsy();
            expect(form.Utility.UserSettings.LanguageId).toBe(1066);
            expect(form.Utility.UserSettings.SecurityRolePrivileges.length).toBe(2);
            expect(form.Utility.UserSettings.SecurityRoles.length).toBe(3);
            expect(() => { form.Utility.UserSettings.TimeZoneOffsetMinutes }).toThrow(new Error("Not implemented"));

            expect(() => { form.Utility.AdvancedConfigSetting(OptionSet.AdvancedConfigSetting.MaxChildIncidentNumber); }).toThrow(new Error("Method not implemented."));
            expect(() => { form.Utility.CurrentAppName(null, null); }).toThrow(new Error("Method not implemented."));
            expect(() => { form.Utility.CurrentAppProperties(null, null) }).toThrow(new Error("Method not implemented."));
            expect(form.Utility.PrependOrgName("abc-")).toBe("abc-OrgUniqueName");

            expect(() => { form.Utility.LoadPanel("url", "title"); }).toThrow(new Error("Not implemented."));

            expect(() => { form.Utility.XmlAttributeEncode("code"); }).toThrow(new Error("Not implemented"));
            expect(() => { form.Utility.XmlEncode("code"); }).toThrow(new Error("Not implemented"));

            expect(() => { form.Utility.CaptureAudio(null, null) }).toThrow(new Error("Not implemented."));
            expect(() => { form.Utility.CaptureImage(null, null, null) }).toThrow(new Error("Not implemented."));
            expect(() => { form.Utility.CaptureVideo(null, null) }).toThrow(new Error("Not implemented."));
            expect(() => { form.Utility.BarcodeValue(null, null) }).toThrow(new Error("Not implemented."));
            expect(() => { form.Utility.CurrentPosition(null, null) }).toThrow(new Error("Not implemented."));
            expect(() => { form.Utility.PickFile(null, null, null) }).toThrow(new Error("Not implemented."));

            expect(() => { form.Utility.OpenAlertDialog(null, null, null, null); }).toThrow(new Error("Navigation methods not implemented. Consider stubbing calls using a tool such as Sinon.JS"));
            expect(() => { form.Utility.OpenConfirmDialog(null, null, null, null); }).toThrow(new Error("Navigation methods not implemented. Consider stubbing calls using a tool such as Sinon.JS"));
            expect(() => { form.Utility.OpenErrorDialog(null, null, null); }).toThrow(new Error("Navigation methods not implemented. Consider stubbing calls using a tool such as Sinon.JS"));
            expect(() => { form.Utility.OpenFile(null, null); }).toThrow(new Error("Navigation methods not implemented. Consider stubbing calls using a tool such as Sinon.JS"));
            expect(() => { form.Utility.OpenForm(null, null, null, null); }).toThrow(new Error("Navigation methods not implemented. Consider stubbing calls using a tool such as Sinon.JS"));
            expect(() => { form.Utility.OpenUrl(null, null); }).toThrow(new Error("Navigation methods not implemented. Consider stubbing calls using a tool such as Sinon.JS"));
            expect(() => { form.Utility.OpenWebResource(null, null, null); }).toThrow(new Error("Navigation methods not implemented. Consider stubbing calls using a tool such as Sinon.JS"));

            //MISSED: form.Utility.NavigateTo

        });
        it('Field Removed', () => {
            var executionContext = _xrm_mock.XrmMockGenerator.formContext;
            var form = new Tomato.FormWebApi(executionContext);
            expect(() => { form.Body.devkit_SingleLineofTextUrl.Value }).toThrow(new Error("field: devkit_singlelineoftexturl removed on form"));
        });
    });
    */

    //copy "C:\src\github\phuocle\xrm-mock\build\index.js" "C:\src\github\phuocle\Dynamics-Crm-DevKit\test\Fpt.Tomato\Fpt.Tomato.WebResource\node_modules\xrm-mock\build\index.js"

    describe('loadForm(formContext)', () => {
        beforeEach(function () {
            var XrmMockGenerator = _xrm_mock.XrmMockGenerator.initialise();
            XrmMockGenerator.Panel = new _xrm_mock.PanelMock();
            XrmMockGenerator.Encoding = new _xrm_mock.EncodingMock();
            XrmMockGenerator.Device = new _xrm_mock.DeviceMock();
            XrmMockGenerator.Navigation = new _xrm_mock.NavigationStaticMock();
        });
        it('formContext.data', () => {
            var attributes = new _xrm_mock.ItemCollectionMock([
                new _xrm_mock.AttributeMock({
                    name: "devkiit_name",
                    isDirty: true
                })
            ]);
            var entity = new _xrm_mock.EntityMock({
                attributes: attributes
            });
            var data = new _xrm_mock.DataMock(entity);
            var ui = new _xrm_mock.UiMock({});
            _xrm_mock.XrmMockGenerator.formContext = new _xrm_mock.FormContextMock(data, ui);
            var executionContext = _xrm_mock.XrmMockGenerator.formContext;
            var form = new Tomato.FormWebApi(executionContext);
            //===========================================================================================================================
            expect(data.loadEventHandlers.length).toBe(0);
            var fun1 = function (executionContext) { };
            var fun2 = function (executionContext) { };
            form.DataAddOnLoad(fun1);
            form.DataAddOnLoad(fun2);
            expect(data.loadEventHandlers.length).toBe(2);
            expect(() => { form.DataIsDirty }).toThrow(new Error("getIsDirty not implemented"));
            expect(() => { form.DataIsValid }).toThrow(new Error("isValid not implemented"));
            expect(() => { form.Refresh(null); }).toThrow(new Error("refresh not implemented"));
            form.DataRemoveOnLoad(fun2);
            expect(data.loadEventHandlers.length).toBe(1);
            expect(() => { form.Save(null, null, null); }).toThrow(new Error("save not implemented"));
            //===========================================================================================================================
        })
        it('formContext.data.entity', () => {
            var attributes = new _xrm_mock.ItemCollectionMock([
                new _xrm_mock.AttributeMock({
                    name: "devkit_name",
                    isDirty: true
                })
            ]);
            var entity = new _xrm_mock.EntityMock({
                entityName: "devkit_entityname",
                attributes: attributes,
                id: "{00000000-0000-0000-0000-000000000000}",
                primaryValue: "LE VAN PHUOC"
            });
            var data = new _xrm_mock.DataMock(entity);
            var ui = new _xrm_mock.UiMock({});
            _xrm_mock.XrmMockGenerator.formContext = new _xrm_mock.FormContextMock(data, ui);
            var executionContext = _xrm_mock.XrmMockGenerator.formContext;
            var form = new Tomato.FormWebApi(executionContext);
            //===========================================================================================================================
            expect(form.Attributes.getLength()).toBe(1);
            form.Attributes.forEach((item, i) => {
                item.setValue("AAA");
            });
            expect(executionContext.getAttribute("devkit_name").getValue()).toBe("AAA");
            var item2 = form.Attributes.get("devkit_name");
            item2.setValue("BBB");
            expect(executionContext.getAttribute("devkit_name").getValue()).toBe("BBB");
            var item3 = form.Attributes.get(0);
            item3.setValue("CCC");
            expect(executionContext.getAttribute("devkit_name").getValue()).toBe("CCC");
            expect(entity.saveEventHandlers.length).toBe(0);
            var item4 = form.Attributes.get((i) => { return i.getValue() === "CCC"; });
            expect(item4).toBeDefined();
            var fun1 = function (executionContext) { };
            var fun2 = function (executionContext) { };
            form.AddOnSave(fun1);
            form.AddOnSave(fun2);
            expect(entity.saveEventHandlers.length).toBe(2);
            expect(() => { form.DataXml; }).toThrow(new Error("getDataXml not implemented"));
            expect(form.EntityName).toBe("devkit_entityname");
            expect(form.EntityReference).toBeDefined();
            expect(form.EntityReference.entityType).toBe("devkit_entityname");
            expect(form.EntityReference.id).toBe("{00000000-0000-0000-0000-000000000000}");
            expect(form.EntityReference.name).toBe("LE VAN PHUOC");
            expect(form.EntityId).toBe("{00000000-0000-0000-0000-000000000000}");
            expect(form.EntityIsDirty).toBeTruthy();
            expect(form.PrimaryAttributeValue).toBe("LE VAN PHUOC");
            expect(() => { form.EntityIsValid; }).toThrow(new Error("isValid not implemented."));
            form.RemoveOnSave(fun2);
            expect(entity.saveEventHandlers.length).toBe(1);
            //===========================================================================================================================
        });
        it('formContext.ui', () => {
            var attributes = new _xrm_mock.ItemCollectionMock([
                new _xrm_mock.AttributeMock({
                    name: "devkiit_name",
                    isDirty: true
                })
            ]);
            var entity = new _xrm_mock.EntityMock({
                attributes: attributes
            });
            var data = new _xrm_mock.DataMock(entity);
            var formSelector = new _xrm_mock.FormSelectorMock(
                new _xrm_mock.ItemCollectionMock([
                    new _xrm_mock.FormItemMock({
                        label: "DEVKIT WEBAPI FORM",
                        id: "devkit_webapi_form_id",
                        formType: 2,
                        currentItem: true
                    })
                ])
            );
            var ui = new _xrm_mock.UiMock({ formSelector: formSelector });
            _xrm_mock.XrmMockGenerator.formContext = new _xrm_mock.FormContextMock(data, ui);
            var executionContext = _xrm_mock.XrmMockGenerator.formContext;
            var form = new Tomato.FormWebApi(executionContext);
            //===========================================================================================================================
            expect(form.Controls.getLength()).toBe(0);
            //expect(form.UiAddOnLoad(null)).toBeDefined();
            expect(form.ClearFormNotification("AAA")).toBeFalsy();
            expect(() => { form.Close(); }).toThrow(new Error("close not implemented"));
            expect(form.FormType).toBe(OptionSet.FormType.Update);
            expect(() => { form.ViewPortHeight }).toThrow(new Error("getViewPortHeight not implemented"));
            expect(() => { form.ViewPortWidth }).toThrow(new Error("getViewPortWidth not implemented"));
            expect(() => { form.RefreshRibbon() }).toThrow(new Error("refreshRibbon not implemented"));
            //form.UiRemoveOnLoad
            //setFormEntityName
            expect(form.SetFormNotification("AAA", OptionSet.FormNotificationLevel.Error, "KEY")).toBeTruthy();
            expect(ui.formNotifications.length).toBe(1);
            expect(ui.formNotifications[0].level).toBe("ERROR");
            expect(ui.formNotifications[0].message).toBe("AAA");
            expect(ui.formNotifications[0].uniqueId).toBe("KEY");
            expect(form.ClearFormNotification("KEY")).toBeTruthy();
            //===========================================================================================================================
        });
        it('formContext.ui.formSelector', () => {
            var attributes = new _xrm_mock.ItemCollectionMock([
                new _xrm_mock.AttributeMock({
                    name: "devkiit_name",
                    isDirty: true
                })
            ]);
            var entity = new _xrm_mock.EntityMock({
                attributes: attributes
            });
            var data = new _xrm_mock.DataMock(entity);
            var formSelector = new _xrm_mock.FormSelectorMock(
                new _xrm_mock.ItemCollectionMock([
                    new _xrm_mock.FormItemMock({
                        label: "DEVKIT WEBAPI FORM",
                        id: "devkit_webapi_form_id",
                        formType: 2,
                        currentItem: true
                    })
                ])
            );
            var ui = new _xrm_mock.UiMock({ formSelector: formSelector });
            _xrm_mock.XrmMockGenerator.formContext = new _xrm_mock.FormContextMock(data, ui);
            var executionContext = _xrm_mock.XrmMockGenerator.formContext;
            var form = new Tomato.FormWebApi(executionContext);
            //===========================================================================================================================
            expect(form.FormId).toBe("devkit_webapi_form_id");
            expect(form.FormLabel).toBe("DEVKIT WEBAPI FORM");
            expect(() => { form.FormNavigate(0) }).toThrow(new Error("Form navigation not implemented."));
            expect(() => { form.FormIsVisible(0) }).toThrow(new Error("getVisible not implemented."));
            expect(() => { form.FormSetVisible(0, null) }).toThrow(new Error("setVisible not implemented."));
        });
    });
    describe('Atributes', () => {
        beforeEach(function () {
            var XrmMockGenerator = _xrm_mock.XrmMockGenerator.initialise();
            XrmMockGenerator.Panel = new _xrm_mock.PanelMock();
            XrmMockGenerator.Encoding = new _xrm_mock.EncodingMock();
            XrmMockGenerator.Device = new _xrm_mock.DeviceMock();
            XrmMockGenerator.Navigation = new _xrm_mock.NavigationStaticMock();
        });
        it('All attribute types', () => {
            _xrm_mock.XrmMockGenerator.Attribute.createString({
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
            var executionContext = _xrm_mock.XrmMockGenerator.formContext;
            var form = new Tomato.FormTest(executionContext);

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
            _xrm_mock.XrmMockGenerator.Attribute.createBoolean({
                name: "abc_boolean",
                initialValue: true
            });

            var executionContext = _xrm_mock.XrmMockGenerator.formContext;
            var form = new Tomato.FormTest(executionContext);
            expect(form.Body.abc_Boolean.InitialValue).toBeTruthy();
        });
        it('Lookup attribute type', () => {
            var lookup = _xrm_mock.XrmMockGenerator.Control.createLookup(new _xrm_mock.LookupControlMock({
                name: "abc_lookup",
                attribute: new _xrm_mock.LookupAttributeMock({
                    name: "abc_lookup",
                    isPartyList: true
                })
            }));
            var executionContext = _xrm_mock.XrmMockGenerator.formContext;
            var form = new Tomato.FormTest(executionContext);

            expect(form.Body.abc_Lookup.IsPartyList).toBeTruthy();
        });
        it('MultiSelectOptionSet and OptionSet attribute types', () => {
            _xrm_mock.XrmMockGenerator.Attribute.createOptionSet({
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
            var executionContext = _xrm_mock.XrmMockGenerator.formContext;
            var form = new Tomato.FormTest(executionContext);

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
            _xrm_mock.XrmMockGenerator.Attribute.createNumber({
                name: "abc_floatingpointnumber",
                max: 123.78,
                min: 12.84,
                precision: 2,
            });
            var executionContext = _xrm_mock.XrmMockGenerator.formContext;
            var form = new Tomato.FormTest(executionContext);

            expect(form.Body.abc_FloatingPointNumber.Max).toBe(123.78);
            expect(form.Body.abc_FloatingPointNumber.Min).toBe(12.84);
            expect(form.Body.abc_FloatingPointNumber.Precision).toBe(2);
            form.Body.abc_FloatingPointNumber.Precision = 1;
            expect(form.Body.abc_FloatingPointNumber.Precision).toBe(1);
        });
        it('String attribute type', () => {
            _xrm_mock.XrmMockGenerator.Attribute.createString({
                attributeType: "string",
                name: "abc_all",
                maxLength: 100
            });
            var executionContext = _xrm_mock.XrmMockGenerator.formContext;
            var form = new Tomato.FormTest(executionContext);

            expect(form.Body.abc_All.MaxLength).toBe(100);
        });
    });
    describe('Controls', () => {
        beforeEach(function () {
            var XrmMockGenerator = _xrm_mock.XrmMockGenerator.initialise();
            XrmMockGenerator.Panel = new _xrm_mock.PanelMock();
            XrmMockGenerator.Encoding = new _xrm_mock.EncodingMock();
            XrmMockGenerator.Device = new _xrm_mock.DeviceMock();
            XrmMockGenerator.Navigation = new _xrm_mock.NavigationStaticMock();
        });
        it('standard control type', () => {
            _xrm_mock.XrmMockGenerator.Attribute.createString({
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
            var executionContext = _xrm_mock.XrmMockGenerator.formContext;
            var form = new Tomato.FormTest(executionContext);

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
            expect(true).toBeTruthy();
        });
        it('kbsearch (Knowledge base search) control type', () => {
            expect(true).toBeTruthy();
        });
        it('lookup control type', () => {
            var lookup = _xrm_mock.XrmMockGenerator.Control.createLookup(new _xrm_mock.LookupControlMock({
                name: "abc_lookup",
                attribute: new _xrm_mock.LookupAttributeMock({
                    name: "abc_lookup",
                    isPartyList: true,
                    value: [new _xrm_mock.LookupValueMock("id", "abc_test2", "name")]
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
            var executionContext = _xrm_mock.XrmMockGenerator.formContext;
            var form = new Tomato.FormTest(executionContext);

            expect(lookup.filters.length).toBe(0);
            var abc_LookupAddPreSearch = () => {
                var filter = `
<filter type="and">
    <condition attribute="abc_name" operator="eq" value="ABC" />
</filter>
`;
                var form = new Tomato.FormTest(executionContext);
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
            var optionSet = _xrm_mock.XrmMockGenerator.Control.createOptionSet({
                name: "abc_optionsetcode",
                disabled: true,
                label: "OPTIONSET LABEL",
                visible: true,
                attribute: new _xrm_mock.OptionSetAttributeMock({
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
            var executionContext = _xrm_mock.XrmMockGenerator.formContext;
            var form = new Tomato.FormTest(executionContext);

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
            expect(true).toBeTruthy();
        });
        it('subgrid control type', () => {
            expect(true).toBeTruthy();
        });
        it('timelinewall control type', () => {
            expect(true).toBeTruthy();
        });
        it('timer control type', () => {
            expect(true).toBeTruthy();
        });
        it('webresource control type', () => {
            expect(true).toBeTruthy();
        });
    });
});