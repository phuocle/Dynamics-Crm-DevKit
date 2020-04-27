//@ts-check
///<reference path='xrm-mock.d.ts' />
///<reference path='../node_modules/@types/xrm/index.d.ts' />
///<reference path='../node_modules/@types/sinon/index.d.ts' />
///<reference path='../node_modules/@types/jasmine/index.d.ts' />
// @ts-ignore
define(['xrm-mock', 'sinon'], function (/** @type {XrmMock} */_xrm_mock, /** @type {sinon} */_sinon) {
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
});