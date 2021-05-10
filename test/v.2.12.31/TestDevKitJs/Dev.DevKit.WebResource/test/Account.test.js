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
                value: "LE VAN PHUOC",
                maxLength: 100,
                submitMode: "always"
            },
                {
                    controlType: "standard",
                    disabled: true,
                    label: "Name",
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
});