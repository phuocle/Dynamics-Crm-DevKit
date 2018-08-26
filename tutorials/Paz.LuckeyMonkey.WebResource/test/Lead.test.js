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
        it("formLead.HasRole('Qualify Lead')", function () {
            //setup
            var data = {
                "@odata.context": "http://fakeurl.com/api/data/v8.0/$metadata#systemusers(systemuserid,ownerid)",
                "value": [{
                    "@odata.etag": "W/\"320689\"",
                    "systemuserid": "59046ca1-5579-e811-80dc-000d3aa2cf16",
                    "ownerid": "59046ca1-5579-e811-80dc-000d3aa2cf16"
                }]
            };
            server.RespondWith("Qualify Lead", data);
            //call
            var hasRole = formLead.HasRole("Qualify Lead");
            //result
            expect(hasRole).toBe(true);
        });
        it("formLead.HasRole('System Administrator')", function () {
            var data = {
                "@odata.context": "http://fakeurl.com/api/data/v8.0/$metadata#systemusers(systemuserid,ownerid)",
                "value": []
            };
            server.RespondWith("System Administrator", data);
            //call
            var hasRole = formLead.HasRole("System Administrator");
            //result
            expect(hasRole).toBe(false);
        });
    });
});
