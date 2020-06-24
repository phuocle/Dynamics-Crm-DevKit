//@ts-check
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
            xrmMock.XrmMockGenerator.Attribute.createBoolean({
                name: "abc_boolean",
                initialValue: true
            });

            var executionContext = xrmMock.XrmMockGenerator.formContext;
            var form = new Tomato.FormTest(executionContext);
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
            var form = new Tomato.FormTest(executionContext);

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
            xrmMock.XrmMockGenerator.Attribute.createNumber({
                name: "abc_floatingpointnumber",
                max: 123.78,
                min: 12.84,
                precision: 2,
            });
            var executionContext = xrmMock.XrmMockGenerator.formContext;
            var form = new Tomato.FormTest(executionContext);

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
            var form = new Tomato.FormTest(executionContext);

            expect(form.Body.abc_All.MaxLength).toBe(100);
        });
    });
});