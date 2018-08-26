///<reference path="../entities/Lead.intellisense.js" />
///<reference path="mock.intellisense.js" />
define(['xrm-mock', 'sinon'], function (xrm_mock, sinon) {
    var mock = new DevKitXrmMock(xrm_mock, "lead");
    var server = new DevKitServerMock(sinon);
    describe('Lead.js Test', function () {
        it("OnLoad - FormCreate", function () {
            //setup
            mock.FormType = OptionSet.FormType.Create;
            mock.Field("subject", "hello");
            mock.Field("telephone1", "123");
            mock.Field("mobilephone", "456");

            //execute
            formLead.OnLoad();
            formLead.__SubjectAddOnChange__();
            formLead.__PhoneAddOnChange__();

            //result
            var form = new LuckeyMonkey.FormLead();
            expect(form.Body.Subject.Disabled).toBe(false);
            expect(form.Body.Subject.Value).toBe("HELLO");
            expect(form.Body.Telephone1.RequiredLevel).toBe(OptionSet.FieldRequiredLevel.Required);
            expect(form.Body.MobilePhone.RequiredLevel).toBe(OptionSet.FieldRequiredLevel.Required);

            //setup again
            form.Body.Telephone1.Value = null;
            form.Body.MobilePhone.Value = null;
            //run again
            formLead.__PhoneAddOnChange__();
            //result again
            expect(form.Body.Telephone1.RequiredLevel).toBe(OptionSet.FieldRequiredLevel.None);
            expect(form.Body.MobilePhone.RequiredLevel).toBe(OptionSet.FieldRequiredLevel.None);
        });
        it("OnLoad - FormEdit", function () {
            //setup
            mock.Field("subject", "hello");
            mock.FormType = OptionSet.FormType.Update;

            //execute
            formLead.OnLoad();

            //result
            var form = new LuckeyMonkey.FormLead();
            expect(form.Body.Subject.Disabled).toBe(true);
        });        
    });
});
