//@ts-check
define(['xrm-mock', 'sinon'], () => {
    var xrmMock = require('xrm-mock');
    var sinon = require('sinon');
    describe('', () => {
        beforeEach(function () {
            xrmMock.XrmMockGenerator.initialise();
        });
        it('WebApi Retreive STRING', async () => {
            var entities = [
                {
                    "@odata.etag": "W/\"588561\"",
                    "devkit_singlelineoftexttickersymbol": "APP",
                    "devkit_singlelineoftextphone": "84 0907952232",
                    "devkit_singlelineoftextemail": "a@a.a",
                    "devkit_singlelineoftexturl": "https://google.com",
                    "devkit_singlelineoftexttextarea": "Single\nline\nof\ntext\ntext\narea",
                    "devkit_singlelineoftexttext": "abcd",
                    "devkit_multipleliniesoftext": "multiple\nlines\nof\ntext",
                    "_ownerid_value@OData.Community.Display.V1.FormattedValue": "dev kit",
                    "_ownerid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "ownerid",
                    "_ownerid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "systemuser",
                    "_ownerid_value": "739d2b22-5f57-42f9-9a17-ebad89799e7e",
                    "_devkit_linkwebapiid_value@OData.Community.Display.V1.FormattedValue": "DATETIME",
                    "_devkit_linkwebapiid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "devkit_LinkWebApiId",
                    "_devkit_linkwebapiid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "devkit_webapi",
                    "_devkit_linkwebapiid_value": "f55a0d1e-286b-e911-a997-000d3a802135",
                    "_devkit_customerid_value@OData.Community.Display.V1.FormattedValue": "A. Datum Corporation (sample)",
                    "_devkit_customerid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "devkit_CustomerId_account",
                    "_devkit_customerid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "account",
                    "_devkit_customerid_value": "928d37ec-9e66-e911-a993-000d3a804bc9",
                    "devkit_name": "STRING",
                    "devkit_webapiid": "3c254671-456d-e911-a98d-000d3a80280e"
                }
            ];
            sinon.stub(Xrm.WebApi, 'retrieveMultipleRecords')
                .withArgs("devkit_webapi")
                .returns({
                    entities: entities
                });
            var fetchData = {
                devkit_name: "STRING"
            };
            var fetchXml = `<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>
  <entity name='devkit_webapi'>
    <attribute name='devkit_name'/>
    <attribute name='devkit_singlelineoftexturl'/>
    <attribute name='devkit_singlelineoftexttickersymbol'/>
    <attribute name='devkit_singlelineoftexttextarea'/>
    <attribute name='devkit_singlelineoftexttext'/>
    <attribute name='devkit_singlelineoftextphone'/>
    <attribute name='devkit_singlelineoftextemail'/>
    <attribute name='ownerid'/>
    <attribute name='devkit_multipleliniesoftext'/>
    <attribute name='devkit_linkwebapiid'/>
    <attribute name='devkit_customerid'/>
    <attribute name='devkit_webapiid'/>
    <order attribute='devkit_name' descending='false'/>
    <filter type='and'>
      <condition attribute='devkit_name' operator='eq' value='${fetchData.devkit_name}'/>
    </filter>
  </entity>
</fetch>`;
            fetchXml = "?fetchXml=" + encodeURIComponent(fetchXml);
            var res = await Xrm.WebApi.retrieveMultipleRecords("devkit_webapi", fetchXml);

            var webapi = new Tomato.devkit_WebApiApi(res.entities[0]);
            expect(res.nextLink).toBeUndefined();

            //single line of text
            expect(webapi.devkit_SingleLineofTextText.Value).toEqual("abcd");
            expect(webapi.devkit_SingleLineofTextEmail.Value).toEqual("a@a.a");
            expect(webapi.devkit_SingleLineofTextPhone.Value).toEqual("84 0907952232");
            expect(webapi.devkit_SingleLineofTextTickerSymbol.Value).toEqual("APP");
            expect(webapi.devkit_SingleLineofTextUrl.Value).toEqual("https://google.com");
            expect(webapi.devkit_SingleLineofTextTextArea.Value).toEqual("Single\nline\nof\ntext\ntext\narea");
            //multiple lilnes of text
            expect(webapi.devkit_MultipleLiniesofText.Value).toEqual("multiple\nlines\nof\ntext");
            //loolup
            expect(webapi.devkit_LinkWebApiId.Value).toEqual("f55a0d1e-286b-e911-a997-000d3a802135");
            expect(webapi.devkit_LinkWebApiId.FormattedValue).toEqual("DATETIME");
            expect(webapi.OwnerId_systemuser.Value).toEqual("739d2b22-5f57-42f9-9a17-ebad89799e7e");
            expect(webapi.OwnerId_systemuser.FormattedValue).toEqual("dev kit");
            expect(webapi.OwnerId_team.Value).toBeNull();
            expect(webapi.OwnerId_team.FormattedValue).toEqual("");
            expect(webapi.devkit_CustomerId_account.Value).toEqual("928d37ec-9e66-e911-a993-000d3a804bc9");
            expect(webapi.devkit_CustomerId_account.FormattedValue).toEqual("A. Datum Corporation (sample)");
            expect(webapi.devkit_CustomerId_contact.Value).toBeNull();
            expect(webapi.devkit_CustomerId_contact.FormattedValue).toEqual("");
            //guid
            expect(webapi.devkit_WebApiId.Value).toEqual("3c254671-456d-e911-a98d-000d3a80280e");
            //others
            expect(webapi["@odata.etag"]).toBe("W/\"588561\"");
            expect(webapi.Entity).toBeDefined();
        });
        it('WebApi Retreive OPTIONSET', async () => {
            var entities = [
                {
                    "@odata.etag": "W/\"585157\"",
                    "devkit_yesandnocalculated@OData.Community.Display.V1.FormattedValue": "Yes",
                    "devkit_yesandnocalculated": true,
                    "devkit_singleoptionsetcodecalculated@OData.Community.Display.V1.FormattedValue": "Crm 4",
                    "devkit_singleoptionsetcodecalculated": 100000000,
                    "statuscode@OData.Community.Display.V1.FormattedValue": "Active",
                    "statuscode": 1,
                    "devkit_singleoptionsetcode@OData.Community.Display.V1.FormattedValue": "Crm 4",
                    "devkit_singleoptionsetcode": 100000000,
                    "devkit_name": "OPTIONSET",
                    "devkit_webapiid": "d7f649ca-d864-e911-a991-000d3a802ab7",
                    "devkit_yesandno@OData.Community.Display.V1.FormattedValue": "Yes",
                    "devkit_yesandno": true,
                    "statecode@OData.Community.Display.V1.FormattedValue": "Active",
                    "statecode": 0,
                    "devkit_multioptionsetcode@OData.Community.Display.V1.FormattedValue": "Crm 4; Crm 2011; Crm 2013",
                    "devkit_multioptionsetcode": "100000000,100000001,100000002",
                    "a.devkit_multioptionsetcode@OData.Community.Display.V1.AttributeName": "devkit_multioptionsetcode",
                    "a.devkit_multioptionsetcode@OData.Community.Display.V1.FormattedValue": "Crm 4; Crm 2011; Crm 2013",
                    "a.devkit_multioptionsetcode": "100000000,100000001,100000002",
                    "a.devkit_singleoptionsetcode@OData.Community.Display.V1.AttributeName": "devkit_singleoptionsetcode",
                    "a.devkit_singleoptionsetcode@OData.Community.Display.V1.FormattedValue": "Crm 4",
                    "a.devkit_singleoptionsetcode": 100000000,
                    "a.devkit_yesandno@OData.Community.Display.V1.AttributeName": "devkit_yesandno",
                    "a.devkit_yesandno@OData.Community.Display.V1.FormattedValue": "Yes",
                    "a.devkit_yesandno": true,
                    "a.devkit_singleoptionsetcodecalculated@OData.Community.Display.V1.AttributeName": "devkit_singleoptionsetcodecalculated",
                    "a.devkit_singleoptionsetcodecalculated@OData.Community.Display.V1.FormattedValue": "Crm 4",
                    "a.devkit_singleoptionsetcodecalculated": 100000000,
                    "a.statecode@OData.Community.Display.V1.AttributeName": "statecode",
                    "a.statecode@OData.Community.Display.V1.FormattedValue": "Active",
                    "a.statecode": 0,
                    "a.devkit_yesandnocalculated@OData.Community.Display.V1.AttributeName": "devkit_yesandnocalculated",
                    "a.devkit_yesandnocalculated@OData.Community.Display.V1.FormattedValue": "Yes",
                    "a.devkit_yesandnocalculated": true,
                    "a.statuscode@OData.Community.Display.V1.AttributeName": "statuscode",
                    "a.statuscode@OData.Community.Display.V1.FormattedValue": "Active",
                    "a.statuscode": 1
                }
            ];
            sinon.stub(Xrm.WebApi, 'retrieveMultipleRecords')
                .withArgs("devkit_webapi")
                .returns({
                    entities: entities
                });
            var fetchData = {
                devkit_name: "OPTIONSET%"
            };
            var fetchXml = [
                "<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>",
                "  <entity name='devkit_webapi'>",
                "    <attribute name='devkit_name'/>",
                "    <attribute name='devkit_yesandnocalculated'/>",
                "    <attribute name='devkit_yesandno'/>",
                "    <attribute name='statuscode'/>",
                "    <attribute name='statecode'/>",
                "    <attribute name='devkit_singleoptionsetcodecalculated'/>",
                "    <attribute name='devkit_singleoptionsetcode'/>",
                "    <attribute name='devkit_multioptionsetcode'/>",
                "    <attribute name='devkit_webapiid'/>",
                "    <order attribute='devkit_name' descending='false'/>",
                "    <filter type='and'>",
                "      <condition attribute='devkit_name' operator='eq' value='", fetchData.devkit_name, "'/>",
                "    </filter>",
                "    <link-entity name='devkit_webapi' from='devkit_webapiid' to='devkit_linkwebapiid' visible='false' link-type='outer' alias='a'>",
                "      <attribute name='devkit_singleoptionsetcode'/>",
                "      <attribute name='devkit_multioptionsetcode'/>",
                "      <attribute name='devkit_yesandnocalculated'/>",
                "      <attribute name='devkit_yesandno'/>",
                "      <attribute name='statuscode'/>",
                "      <attribute name='statecode'/>",
                "      <attribute name='devkit_singleoptionsetcodecalculated'/>",
                "    </link-entity>",
                "  </entity>",
                "</fetch>",
            ].join("");
            fetchXml = "?fetchXml=" + encodeURIComponent(fetchXml);
            var res = await Xrm.WebApi.retrieveMultipleRecords("devkit_webapi", fetchXml);

            var webapi = new Tomato.devkit_WebApiApi(res.entities[0]);
            expect(webapi.statuscode.Value).toEqual(1);
            expect(webapi.statuscode.FormattedValue).toEqual("Active");
            expect(webapi.statecode.Value).toEqual(0);
            expect(webapi.statecode.FormattedValue).toEqual("Active");
            expect(webapi.devkit_SingleOptionSetCode.Value).toEqual(OptionSet.devkit_WebApi.devkit_SingleOptionSetCode.Crm_4);
            expect(webapi.devkit_SingleOptionSetCode.FormattedValue).toEqual("Crm 4");
            expect(webapi.devkit_SingleOptionSetCodeCalculated.Value).toEqual(OptionSet.devkit_WebApi.devkit_SingleOptionSetCode.Crm_4);
            expect(webapi.devkit_SingleOptionSetCodeCalculated.FormattedValue).toEqual("Crm 4");
            expect(webapi.devkit_MultiOptionSetCode.Value.length).toEqual(3);
            expect(webapi.devkit_MultiOptionSetCode.Value[0]).toEqual(OptionSet.devkit_WebApi.devkit_MultiOptionSetCode.Crm_4);
            expect(webapi.devkit_MultiOptionSetCode.Value[1]).toEqual(OptionSet.devkit_WebApi.devkit_MultiOptionSetCode.Crm_2011);
            expect(webapi.devkit_MultiOptionSetCode.Value[2]).toEqual(OptionSet.devkit_WebApi.devkit_MultiOptionSetCode.Crm_2013);
            expect(webapi.devkit_MultiOptionSetCode.FormattedValue.length).toEqual(3);
            expect(webapi.devkit_MultiOptionSetCode.FormattedValue[0]).toEqual("Crm 4");
            expect(webapi.devkit_MultiOptionSetCode.FormattedValue[1]).toEqual("Crm 2011");
            expect(webapi.devkit_MultiOptionSetCode.FormattedValue[2]).toEqual("Crm 2013");
            expect(webapi.devkit_YesAndNo.Value).toBeTruthy();
            expect(webapi.devkit_YesAndNo.FormattedValue).toEqual("Yes");
            expect(webapi.devkit_YesAndNoCalculated.Value).toBeTruthy();
            expect(webapi.devkit_YesAndNoCalculated.FormattedValue).toEqual("Yes");
            expect(webapi.getAliasedValue("a.devkit_singleoptionsetcode")).toEqual(OptionSet.devkit_WebApi.devkit_SingleOptionSetCode.Crm_4);
            var multi = webapi.getAliasedValue("a.devkit_multioptionsetcode", true);
            expect(multi.length).toEqual(3);
            expect(multi[0]).toEqual(OptionSet.devkit_WebApi.devkit_MultiOptionSetCode.Crm_4);
            expect(multi[1]).toEqual(OptionSet.devkit_WebApi.devkit_MultiOptionSetCode.Crm_2011);
            expect(multi[2]).toEqual(OptionSet.devkit_WebApi.devkit_MultiOptionSetCode.Crm_2013);
            var multi2 = webapi.getAliasedFormattedValue("a.devkit_multioptionsetcode", true);
            expect(multi2.length).toEqual(3);
            expect(multi2[0]).toEqual("Crm 4");
            expect(multi2[1]).toEqual("Crm 2011");
            expect(multi2[2]).toEqual("Crm 2013");
            expect(webapi["@odata.etag"]).not.toBeUndefined();
            expect(res.entities.length).toBe(1);
            expect(res["@odata.nextLink"]).toBeUndefined();
        });
        it('WebApi Retreive DATETIME', async () => {
            var entities = [
                {
                    "@odata.etag": "W/\"585967\"",
                    "devkit_dateonlydateonlyrollup@OData.Community.Display.V1.FormattedValue": "07.04.2019",
                    "devkit_dateonlydateonlyrollup": "2019-04-07",
                    "devkit_dateonlydateonly@OData.Community.Display.V1.FormattedValue": "29.04.2019",
                    "devkit_dateonlydateonly": "2019-04-29",
                    "devkit_userlocaldateonly@OData.Community.Display.V1.FormattedValue": "30.04.2019",
                    "devkit_userlocaldateonly": "2019-04-29T17:00:00Z",
                    "devkit_timezonedateandtimecalculated@OData.Community.Display.V1.FormattedValue": "28.04.2019 03:30 CH",
                    "devkit_timezonedateandtimecalculated": "2019-04-28T15:30:00Z",
                    "devkit_userlocaldateandtimerollup_date@OData.Community.Display.V1.FormattedValue": "01.05.2019 04:08 SA",
                    "devkit_userlocaldateandtimerollup_date": "2019-04-30T21:08:14Z",
                    "devkit_timezonedateandtimerollup_date@OData.Community.Display.V1.FormattedValue": "01.05.2019 09:35 CH",
                    "devkit_timezonedateandtimerollup_date": "2019-05-01T14:35:49Z",
                    "devkit_userlocaldateonlyrollup_state@OData.Community.Display.V1.FormattedValue": "1",
                    "devkit_userlocaldateonlyrollup_state": 1,
                    "devkit_userlocaldateonlyrollup_date@OData.Community.Display.V1.FormattedValue": "01.05.2019 03:52 SA",
                    "devkit_userlocaldateonlyrollup_date": "2019-04-30T20:52:27Z",
                    "devkit_dateonlydateonlyrollup_date@OData.Community.Display.V1.FormattedValue": "01.05.2019 09:35 CH",
                    "devkit_dateonlydateonlyrollup_date": "2019-05-01T14:35:54Z",
                    "devkit_userlocaldateandtime@OData.Community.Display.V1.FormattedValue": "27.04.2019 02:30 CH",
                    "devkit_userlocaldateandtime": "2019-04-27T07:30:00Z",
                    "devkit_timezonedateonlyrollup_state@OData.Community.Display.V1.FormattedValue": "1",
                    "devkit_timezonedateonlyrollup_state": 1,
                    "devkit_timezonedateonly@OData.Community.Display.V1.FormattedValue": "26.04.2019",
                    "devkit_timezonedateonly": "2019-04-26T00:00:00Z",
                    "devkit_dateonlydateonlyrollup_state@OData.Community.Display.V1.FormattedValue": "1",
                    "devkit_dateonlydateonlyrollup_state": 1,
                    "devkit_timezonedateonlyrollup_date@OData.Community.Display.V1.FormattedValue": "01.05.2019 09:35 CH",
                    "devkit_timezonedateonlyrollup_date": "2019-05-01T14:35:44Z",
                    "devkit_userlocaldateandtimerollup_state@OData.Community.Display.V1.FormattedValue": "1",
                    "devkit_userlocaldateandtimerollup_state": 1,
                    "devkit_userlocaldateandtimecalculated@OData.Community.Display.V1.FormattedValue": "27.04.2019 02:30 CH",
                    "devkit_userlocaldateandtimecalculated": "2019-04-27T07:30:00Z",
                    "devkit_webapiid": "f55a0d1e-286b-e911-a997-000d3a802135",
                    "devkit_userlocaldateandtimerollup@OData.Community.Display.V1.FormattedValue": "08.04.2019 08:30 SA",
                    "devkit_userlocaldateandtimerollup": "2019-04-08T01:30:00Z",
                    "devkit_dateonlydateonlycalculated@OData.Community.Display.V1.FormattedValue": "29.04.2019",
                    "devkit_dateonlydateonlycalculated": "2019-04-29",
                    "devkit_timezonedateandtimerollup@OData.Community.Display.V1.FormattedValue": "10.04.2019 01:30 SA",
                    "devkit_timezonedateandtimerollup": "2019-04-10T01:30:00Z",
                    "devkit_userlocaldateonlyrollup@OData.Community.Display.V1.FormattedValue": "06.04.2019",
                    "devkit_userlocaldateonlyrollup": "2019-04-05T17:00:00Z",
                    "devkit_timezonedateonlycalculated@OData.Community.Display.V1.FormattedValue": "26.04.2019",
                    "devkit_timezonedateonlycalculated": "2019-04-26T00:00:00Z",
                    "devkit_userlocaldateonlycalculated@OData.Community.Display.V1.FormattedValue": "30.04.2019",
                    "devkit_userlocaldateonlycalculated": "2019-04-29T17:00:00Z",
                    "devkit_timezonedateonlyrollup@OData.Community.Display.V1.FormattedValue": "09.04.2019",
                    "devkit_timezonedateonlyrollup": "2019-04-09T00:00:00Z",
                    "devkit_timezonedateandtime@OData.Community.Display.V1.FormattedValue": "28.04.2019 03:30 CH",
                    "devkit_timezonedateandtime": "2019-04-28T15:30:00Z",
                    "devkit_timezonedateandtimerollup_state@OData.Community.Display.V1.FormattedValue": "1",
                    "devkit_timezonedateandtimerollup_state": 1
                }
            ];
            sinon.stub(Xrm.WebApi, 'retrieveMultipleRecords')
                .withArgs("devkit_webapi")
                .returns({
                    entities: entities
                });
            var fetchData = {
                devkit_name: "DATETIME"
            };
            var fetchXml = [
                "<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>",
                "  <entity name='devkit_webapi'>",
                "    <attribute name='devkit_dateonlydateonly'/>",
                "    <attribute name='devkit_dateonlydateonlycalculated'/>",
                "    <attribute name='devkit_dateonlydateonlyrollup'/>",
                "    <attribute name='devkit_dateonlydateonlyrollup_state'/>",
                "    <attribute name='devkit_dateonlydateonlyrollup_date'/>",
                "    <attribute name='devkit_userlocaldateonly'/>",
                "    <attribute name='devkit_userlocaldateonlycalculated'/>",
                "    <attribute name='devkit_userlocaldateonlyrollup'/>",
                "    <attribute name='devkit_userlocaldateonlyrollup_state'/>",
                "    <attribute name='devkit_userlocaldateonlyrollup_date'/>",
                "    <attribute name='devkit_userlocaldateandtime'/>",
                "    <attribute name='devkit_userlocaldateandtimecalculated'/>",
                "    <attribute name='devkit_userlocaldateandtimerollup'/>",
                "    <attribute name='devkit_userlocaldateandtimerollup_state'/>",
                "    <attribute name='devkit_userlocaldateandtimerollup_date'/>",
                "    <attribute name='devkit_timezonedateonly'/>",
                "    <attribute name='devkit_timezonedateonlycalculated'/>",
                "    <attribute name='devkit_timezonedateonlyrollup'/>",
                "    <attribute name='devkit_timezonedateonlyrollup_state'/>",
                "    <attribute name='devkit_timezonedateonlyrollup_date'/>",
                "    <attribute name='devkit_timezonedateandtime'/>",
                "    <attribute name='devkit_timezonedateandtimecalculated'/>",
                "    <attribute name='devkit_timezonedateandtimerollup'/>",
                "    <attribute name='devkit_timezonedateandtimerollup_state'/>",
                "    <attribute name='devkit_timezonedateandtimerollup_date'/>",
                "    <filter type='and'>",
                "      <condition attribute='devkit_name' operator='eq' value='", fetchData.devkit_name, "'/>",
                "    </filter>",
                "  </entity>",
                "</fetch>",
            ].join("");
            fetchXml = "?fetchXml=" + encodeURIComponent(fetchXml);
            var res = await Xrm.WebApi.retrieveMultipleRecords("devkit_webapi", fetchXml);

            var webapi = new Tomato.devkit_WebApiApi(res.entities[0]);
            //date only date only
            expect(webapi.devkit_DateOnlyDateOnly_DateOnly.Value).toEqual("2019-04-29");
            expect(webapi.devkit_DateOnlyDateOnly_DateOnly.FormattedValue).toEqual("29.04.2019");
            expect(webapi.devkit_DateOnlyDateOnlyCalculated_DateOnly.Value).toEqual("2019-04-29");
            expect(webapi.devkit_DateOnlyDateOnlyCalculated_DateOnly.FormattedValue).toEqual("29.04.2019");
            expect(webapi.devkit_DateOnlyDateOnlyRollup_DateOnly.Value).toEqual("2019-04-07");
            expect(webapi.devkit_DateOnlyDateOnlyRollup_DateOnly.FormattedValue).toEqual("07.04.2019");
            expect(webapi.devkit_DateOnlyDateOnlyRollup_State.Value).toEqual(OptionSet.devkit_WebApi.RollupState.Calculated);
            expect(webapi.devkit_DateOnlyDateOnlyRollup_State.FormattedValue).toEqual(OptionSet.devkit_WebApi.RollupState.Calculated.toString());
            expect(webapi.devkit_DateOnlyDateOnlyRollup_Date_UtcDateAndTime.Value).toEqual("2019-05-01T14:35:54Z");
            expect(webapi.devkit_DateOnlyDateOnlyRollup_Date_UtcDateAndTime.FormattedValue).toEqual("01.05.2019 09:35 CH");
            //user local date only
            expect(webapi.devkit_UserLocalDateOnly_UtcDateOnly.Value).toEqual("2019-04-29T17:00:00Z");
            expect(webapi.devkit_UserLocalDateOnly_UtcDateOnly.FormattedValue).toEqual("30.04.2019");
            expect(webapi.devkit_UserLocalDateOnlyCalculated_UtcDateOnly.Value).toEqual("2019-04-29T17:00:00Z");
            expect(webapi.devkit_UserLocalDateOnlyCalculated_UtcDateOnly.FormattedValue).toEqual("30.04.2019");
            expect(webapi.devkit_UserLocalDateOnlyRollup_UtcDateOnly.Value).toEqual("2019-04-05T17:00:00Z");
            expect(webapi.devkit_UserLocalDateOnlyRollup_UtcDateOnly.FormattedValue).toEqual("06.04.2019");
            expect(webapi.devkit_UserLocalDateOnlyRollup_State.Value).toEqual(OptionSet.devkit_WebApi.RollupState.Calculated);
            expect(webapi.devkit_UserLocalDateOnlyRollup_State.FormattedValue).toEqual(OptionSet.devkit_WebApi.RollupState.Calculated.toString());
            expect(webapi.devkit_UserLocalDateOnlyRollup_Date_UtcDateAndTime.Value).toEqual("2019-04-30T20:52:27Z");
            expect(webapi.devkit_UserLocalDateOnlyRollup_Date_UtcDateAndTime.FormattedValue).toEqual("01.05.2019 03:52 SA");
            //user local date and time
            expect(webapi.devkit_UserLocalDateAndTime_UtcDateAndTime.Value).toEqual("2019-04-27T07:30:00Z");
            expect(webapi.devkit_UserLocalDateAndTime_UtcDateAndTime.FormattedValue).toEqual("27.04.2019 02:30 CH");
            expect(webapi.devkit_UserLocalDateAndTimeCalculated_UtcDateAndTime.Value).toEqual("2019-04-27T07:30:00Z");
            expect(webapi.devkit_UserLocalDateAndTimeCalculated_UtcDateAndTime.FormattedValue).toEqual("27.04.2019 02:30 CH");
            expect(webapi.devkit_UserLocalDateAndTimeRollup_UtcDateAndTime.Value).toEqual("2019-04-08T01:30:00Z");
            expect(webapi.devkit_UserLocalDateAndTimeRollup_UtcDateAndTime.FormattedValue).toEqual("08.04.2019 08:30 SA");
            expect(webapi.devkit_UserLocalDateAndTimeRollup_State.Value).toEqual(OptionSet.devkit_WebApi.RollupState.Calculated);
            expect(webapi.devkit_UserLocalDateAndTimeRollup_State.FormattedValue).toEqual(OptionSet.devkit_WebApi.RollupState.Calculated.toString());
            expect(webapi.devkit_UserLocalDateAndTimeRollup_Date_UtcDateAndTime.Value).toEqual("2019-04-30T21:08:14Z");
            expect(webapi.devkit_UserLocalDateAndTimeRollup_Date_UtcDateAndTime.FormattedValue).toEqual("01.05.2019 04:08 SA");
            //time-zone date only
            expect(webapi.devkit_TimeZoneDateOnly_TimezoneDateOnly.Value).toEqual("2019-04-26T00:00:00Z");
            expect(webapi.devkit_TimeZoneDateOnly_TimezoneDateOnly.FormattedValue).toEqual("26.04.2019");
            expect(webapi.devkit_TimeZoneDateOnlyCalculated_TimezoneDateOnly.Value).toEqual("2019-04-26T00:00:00Z");
            expect(webapi.devkit_TimeZoneDateOnlyCalculated_TimezoneDateOnly.FormattedValue).toEqual("26.04.2019");
            expect(webapi.devkit_TimeZoneDateOnlyRollup_TimezoneDateOnly.Value).toEqual("2019-04-09T00:00:00Z");
            expect(webapi.devkit_TimeZoneDateOnlyRollup_TimezoneDateOnly.FormattedValue).toEqual("09.04.2019");
            expect(webapi.devkit_TimeZoneDateOnlyRollup_State.Value).toEqual(OptionSet.devkit_WebApi.RollupState.Calculated);
            expect(webapi.devkit_TimeZoneDateOnlyRollup_State.FormattedValue).toEqual(OptionSet.devkit_WebApi.RollupState.Calculated.toString());
            expect(webapi.devkit_TimeZoneDateOnlyRollup_Date_UtcDateAndTime.Value).toEqual("2019-05-01T14:35:44Z");
            expect(webapi.devkit_TimeZoneDateOnlyRollup_Date_UtcDateAndTime.FormattedValue).toEqual("01.05.2019 09:35 CH");
            //time-zone date and time
            expect(webapi.devkit_TimeZoneDateAndTime_TimezoneDateAndTime.Value).toEqual("2019-04-28T15:30:00Z");
            expect(webapi.devkit_TimeZoneDateAndTime_TimezoneDateAndTime.FormattedValue).toEqual("28.04.2019 03:30 CH");
            expect(webapi.devkit_TimeZoneDateAndTimeCalculated_TimezoneDateAndTime.Value).toEqual("2019-04-28T15:30:00Z");
            expect(webapi.devkit_TimeZoneDateAndTimeCalculated_TimezoneDateAndTime.FormattedValue).toEqual("28.04.2019 03:30 CH");
            expect(webapi.devkit_TimeZoneDateAndTimeRollup_TimezoneDateAndTime.Value).toEqual("2019-04-10T01:30:00Z");
            expect(webapi.devkit_TimeZoneDateAndTimeRollup_TimezoneDateAndTime.FormattedValue).toEqual("10.04.2019 01:30 SA");
            expect(webapi.devkit_TimeZoneDateAndTimeRollup_State.Value).toEqual(OptionSet.devkit_WebApi.RollupState.Calculated);
            expect(webapi.devkit_TimeZoneDateAndTimeRollup_State.FormattedValue).toEqual(OptionSet.devkit_WebApi.RollupState.Calculated.toString());
            expect(webapi.devkit_TimeZoneDateAndTimeRollup_Date_UtcDateAndTime.Value).toEqual("2019-05-01T14:35:49Z");
            expect(webapi.devkit_TimeZoneDateAndTimeRollup_Date_UtcDateAndTime.FormattedValue).toEqual("01.05.2019 09:35 CH");
            //others
            expect(webapi["@odata.etag"]).not.toBeUndefined();
            expect(res.entities.length).toBe(1);
            expect(res["@odata.nextLink"]).toBeUndefined();
        });
        it('WebApi Retreive NUMBER', async () => {
            var entities = [
                {
                    "@odata.etag": "W/\"586414\"",
                    "devkit_wholenumbernone@OData.Community.Display.V1.FormattedValue": "1.234",
                    "devkit_wholenumbernone": 1234,
                    "_transactioncurrencyid_value@OData.Community.Display.V1.FormattedValue": "US Dollar",
                    "_transactioncurrencyid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "transactioncurrencyid",
                    "_transactioncurrencyid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "transactioncurrency",
                    "_transactioncurrencyid_value": "08a827ca-9063-e911-a836-000d3a80e227",
                    "devkit_webapiid": "9670bbc4-2b6c-e911-a997-000d3a802135",
                    "devkit_wholenumbertimezone@OData.Community.Display.V1.FormattedValue": "205",
                    "devkit_wholenumbertimezone": 205,
                    "devkit_wholenumberduration@OData.Community.Display.V1.FormattedValue": "480",
                    "devkit_wholenumberduration": 480,
                    "devkit_currency_base@OData.Community.Display.V1.FormattedValue": "123.456,35 $",
                    "devkit_currency_base": 123456.35,
                    "devkit_currency@OData.Community.Display.V1.FormattedValue": "123.456,35 $",
                    "devkit_currency": 123456.35,
                    "devkit_decimalnumber@OData.Community.Display.V1.FormattedValue": "1.234.567,89",
                    "devkit_decimalnumber": 1234567.89,
                    "exchangerate@OData.Community.Display.V1.FormattedValue": "1,0000000000",
                    "exchangerate": 1,
                    "devkit_wholenumberlanguage@OData.Community.Display.V1.FormattedValue": "1.033",
                    "devkit_wholenumberlanguage": 1033,
                    "devkit_floatingpointnumber@OData.Community.Display.V1.FormattedValue": "1.234,57",
                    "devkit_floatingpointnumber": 1234.57
                }
            ];
            sinon.stub(Xrm.WebApi, 'retrieveMultipleRecords')
                .withArgs("devkit_webapi")
                .returns({
                    entities: entities
                });
            var fetchData = {
                devkit_name: "NUMBER"
            };
            var fetchXml = [
                "<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>",
                "  <entity name='devkit_webapi'>",
                "    <attribute name='devkit_wholenumbertimezone'/>",
                "    <attribute name='devkit_wholenumbernone'/>",
                "    <attribute name='devkit_wholenumberlanguage'/>",
                "    <attribute name='devkit_wholenumberduration'/>",
                "    <attribute name='devkit_floatingpointnumber'/>",
                "    <attribute name='exchangerate'/>",
                "    <attribute name='devkit_decimalnumber'/>",
                "    <attribute name='devkit_currency_base'/>",
                "    <attribute name='devkit_currency'/>",
                "    <attribute name='transactioncurrencyid'/>",
                "    <filter type='and'>",
                "      <condition attribute='devkit_name' operator='eq' value='", fetchData.devkit_name, "'/>",
                "    </filter>",
                "  </entity>",
                "</fetch>",
            ].join("");
            fetchXml = "?fetchXml=" + encodeURIComponent(fetchXml);
            var res = await Xrm.WebApi.retrieveMultipleRecords("devkit_webapi", fetchXml);

            var webapi = new Tomato.devkit_WebApiApi(res.entities[0]);
            //whole number
            expect(webapi.devkit_WholeNumberNone.Value).toEqual(1234);
            expect(webapi.devkit_WholeNumberNone.FormattedValue).toEqual("1.234");
            expect(webapi.devkit_WholeNumberDuration.Value).toEqual(480);
            expect(webapi.devkit_WholeNumberDuration.FormattedValue).toEqual("480");
            expect(webapi.devkit_WholeNumberLanguage.Value).toEqual(1033);
            expect(webapi.devkit_WholeNumberLanguage.FormattedValue).toEqual("1.033");
            expect(webapi.devkit_WholeNumberTimeZone.Value).toEqual(205);
            expect(webapi.devkit_WholeNumberTimeZone.FormattedValue).toEqual("205");
            //floating point number
            expect(webapi.devkit_FloatingPointNumber.Value).toEqual(1234.57);
            expect(webapi.devkit_FloatingPointNumber.FormattedValue).toEqual("1.234,57");
            //decimal
            expect(webapi.devkit_DecimalNumber.Value).toEqual(1234567.89);
            expect(webapi.devkit_DecimalNumber.FormattedValue).toEqual("1.234.567,89");
            //currency
            expect(webapi.devkit_Currency.Value).toEqual(123456.35);
            expect(webapi.devkit_Currency.FormattedValue).toEqual("123.456,35 $");
            expect(webapi.devkit_currency_Base.Value).toEqual(123456.35);
            expect(webapi.devkit_currency_Base.FormattedValue).toEqual("123.456,35 $");
            expect(webapi.ExchangeRate.Value).toEqual(1);
            expect(webapi.ExchangeRate.FormattedValue).toEqual("1,0000000000");
            //others
            expect(webapi["@odata.etag"]).not.toBeUndefined();
            expect(res.entities.length).toBe(1);
            expect(res["@odata.nextLink"]).toBeUndefined();
        });
        it('WebApi Retreive IMAGE', async () => {
            var entities = [
                {
                    "@odata.etag": "W/\"588558\"",
                    "entityimageid": "cbc7d336-456d-e911-a98d-000d3a80280e",
                    "devkit_webapiid": "c9c7d336-456d-e911-a98d-000d3a80280e",
                    "entityimage": "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",
                    "entityimage_url": "/Image/download.aspx?Entity=devkit_webapi&Attribute=entityimage&Id=c9c7d336-456d-e911-a98d-000d3a80280e&Timestamp=636924447719637143",
                    "entityimage_timestamp@OData.Community.Display.V1.FormattedValue": "636.924.447.719.637.000",
                    "entityimage_timestamp": 636924447719637100
                }
            ];
            sinon.stub(Xrm.WebApi, 'retrieveMultipleRecords')
                .withArgs("devkit_webapi")
                .returns({
                    entities: entities
                });
            var fetchData = {
                devkit_name: "IMAGE"
            };
            var fetchXml = [
                "<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>",
                "  <entity name='devkit_webapi'>",
                "    <attribute name='entityimage'/>",
                "    <attribute name='entityimageid'/>",
                "    <attribute name='entityimage_url'/>",
                "    <attribute name='entityimage_timestamp'/>",
                "    <filter type='and'>",
                "      <condition attribute='devkit_name' operator='eq' value='", fetchData.devkit_name, "'/>",
                "    </filter>",
                "  </entity>",
                "</fetch>",
            ].join("");
            fetchXml = "?fetchXml=" + encodeURIComponent(fetchXml);
            var res = await Xrm.WebApi.retrieveMultipleRecords("devkit_webapi", fetchXml);

            var webapi = new Tomato.devkit_WebApiApi(res.entities[0]);
            //image
            expect(webapi.EntityImageId.Value).toEqual("cbc7d336-456d-e911-a98d-000d3a80280e");
            expect(webapi.EntityImage.Value).toBe("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");
            expect(webapi.EntityImage_URL.Value).toEqual("/Image/download.aspx?Entity=devkit_webapi&Attribute=entityimage&Id=c9c7d336-456d-e911-a98d-000d3a80280e&Timestamp=636924447719637143");
            expect(webapi.EntityImage_Timestamp.Value).toEqual(636924447719637100);
            expect(webapi.EntityImage_Timestamp.FormattedValue).toEqual("636.924.447.719.637.000");
            //others
            expect(webapi["@odata.etag"]).not.toBeUndefined();
            expect(res.entities.length).toBe(1);
            expect(res["@odata.nextLink"]).toBeUndefined();
        });
        it('WebApi Retreive PARTYLIST', async () => {
            var entities = [
                {
                    "@odata.etag": "W/\"591128\"",
                    "subject": "EMAIL",
                    "prioritycode@OData.Community.Display.V1.FormattedValue": "Normal",
                    "prioritycode": 1,
                    "statuscode@OData.Community.Display.V1.FormattedValue": "Draft",
                    "statuscode": 1,
                    "modifiedon@OData.Community.Display.V1.FormattedValue": "03.05.2019 11:40 CH",
                    "modifiedon": "2019-05-03T16:40:20Z",
                    "activityid": "df6bec1b-c26d-e911-a98d-000d3a80280e",
                    "email_activity_parties": [{
                        "@odata.etag": "W/\"591126\"",
                        "addressusedemailcolumnnumber@OData.Community.Display.V1.FormattedValue": "35",
                        "addressusedemailcolumnnumber": 35,
                        "donotemail@OData.Community.Display.V1.FormattedValue": "Allow",
                        "donotemail": false,
                        "instancetypecode@OData.Community.Display.V1.FormattedValue": "Not Recurring",
                        "instancetypecode": 0,
                        "donotfax@OData.Community.Display.V1.FormattedValue": "Allow",
                        "donotfax": false,
                        "addressused": "someone9@example.com",
                        "_activityid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "activityid_activitypointer",
                        "_activityid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "activitypointer",
                        "_activityid_value": "df6bec1b-c26d-e911-a98d-000d3a80280e",
                        "_partyid_value@OData.Community.Display.V1.FormattedValue": "A. Datum Corporation (sample)",
                        "_partyid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "partyid_account",
                        "_partyid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "account",
                        "_partyid_value": "928d37ec-9e66-e911-a993-000d3a804bc9",
                        "donotphone@OData.Community.Display.V1.FormattedValue": "Allow",
                        "donotphone": false,
                        "participationtypemask@OData.Community.Display.V1.FormattedValue": "To Recipient",
                        "participationtypemask": 2,
                        "ispartydeleted@OData.Community.Display.V1.FormattedValue": "No",
                        "ispartydeleted": false,
                        "_ownerid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "systemuser",
                        "_ownerid_value": "739d2b22-5f57-42f9-9a17-ebad89799e7e",
                        "donotpostalmail@OData.Community.Display.V1.FormattedValue": "Allow",
                        "donotpostalmail": false,
                        "activitypartyid": "e16bec1b-c26d-e911-a98d-000d3a80280e"
                    }, {
                        "@odata.etag": "W/\"591127\"",
                        "addressusedemailcolumnnumber@OData.Community.Display.V1.FormattedValue": "35",
                        "addressusedemailcolumnnumber": 35,
                        "donotemail@OData.Community.Display.V1.FormattedValue": "Allow",
                        "donotemail": false,
                        "instancetypecode@OData.Community.Display.V1.FormattedValue": "Not Recurring",
                        "instancetypecode": 0,
                        "donotfax@OData.Community.Display.V1.FormattedValue": "Allow",
                        "donotfax": false,
                        "addressused": "someone8@example.com",
                        "_activityid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "activityid_activitypointer",
                        "_activityid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "activitypointer",
                        "_activityid_value": "df6bec1b-c26d-e911-a98d-000d3a80280e",
                        "_partyid_value@OData.Community.Display.V1.FormattedValue": "Alpine Ski House (sample)",
                        "_partyid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "partyid_account",
                        "_partyid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "account",
                        "_partyid_value": "908d37ec-9e66-e911-a993-000d3a804bc9",
                        "donotphone@OData.Community.Display.V1.FormattedValue": "Allow",
                        "donotphone": false,
                        "participationtypemask@OData.Community.Display.V1.FormattedValue": "To Recipient",
                        "participationtypemask": 2,
                        "ispartydeleted@OData.Community.Display.V1.FormattedValue": "No",
                        "ispartydeleted": false,
                        "_ownerid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "systemuser",
                        "_ownerid_value": "739d2b22-5f57-42f9-9a17-ebad89799e7e",
                        "donotpostalmail@OData.Community.Display.V1.FormattedValue": "Allow",
                        "donotpostalmail": false,
                        "activitypartyid": "e26bec1b-c26d-e911-a98d-000d3a80280e"
                    }, {
                        "@odata.etag": "W/\"591125\"",
                        "addressusedemailcolumnnumber@OData.Community.Display.V1.FormattedValue": "15",
                        "addressusedemailcolumnnumber": 15,
                        "instancetypecode@OData.Community.Display.V1.FormattedValue": "Not Recurring",
                        "instancetypecode": 0,
                        "addressused": "devkit@crmgridplus.com",
                        "_activityid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "activityid_activitypointer",
                        "_activityid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "activitypointer",
                        "_activityid_value": "df6bec1b-c26d-e911-a98d-000d3a80280e",
                        "_partyid_value@OData.Community.Display.V1.FormattedValue": "dev kit",
                        "_partyid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "systemuser",
                        "_partyid_value": "739d2b22-5f57-42f9-9a17-ebad89799e7e",
                        "participationtypemask@OData.Community.Display.V1.FormattedValue": "Sender",
                        "participationtypemask": 1,
                        "ispartydeleted@OData.Community.Display.V1.FormattedValue": "No",
                        "ispartydeleted": false,
                        "_ownerid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "systemuser",
                        "_ownerid_value": "739d2b22-5f57-42f9-9a17-ebad89799e7e",
                        "activitypartyid": "e06bec1b-c26d-e911-a98d-000d3a80280e"
                    }]
                }
            ];
            sinon.stub(Xrm.WebApi, 'retrieveMultipleRecords')
                .withArgs("email")
                .returns({
                    entities: entities
                });
            var fetchData = {
                subject: "EMAIL"
            };
            var fetchXml = [
                "<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>",
                "  <entity name='email'>",
                "    <attribute name='subject'/>",
                "    <attribute name='regardingobjectid'/>",
                "    <attribute name='from'/>",
                "    <attribute name='to'/>",
                "    <attribute name='prioritycode'/>",
                "    <attribute name='statuscode'/>",
                "    <attribute name='modifiedon'/>",
                "    <attribute name='activityid'/>",
                "    <order attribute='subject' descending='false'/>",
                "    <filter type='and'>",
                "      <condition attribute='subject' operator='eq' value='", fetchData.subject, "'/>",
                "    </filter>",
                "  </entity>",
                "</fetch>",
            ].join("");
            fetchXml = "?fetchXml=" + encodeURIComponent(fetchXml);
            var res = await Xrm.WebApi.retrieveMultipleRecords("email", fetchXml);

            var webapi = new Tomato.EmailApi(res.entities[0]);
            var ActivityParties = webapi.ActivityParties;
            var party0 = new Tomato.ActivityPartyApi(ActivityParties[0]);
            expect(party0.ParticipationTypeMask.Value).toEqual(OptionSet.ActivityParty.ParticipationTypeMask.To_Recipient);
            expect(party0.partyid_account.FormattedValue).toEqual("A. Datum Corporation (sample)");
            expect(party0.AddressUsed.Value).toEqual("someone9@example.com");
            var party2 = new Tomato.ActivityPartyApi(ActivityParties[2]);
            expect(party2.partyid_systemuser.FormattedValue).toEqual("dev kit");
            //others
            expect(webapi["@odata.etag"]).not.toBeUndefined();
            expect(res.entities.length).toEqual(1);
            expect(res["@odata.nextLink"]).toBeUndefined();

        });
    });
    describe("Delete", () => {
        it("Delete Contact", async () => {
            var obj =
            {
                id: "8d2dbd8c-c9f8-4cb5-8838-f5a916a6098f",
                entityType: "devkit_webapi"
            };
            sinon.stub(Xrm.WebApi, 'deleteRecord')
                .withArgs("devkit_webapi", "8d2dbd8c-c9f8-4cb5-8838-f5a916a6098f")
                .returns( obj );
            var res = await Xrm.WebApi.deleteRecord("devkit_webapi", "8d2dbd8c-c9f8-4cb5-8838-f5a916a6098f");
            expect(res.id).toBe("8d2dbd8c-c9f8-4cb5-8838-f5a916a6098f");
            expect(res.entityType).toBe("devkit_webapi");
        });
    });
});
