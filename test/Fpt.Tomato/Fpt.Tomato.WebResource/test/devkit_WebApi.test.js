//@ts-check
///<reference path='xrm-mock.d.ts' />
///<reference path='../node_modules/@types/xrm/index.d.ts' />
///<reference path='../node_modules/@types/sinon/index.d.ts' />
///<reference path='../node_modules/@types/jasmine/index.d.ts' />
// @ts-ignore
define(['xrm-mock', 'sinon'], function (/** @type {XrmMock} */_xrm_mock, /** @type {sinon} */_sinon) {
    describe('devkit_WebApi.test.js Test', function () {

        beforeEach(function () {
            _xrm_mock.XrmMockGenerator.initialise();
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
        it ('DevKit.Form.Controls.ControlOptionSet', () => {
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
            _xrm_mock.XrmMockGenerator.Control.createLookup(new _xrm_mock.LookupControlMock({
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
        });
    });
});