//@ts-check
///<reference path="../node_modules/@types/requirejs/index.d.ts" />
///<reference path="../node_modules/@types/jasmine/index.d.ts" />
///<reference path="../node_modules/@types/xrm/index.d.ts" />
///<reference path="../node_modules/xrm-mock/build/index.d.ts" />
///<reference path="../entities/devkit.d.ts" />
///<reference path="../entities/Account.d.ts" />
define(['xrm-mock', 'sinon'], function () {
    var xrmMock = require('xrm-mock');
    var sinon = require('sinon');
    describe('WebApi Retreive', () => {
        beforeEach(function () {
            xrmMock.XrmMockGenerator.initialise();
        });
        it('WebApi Retreive', async () => {
            //setup
            var json = `{
    "entities": [
        {
            "@odata.etag": "W/\\\"1012533\\\"",
            "telephone1": "555-0158",
            "numberofemployees@OData.Community.Display.V1.FormattedValue": "6,200",
            "numberofemployees": 6200,
            "industrycode@OData.Community.Display.V1.FormattedValue": "Brokers",
            "industrycode": 4,
            "statecode@OData.Community.Display.V1.FormattedValue": "Active",
            "statecode": 0,
            "statuscode@OData.Community.Display.V1.FormattedValue": "Active",
            "statuscode": 1,
            "donotemail@OData.Community.Display.V1.FormattedValue": "Allow",
            "donotemail": false,
            "accountid": "e295f09c-2aab-eb11-8236-000d3a808ce1",
            "creditlimit@OData.Community.Display.V1.FormattedValue": "$5,000.00",
            "creditlimit": 5000,
            "_ownerid_value@OData.Community.Display.V1.FormattedValue": "DEV 2",
            "_ownerid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "ownerid",
            "_ownerid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "systemuser",
            "_ownerid_value": "27ae35af-15ab-eb11-8236-000d3a80893f",
            "devkit_categorycode@OData.Community.Display.V1.FormattedValue": "Business; Family",
            "devkit_categorycode": "1,2",
            "emailaddress1": "someone9@example.com",
            "modifiedon@OData.Community.Display.V1.FormattedValue": "5/11/2021 8:41 AM",
            "modifiedon": "2021-05-11T01:41:28Z",
            "name": "A. Datum Corporation (sample)",
            "_transactioncurrencyid_value@OData.Community.Display.V1.FormattedValue": "US Dollar",
            "_transactioncurrencyid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "transactioncurrencyid",
            "_transactioncurrencyid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "transactioncurrency",
            "_transactioncurrencyid_value": "e39879d5-29ab-eb11-8236-000d3a80893f",
            "c.devkit_categorycode@OData.Community.Display.V1.AttributeName": "devkit_categorycode",
            "c.devkit_categorycode@OData.Community.Display.V1.FormattedValue": "Business; Social",
            "c.devkit_categorycode": "1,3",
            "c.telephone1@OData.Community.Display.V1.AttributeName": "telephone1",
            "c.telephone1": "555-0108",
            "c.emailaddress1@OData.Community.Display.V1.AttributeName": "emailaddress1",
            "c.emailaddress1": "someone_i@example.com",
            "c.birthdate@OData.Community.Display.V1.AttributeName": "birthdate",
            "c.birthdate@OData.Community.Display.V1.FormattedValue": "11/22/1984",
            "c.birthdate": "1984-11-22"
        }
    ]
}`;
            debugger;
            var obj = JSON.parse(json);

            sinon.stub(Xrm.WebApi, 'retrieveMultipleRecords')
                .withArgs("account")
                .returns(obj);
            //run
            var fetchData = {
                accountid: "{E295F09C-2AAB-EB11-8236-000D3A808CE1}"
            };
            var fetchXml = `
<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>
  <entity name='account'>
    <attribute name='name'/>
    <attribute name='accountid'/>
    <attribute name='ownerid'/>
    <attribute name='industrycode'/>
    <attribute name='devkit_categorycode'/>
    <attribute name='emailaddress1'/>
    <attribute name='donotemail'/>
    <attribute name='creditlimit'/>
    <attribute name='modifiedon'/>
    <attribute name='numberofemployees'/>
    <attribute name='statuscode'/>
    <attribute name='statecode'/>
    <attribute name='telephone1'/>
    <attribute name='fax'/>
    <order attribute='name' descending='false'/>
    <filter type='and'>
      <condition attribute='accountid' operator='eq' value='${fetchData.accountid}'/>
    </filter>
    <link-entity name='contact' from='contactid' to='primarycontactid' visible='false' link-type='outer' alias='c'>
      <attribute name='emailaddress1'/>
      <attribute name='telephone1'/>
      <attribute name='birthdate'/>
      <attribute name='fax'/>
      <attribute name='devkit_categorycode'/>
    </link-entity>
  </entity>
</fetch>
`;
            fetchXml = "?fetchXml=" + encodeURIComponent(fetchXml);
            var res = await Xrm.WebApi.retrieveMultipleRecords("account", fetchXml);

            //result
            expect(res.nextLink).toBeUndefined();
            expect(res.entities.length).toBe(1);
            var webapi = new DevKit.AccountApi(res.entities[0]);
            expect(webapi['@odata.etag']).toBe(`W/"1012533"`);
            expect(webapi.AccountId).toBe("e295f09c-2aab-eb11-8236-000d3a808ce1");
            expect(webapi.Name).toBe("A. Datum Corporation (sample)");
            expect(webapi.OwnerId_team).toBeDefined();
            expect(webapi.OwnerId_team).toBeNull();
            expect(webapi.FormattedValue.OwnerId_team).toBe("");
            expect(webapi.OwnerId_systemuser).toBeDefined();
            expect(webapi.OwnerId_systemuser).toBe("27ae35af-15ab-eb11-8236-000d3a80893f");
            expect(webapi.FormattedValue.OwnerId_systemuser).toBe("DEV 2");
            expect(webapi.IndustryCode).toBeDefined();
            expect(webapi.IndustryCode).toBe(OptionSet.Account.IndustryCode.Brokers);
            expect(webapi.FormattedValue.IndustryCode).toBe("Brokers");
            expect(webapi.devkit_categorycode).toBeDefined();
            expect(webapi.devkit_categorycode.length).toBe(2);
            expect(webapi.devkit_categorycode[0]).toBe(OptionSet.Account.devkit_categorycode.Business);
            expect(webapi.devkit_categorycode[1]).toBe(OptionSet.Account.devkit_categorycode.Family);
            expect(webapi.FormattedValue.devkit_categorycode.length).toBe(2);
            expect(webapi.FormattedValue.devkit_categorycode[0]).toBe("Business");
            expect(webapi.FormattedValue.devkit_categorycode[1]).toBe("Family");
            expect(webapi.CreditLimit).toBeDefined();
            expect(webapi.CreditLimit).toBe(5000);
            expect(webapi.FormattedValue.CreditLimit).toBe("$5,000.00");
            expect(webapi.DoNotEMail).toBeDefined();
            expect(webapi.DoNotEMail).toBeFalsy();
            expect(webapi.FormattedValue.DoNotEMail).toBe("Allow");
            expect(webapi.EMailAddress1).toBeDefined();
            expect(webapi.EMailAddress1).toBe("someone9@example.com");
            expect(webapi.ModifiedOn_UtcDateAndTime).toBeDefined();
            expect(webapi.ModifiedOn_UtcDateAndTime.getTime()).toBe(new Date("2021-05-11T01:41:28Z").getTime());
            expect(webapi.FormattedValue.ModifiedOn_UtcDateAndTime).toBe("5/11/2021 8:41 AM");
            expect(webapi.Telephone1).toBeDefined();
            expect(webapi.Telephone1).toBe("555-0158");
            expect(webapi.StateCode).toBeDefined();
            expect(webapi.StateCode).toBe(OptionSet.Account.StateCode.Active);
            expect(webapi.FormattedValue.StateCode).toBe("Active");
            expect(webapi.StatusCode).toBeDefined();
            expect(webapi.StatusCode).toBe(OptionSet.Account.StatusCode.Active);
            expect(webapi.FormattedValue.StatusCode).toBe("Active");
            expect(webapi.NumberOfEmployees).toBeDefined();
            expect(webapi.NumberOfEmployees).toBe(6200);
            expect(webapi.FormattedValue.NumberOfEmployees).toBe("6,200");
            expect(webapi.Fax).toBeDefined();
            expect(webapi.Fax).toBeNull();
            expect(webapi.getAliasedValue("c.emailaddress1")).toBe("someone_i@example.com");
            expect(webapi.getAliasedFormattedValue("c.emailaddress1")).toBe("");
            expect(webapi.getAliasedValue("c.birthdate")).toBe("1984-11-22");
            expect(webapi.getAliasedFormattedValue("c.birthdate")).toBe("11/22/1984");
            expect(webapi.getAliasedValue("c.telephone1")).toBe("555-0108");
            expect(webapi.getAliasedFormattedValue("c.telephone1")).toBe("");
            expect(webapi.getAliasedValue("c.fax")).toBeNull();
            expect(webapi.getAliasedFormattedValue("c.fax")).toBe("");
            var values = webapi.getAliasedValue("c.devkit_categorycode", true);
            expect(values.length).toBe(2);
            expect(values[0]).toBe(1);
            expect(values[1]).toBe(3);
            var formattedValues = webapi.getAliasedFormattedValue("c.devkit_categorycode", true);
            expect(formattedValues.length).toBe(2);
            expect(formattedValues[0]).toBe("Business");
            expect(formattedValues[1]).toBe("Social");
            expect(webapi.Entity).toBeDefined();
            expect(webapi.CreatedBy).toBeNull();
            expect(webapi.FormattedValue.CreatedBy).toBe("");
        });
    });
    describe('WebApi Insert Account', () => {
        beforeEach(function () {
            xrmMock.XrmMockGenerator.initialise();
        });
        it("Insert AccountApi", async () => {
            //setup
            /** @type {any} */
            var obj =
            {
                id: "8d2dbd8c-c9f8-4cb5-8838-f5a916a6098f",
                entityType: "account"
            };
            sinon.stub(Xrm.WebApi, 'createRecord')
                .withArgs("account")
                .returns(obj);
            //run
            var webapi = new DevKit.AccountApi();
            webapi.Name = "ACCOUNT NAME";
            webapi.IndustryCode = OptionSet.Account.IndustryCode.Brokers;
            webapi.devkit_categorycode = [OptionSet.Account.devkit_categorycode.Business, OptionSet.Account.devkit_categorycode.Social];
            webapi.DoNotEMail = false;
            webapi.PrimaryContactId = "8d2dbd8c-c9f8-4cb5-8838-f5a916a6098a";
            webapi.CreditLimit = 123.456;
            //result
            var res = await Xrm.WebApi.createRecord(webapi.EntityName, webapi.Entity);
            expect(res.id).toBe("8d2dbd8c-c9f8-4cb5-8838-f5a916a6098f");
            expect(res.entityType).toBe("account");
        });
    });
    describe('WebApi Update Account', () => {
        beforeEach(function () {
            xrmMock.XrmMockGenerator.initialise();
        });
        it("Update Account", async () => {
            //setup
            /** @type {any} */
            var obj =
            {
                id: "8d2dbd8c-c9f8-4cb5-8838-f5a916a6098f",
                entityType: "account"
            };
            sinon.stub(Xrm.WebApi, 'createRecord')
                .withArgs("account")
                .returns(obj);
            //run
            var webapi = new DevKit.AccountApi();
            webapi.Name = "ACCOUNT NAME";
            webapi.IndustryCode = OptionSet.Account.IndustryCode.Brokers;
            webapi.devkit_categorycode = [OptionSet.Account.devkit_categorycode.Business, OptionSet.Account.devkit_categorycode.Social];
            webapi.DoNotEMail = false;
            webapi.PrimaryContactId = "8d2dbd8c-c9f8-4cb5-8838-f5a916a6098a";
            webapi.CreditLimit = 123.456;
            webapi.ParentAccountId = null;
            //result
            var res = await Xrm.WebApi.createRecord(webapi.EntityName, webapi.Entity);
            expect(res.id).toBe("8d2dbd8c-c9f8-4cb5-8838-f5a916a6098f");
            expect(res.entityType).toBe("account");
        });
    });
    describe("WebApi Delete Account", () => {
        beforeEach(function () {
            xrmMock.XrmMockGenerator.initialise();
        });
        it("Delete Account", async () => {
            /** @type {any} */
            var obj =
            {
                id: "8d2dbd8c-c9f8-4cb5-8838-f5a916a6098f",
                entityType: "account"
            };
            sinon.stub(Xrm.WebApi, 'deleteRecord')
                .withArgs("account", "8d2dbd8c-c9f8-4cb5-8838-f5a916a6098f")
                .returns(obj);
            /** @type {any} */
            var res = await Xrm.WebApi.deleteRecord("account", "8d2dbd8c-c9f8-4cb5-8838-f5a916a6098f");
            expect(res.id).toBe("8d2dbd8c-c9f8-4cb5-8838-f5a916a6098f");
            expect(res.entityType).toBe("account");
        });
    });
});