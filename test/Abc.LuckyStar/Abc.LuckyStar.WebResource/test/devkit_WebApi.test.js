///<reference path='xrm-mock.d.ts' />
///<reference path='../node_modules/@types/xrm/index.d.ts' />
///<reference path='../node_modules/@types/sinon/index.d.ts' />
///<reference path='../node_modules/@types/jasmine/index.d.ts' />
define(['xrm-mock', 'sinon'], function (/** @type {XrmMock} */_xrm_mock, /** @type {sinon} */_sinon) {
    describe('devkit_WebApi.test.js Test', function () {

        beforeEach(function () {
            _xrm_mock.XrmMockGenerator.initialise();
            Xrm.Utility.getGlobalContext = function () { };
        });

        it('DevKit.Form.Controls.ControlString', function () {
            //SETUP DATA
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
                [
                    {
                        controlType: "standard",
                        disabled: true,
                        label: "CONTROL-STRING-LABEL",
                        name: "devkit_name",
                        visible: true
                    }
                ]);
            var executionContext = _xrm_mock.XrmMockGenerator.formContext;
            //CHECK DATA
            var form = new WebResource.FormWebApi(executionContext)
            //form.Body.devkit_Name.AddNotification
            var addOnChangeData = "";
            form.Body.devkit_Name.AddOnChange(function (executionContent) { addOnChangeData = "DATA-CHANGED"; });
            form.Body.devkit_Name.FireOnChange();
            expect(addOnChangeData).toBe("DATA-CHANGED");
            //form.Body.devkit_Name.AttributeParent
            expect(form.Body.devkit_Name.AttributeType).toBe(OptionSet.FieldAttributeType.String);
            //form.Body.devkit_Name.ClearNotification
            //form.Body.devkit_Name.ControlParent
            expect(form.Body.devkit_Name.ControlType).toBe(OptionSet.FieldControlType.Standard);
            expect(form.Body.devkit_Name.Disabled).toBe(true);
            //form.Body.devkit_Name.FireOnChange
            //form.Body.devkit_Name.Focus
            expect(form.Body.devkit_Name.Format).toBe(OptionSet.FieldFormat.Text);
            expect(form.Body.devkit_Name.IsDirty).toBe(true);
            expect(form.Body.devkit_Name.Label).toBe("CONTROL-STRING-LABEL");
            expect(form.Body.devkit_Name.MaxLength).toBe(100);
            expect(form.Body.devkit_Name.Name).toBe("devkit_name");
            expect(form.Body.devkit_Name.Name2).toBe("devkit_name");
            //form.Body.devkit_Name.RemoveOnChange
            expect(form.Body.devkit_Name.RequiredLevel).toBe(OptionSet.FieldRequiredLevel.Required);
            //form.Body.devkit_Name.SetNotification
            expect(form.Body.devkit_Name.SubmitMode).toBe(OptionSet.FieldSubmitMode.Always);
            //form.Body.devkit_Name.UserPrivilege
            //form.Body.devkit_Name.Valid
            expect(form.Body.devkit_Name.Value).toBe("CONTROL-STRING");
            //expect(form.Body.devkit_Name.Value2).toBe("CONTROL-STRING");
            expect(form.Body.devkit_Name.Visible).toBe(true);
        })
    });
});