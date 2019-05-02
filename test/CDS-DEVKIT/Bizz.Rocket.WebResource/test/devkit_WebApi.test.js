///<reference path='../entities/devkit_WebApi.d.ts' />
describe("devkit_WebApi.test", function () {
    var fakeUrl = "https://pl-dynamicscrm-devkit.crm5.dynamics.com";
    var xhr;

    function ExportContext() {
        Xrm = {};
        Xrm.Page = {};
        Xrm.Page.context = {};
        Xrm.Page.context.getClientUrl = function () {
            return fakeUrl;
        }
    }

    ExportContext();

    RegExp.escape = function (s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    };

    function removeWhitespaces(s) {
        s = s.replace(/\s\s+/g, ' ');
        s = s.replace(/> </g, '><');
        return s;
    }

    var defaults = {
        ApiVersion: "9.1",
        ReturnAllPages: true,
        PrettifyErrors: false,
        Async: false
    };

    beforeEach(function () {
        WebApiClient.Configure(defaults);
        //BUG: sinon use setRequestHeader key and value should have, remove this to pass the error
        var if_None_Match = WebApiClient.GetDefaultHeaders().splice(3, 1);
        xhr = sinon.fakeServer.create();
        xhr.autoRespond = true;
    });

    afterEach(function () {
        xhr.restore();
    });

    describe("Retrieve", function () {
        it("Retrieve OptionSet", function () {
            //setup
            var data = {
                "@odata.context": "https://pl-dynamicscrm-devkit.crm5.dynamics.com/api/data/v9.1/$metadata#devkit_webapis(devkit_yesandnocalculated,devkit_singleoptionsetcodecalculated,statuscode,devkit_singleoptionsetcode,devkit_name,devkit_webapiid,devkit_yesandno,statecode,devkit_multioptionsetcode)",
                "@Microsoft.Dynamics.CRM.totalrecordcount": -1,
                "@Microsoft.Dynamics.CRM.totalrecordcountlimitexceeded": false,
                "@Microsoft.Dynamics.CRM.morerecords": false,
                "@Microsoft.Dynamics.CRM.fetchxmlpagingcookie": "<cookie pagenumber=\"1\" pagingcookie=\"%3ccookie%20page%3d%221%22%3e%3cdevkit_name%20last%3d%22OPTIONSET%22%20first%3d%22OPTIONSET%22%20%2f%3e%3cdevkit_webapiid%20last%3d%22%7bD7F649CA-D864-E911-A991-000D3A802AB7%7d%22%20first%3d%22%7bD7F649CA-D864-E911-A991-000D3A802AB7%7d%22%20%2f%3e%3c%2fcookie%3e\" istracking=\"False\" />",
                "@a.OData.Community.Display.V1.CurrentEntityField": "devkit_linkwebapiid",
                "value": [{
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
                }]
            };
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
            fetchXml = removeWhitespaces(fetchXml);
            var url = RegExp.escape(fakeUrl + "/api/data/v9.1/devkit_webapis?fetchXml=") + escape(fetchXml);
            xhr.respondWith("GET", RegExp(url),
                [200, { "Content-Type": "application/json" }, JSON.stringify(data)]
            );
            //run
            var req = new Rocket.WebApi.RetrieveRequest();
            req.entityName = "devkit_webapi";
            req.fetchXml = fetchXml;
            req.returnAllPages = true;
            req.async = false;
            var res = WebApiClient.Retrieve(req);
            //result
            var webapi = new Rocket.devkit_WebApiApi(res.value[0]);
            expect(webapi.statuscode.Value).toEqual(1);
            expect(webapi.statuscode.FormattedValue).toEqual("Active");
            expect(webapi.statecode.Value).toEqual(0);
            expect(webapi.statecode.FormattedValue).toEqual("Active");
            expect(webapi.devkit_SingleOptionSetCode.Value).toEqual(webapi.OptionSet.devkit_SingleOptionSetCode.Crm_4);
            expect(webapi.devkit_SingleOptionSetCode.FormattedValue).toEqual("Crm 4");
            expect(webapi.devkit_SingleOptionSetCodeCalculated.Value).toEqual(webapi.OptionSet.devkit_SingleOptionSetCode.Crm_4);
            expect(webapi.devkit_SingleOptionSetCodeCalculated.FormattedValue).toEqual("Crm 4");
            expect(webapi.devkit_MultiOptionSetCode.Value.length).toEqual(3);
            expect(webapi.devkit_MultiOptionSetCode.Value[0]).toEqual(webapi.OptionSet.devkit_MultiOptionSetCode.Crm_4);
            expect(webapi.devkit_MultiOptionSetCode.Value[1]).toEqual(webapi.OptionSet.devkit_MultiOptionSetCode.Crm_2011);
            expect(webapi.devkit_MultiOptionSetCode.Value[2]).toEqual(webapi.OptionSet.devkit_MultiOptionSetCode.Crm_2013);
            expect(webapi.devkit_MultiOptionSetCode.FormattedValue.length).toEqual(3);
            expect(webapi.devkit_MultiOptionSetCode.FormattedValue[0]).toEqual("Crm 4");
            expect(webapi.devkit_MultiOptionSetCode.FormattedValue[1]).toEqual("Crm 2011");
            expect(webapi.devkit_MultiOptionSetCode.FormattedValue[2]).toEqual("Crm 2013");
            expect(webapi.devkit_YesAndNo.Value).toBeTruthy();
            expect(webapi.devkit_YesAndNo.FormattedValue).toEqual("Yes");
            expect(webapi.devkit_YesAndNoCalculated.Value).toBeTruthy();
            expect(webapi.devkit_YesAndNoCalculated.FormattedValue).toEqual("Yes");
            expect(webapi.getAliasedValue("a.devkit_singleoptionsetcode")).toEqual(webapi.OptionSet.devkit_SingleOptionSetCode.Crm_4);
            var multi = webapi.getAliasedValue("a.devkit_multioptionsetcode", true);
            expect(multi.length).toEqual(3);
            expect(multi[0]).toEqual(webapi.OptionSet.devkit_MultiOptionSetCode.Crm_4);
            expect(multi[1]).toEqual(webapi.OptionSet.devkit_MultiOptionSetCode.Crm_2011);
            expect(multi[2]).toEqual(webapi.OptionSet.devkit_MultiOptionSetCode.Crm_2013);
            var multi2 = webapi.getAliasedFormattedValue("a.devkit_multioptionsetcode", true);
            expect(multi2.length).toEqual(3);
            expect(multi2[0]).toEqual("Crm 4");
            expect(multi2[1]).toEqual("Crm 2011");
            expect(multi2[2]).toEqual("Crm 2013");
            expect(webapi["@odata.etag"]).not.toBeUndefined();
            expect(res.value.length).toBeGreaterThan(0);
            expect(res["@odata.context"]).toStartsWith(fakeUrl);
            expect(res["@Microsoft.Dynamics.CRM.totalrecordcount"]).toEqual(-1);
            expect(res["@Microsoft.Dynamics.CRM.totalrecordcountlimitexceeded"]).toBeFalsy();
            expect(res["@Microsoft.Dynamics.CRM.morerecords"]).toBeFalsy();
            expect(res["@Microsoft.Dynamics.CRM.fetchxmlpagingcookie"]).not.toBeNull();
            expect(res["@odata.nextLink"]).toBeUndefined();
            expect(res["@odata.count"]).toBeUndefined();
        });
        it("Retrieve DateTime", function () {
            //setup
            var data = {
                "@odata.context": "https://pl-dynamicscrm-devkit.crm5.dynamics.com/api/data/v9.1/$metadata#devkit_webapis(devkit_dateonlydateonlyrollup,devkit_dateonlydateonly,devkit_userlocaldateonly,devkit_timezonedateandtimecalculated,devkit_userlocaldateandtimerollup_date,devkit_timezonedateandtimerollup_date,devkit_userlocaldateonlyrollup_state,devkit_userlocaldateonlyrollup_date,devkit_dateonlydateonlyrollup_date,devkit_userlocaldateandtime,devkit_timezonedateonlyrollup_state,devkit_timezonedateonly,devkit_dateonlydateonlyrollup_state,devkit_timezonedateonlyrollup_date,devkit_userlocaldateandtimerollup_state,devkit_userlocaldateandtimecalculated,devkit_webapiid,devkit_userlocaldateandtimerollup,devkit_dateonlydateonlycalculated,devkit_timezonedateandtimerollup,devkit_userlocaldateonlyrollup,devkit_timezonedateonlycalculated,devkit_userlocaldateonlycalculated,devkit_timezonedateonlyrollup,devkit_timezonedateandtime,devkit_timezonedateandtimerollup_state)",
                "@Microsoft.Dynamics.CRM.totalrecordcount": -1,
                "@Microsoft.Dynamics.CRM.totalrecordcountlimitexceeded": false,
                "@Microsoft.Dynamics.CRM.morerecords": false,
                "@Microsoft.Dynamics.CRM.fetchxmlpagingcookie": "<cookie pagenumber=\"1\" pagingcookie=\"%3ccookie%20page%3d%221%22%3e%3cdevkit_webapiid%20last%3d%22%7bF55A0D1E-286B-E911-A997-000D3A802135%7d%22%20first%3d%22%7bF55A0D1E-286B-E911-A997-000D3A802135%7d%22%20%2f%3e%3c%2fcookie%3e\" istracking=\"False\" />",
                "value": [{
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
                }]
            };
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
            fetchXml = removeWhitespaces(fetchXml);
            var url = RegExp.escape(fakeUrl + "/api/data/v9.1/devkit_webapis?fetchXml=") + escape(fetchXml);
            xhr.respondWith("GET", RegExp(url),
                [200, { "Content-Type": "application/json" }, JSON.stringify(data)]
            );
            //run
            var req = new Rocket.WebApi.RetrieveRequest();
            req.entityName = "devkit_webapi";
            req.fetchXml = fetchXml;
            req.returnAllPages = true;
            req.async = false;
            var res = WebApiClient.Retrieve(req);
            //result
            var webapi = new Rocket.devkit_WebApiApi(res.value[0]);
            //date only date only
            expect(webapi.devkit_DateOnlyDateOnly_DateOnly.Value).toEqual("2019-04-29");
            expect(webapi.devkit_DateOnlyDateOnly_DateOnly.FormattedValue).toEqual("29.04.2019");
            expect(webapi.devkit_DateOnlyDateOnlyCalculated_DateOnly.Value).toEqual("2019-04-29");
            expect(webapi.devkit_DateOnlyDateOnlyCalculated_DateOnly.FormattedValue).toEqual("29.04.2019");
            expect(webapi.devkit_DateOnlyDateOnlyRollup_DateOnly.Value).toEqual("2019-04-07");
            expect(webapi.devkit_DateOnlyDateOnlyRollup_DateOnly.FormattedValue).toEqual("07.04.2019");
            expect(webapi.devkit_DateOnlyDateOnlyRollup_State.Value).toEqual(webapi.OptionSet.RollupState.Calculated);
            expect(webapi.devkit_DateOnlyDateOnlyRollup_State.FormattedValue).toEqual(webapi.OptionSet.RollupState.Calculated.toString());
            expect(webapi.devkit_DateOnlyDateOnlyRollup_Date_UtcDateAndTime.Value).toEqual("2019-05-01T14:35:54Z");
            expect(webapi.devkit_DateOnlyDateOnlyRollup_Date_UtcDateAndTime.FormattedValue).toEqual("01.05.2019 09:35 CH");
            //user local date only
            expect(webapi.devkit_UserLocalDateOnly_UtcDateOnly.Value).toEqual("2019-04-29T17:00:00Z");
            expect(webapi.devkit_UserLocalDateOnly_UtcDateOnly.FormattedValue).toEqual("30.04.2019");
            expect(webapi.devkit_UserLocalDateOnlyCalculated_UtcDateOnly.Value).toEqual("2019-04-29T17:00:00Z");
            expect(webapi.devkit_UserLocalDateOnlyCalculated_UtcDateOnly.FormattedValue).toEqual("30.04.2019");
            expect(webapi.devkit_UserLocalDateOnlyRollup_UtcDateOnly.Value).toEqual("2019-04-05T17:00:00Z");
            expect(webapi.devkit_UserLocalDateOnlyRollup_UtcDateOnly.FormattedValue).toEqual("06.04.2019");
            expect(webapi.devkit_UserLocalDateOnlyRollup_State.Value).toEqual(webapi.OptionSet.RollupState.Calculated);
            expect(webapi.devkit_UserLocalDateOnlyRollup_State.FormattedValue).toEqual(webapi.OptionSet.RollupState.Calculated.toString());
            expect(webapi.devkit_UserLocalDateOnlyRollup_Date_UtcDateAndTime.Value).toEqual("2019-04-30T20:52:27Z");
            expect(webapi.devkit_UserLocalDateOnlyRollup_Date_UtcDateAndTime.FormattedValue).toEqual("01.05.2019 03:52 SA");
            //user local date and time
            expect(webapi.devkit_UserLocalDateAndTime_UtcDateAndTime.Value).toEqual("2019-04-27T07:30:00Z");
            expect(webapi.devkit_UserLocalDateAndTime_UtcDateAndTime.FormattedValue).toEqual("27.04.2019 02:30 CH");
            expect(webapi.devkit_UserLocalDateAndTimeCalculated_UtcDateAndTime.Value).toEqual("2019-04-27T07:30:00Z");
            expect(webapi.devkit_UserLocalDateAndTimeCalculated_UtcDateAndTime.FormattedValue).toEqual("27.04.2019 02:30 CH");
            expect(webapi.devkit_UserLocalDateAndTimeRollup_UtcDateAndTime.Value).toEqual("2019-04-08T01:30:00Z");
            expect(webapi.devkit_UserLocalDateAndTimeRollup_UtcDateAndTime.FormattedValue).toEqual("08.04.2019 08:30 SA");
            expect(webapi.devkit_UserLocalDateAndTimeRollup_State.Value).toEqual(webapi.OptionSet.RollupState.Calculated);
            expect(webapi.devkit_UserLocalDateAndTimeRollup_State.FormattedValue).toEqual(webapi.OptionSet.RollupState.Calculated.toString());
            expect(webapi.devkit_UserLocalDateAndTimeRollup_Date_UtcDateAndTime.Value).toEqual("2019-04-30T21:08:14Z");
            expect(webapi.devkit_UserLocalDateAndTimeRollup_Date_UtcDateAndTime.FormattedValue).toEqual("01.05.2019 04:08 SA");
            //time-zone date only
            expect(webapi.devkit_TimeZoneDateOnly_TimezoneDateOnly.Value).toEqual("2019-04-26T00:00:00Z");
            expect(webapi.devkit_TimeZoneDateOnly_TimezoneDateOnly.FormattedValue).toEqual("26.04.2019");
            expect(webapi.devkit_TimeZoneDateOnlyCalculated_TimezoneDateOnly.Value).toEqual("2019-04-26T00:00:00Z");
            expect(webapi.devkit_TimeZoneDateOnlyCalculated_TimezoneDateOnly.FormattedValue).toEqual("26.04.2019");
            expect(webapi.devkit_TimeZoneDateOnlyRollup_TimezoneDateOnly.Value).toEqual("2019-04-09T00:00:00Z");
            expect(webapi.devkit_TimeZoneDateOnlyRollup_TimezoneDateOnly.FormattedValue).toEqual("09.04.2019");
            expect(webapi.devkit_TimeZoneDateOnlyRollup_State.Value).toEqual(webapi.OptionSet.RollupState.Calculated);
            expect(webapi.devkit_TimeZoneDateOnlyRollup_State.FormattedValue).toEqual(webapi.OptionSet.RollupState.Calculated.toString());
            expect(webapi.devkit_TimeZoneDateOnlyRollup_Date_UtcDateAndTime.Value).toEqual("2019-05-01T14:35:44Z");
            expect(webapi.devkit_TimeZoneDateOnlyRollup_Date_UtcDateAndTime.FormattedValue).toEqual("01.05.2019 09:35 CH");
            //time-zone date and time
            expect(webapi.devkit_TimeZoneDateAndTime_TimezoneDateAndTime.Value).toEqual("2019-04-28T15:30:00Z");
            expect(webapi.devkit_TimeZoneDateAndTime_TimezoneDateAndTime.FormattedValue).toEqual("28.04.2019 03:30 CH");
            expect(webapi.devkit_TimeZoneDateAndTimeCalculated_TimezoneDateAndTime.Value).toEqual("2019-04-28T15:30:00Z");
            expect(webapi.devkit_TimeZoneDateAndTimeCalculated_TimezoneDateAndTime.FormattedValue).toEqual("28.04.2019 03:30 CH");
            expect(webapi.devkit_TimeZoneDateAndTimeRollup_TimezoneDateAndTime.Value).toEqual("2019-04-10T01:30:00Z");
            expect(webapi.devkit_TimeZoneDateAndTimeRollup_TimezoneDateAndTime.FormattedValue).toEqual("10.04.2019 01:30 SA");
            expect(webapi.devkit_TimeZoneDateAndTimeRollup_State.Value).toEqual(webapi.OptionSet.RollupState.Calculated);
            expect(webapi.devkit_TimeZoneDateAndTimeRollup_State.FormattedValue).toEqual(webapi.OptionSet.RollupState.Calculated.toString());
            expect(webapi.devkit_TimeZoneDateAndTimeRollup_Date_UtcDateAndTime.Value).toEqual("2019-05-01T14:35:49Z");
            expect(webapi.devkit_TimeZoneDateAndTimeRollup_Date_UtcDateAndTime.FormattedValue).toEqual("01.05.2019 09:35 CH");
            //others
            expect(webapi["@odata.etag"]).not.toBeUndefined();
            expect(res.value.length).toBeGreaterThan(0);
            expect(res["@odata.context"]).toStartsWith(fakeUrl);
            expect(res["@Microsoft.Dynamics.CRM.totalrecordcount"]).toEqual(-1);
            expect(res["@Microsoft.Dynamics.CRM.totalrecordcountlimitexceeded"]).toBeFalsy();
            expect(res["@Microsoft.Dynamics.CRM.morerecords"]).toBeFalsy();
            expect(res["@Microsoft.Dynamics.CRM.fetchxmlpagingcookie"]).not.toBeNull();
            expect(res["@odata.nextLink"]).toBeUndefined();
            expect(res["@odata.count"]).toBeUndefined();
        });
        it("Retrieve Number", function () {
            //setup
            var data = {
                "@odata.context": "https://pl-dynamicscrm-devkit.crm5.dynamics.com/api/data/v9.1/$metadata#devkit_webapis(devkit_wholenumbernone,_transactioncurrencyid_value,transactioncurrencyid,devkit_webapiid,devkit_wholenumbertimezone,devkit_wholenumberduration,devkit_currency_base,devkit_currency,devkit_decimalnumber,exchangerate,devkit_wholenumberlanguage,devkit_floatingpointnumber)",
                "@Microsoft.Dynamics.CRM.totalrecordcount": -1,
                "@Microsoft.Dynamics.CRM.totalrecordcountlimitexceeded": false,
                "@Microsoft.Dynamics.CRM.morerecords": false,
                "@Microsoft.Dynamics.CRM.fetchxmlpagingcookie": "<cookie pagenumber=\"1\" pagingcookie=\"%3ccookie%20page%3d%221%22%3e%3cdevkit_webapiid%20last%3d%22%7b9670BBC4-2B6C-E911-A997-000D3A802135%7d%22%20first%3d%22%7b9670BBC4-2B6C-E911-A997-000D3A802135%7d%22%20%2f%3e%3c%2fcookie%3e\" istracking=\"False\" />",
                "value": [{
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
                }]
            };
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
            fetchXml = removeWhitespaces(fetchXml);
            var url = RegExp.escape(fakeUrl + "/api/data/v9.1/devkit_webapis?fetchXml=") + escape(fetchXml);
            xhr.respondWith("GET", RegExp(url),
                [200, { "Content-Type": "application/json" }, JSON.stringify(data)]
            );
            //run
            var req = new Rocket.WebApi.RetrieveRequest();
            req.entityName = "devkit_webapi";
            req.fetchXml = fetchXml;
            req.returnAllPages = true;
            req.async = false;
            var res = WebApiClient.Retrieve(req);
            //result
            var webapi = new Rocket.devkit_WebApiApi(res.value[0]);
            //whole number
            expect(webapi.devkit_W)
            //others
            expect(webapi["@odata.etag"]).not.toBeUndefined();
            expect(res.value.length).toBeGreaterThan(0);
            expect(res["@odata.context"]).toStartsWith(fakeUrl);
            expect(res["@Microsoft.Dynamics.CRM.totalrecordcount"]).toEqual(-1);
            expect(res["@Microsoft.Dynamics.CRM.totalrecordcountlimitexceeded"]).toBeFalsy();
            expect(res["@Microsoft.Dynamics.CRM.morerecords"]).toBeFalsy();
            expect(res["@Microsoft.Dynamics.CRM.fetchxmlpagingcookie"]).not.toBeNull();
            expect(res["@odata.nextLink"]).toBeUndefined();
            expect(res["@odata.count"]).toBeUndefined();

        });
        it("Retrieve String", function () { });
    });
});