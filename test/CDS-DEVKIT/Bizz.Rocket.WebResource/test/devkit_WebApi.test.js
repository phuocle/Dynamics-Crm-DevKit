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
                "      <condition attribute='devkit_name' operator='like' value='", fetchData.devkit_name, "'/>",
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
            expect(webapi.devkit_SingleOptionSetCode.Value).toEqual(100000000);
            expect(webapi.devkit_SingleOptionSetCode.FormattedValue).toEqual("Crm 4");
            expect(webapi.devkit_SingleOptionSetCodeCalculated.Value).toEqual(100000000);
            expect(webapi.devkit_SingleOptionSetCodeCalculated.FormattedValue).toEqual("Crm 4");
            expect(webapi.devkit_MultiOptionSetCode.Value.length).toEqual(3);
            expect(webapi.devkit_MultiOptionSetCode.Value[0]).toEqual(100000000);
            expect(webapi.devkit_MultiOptionSetCode.Value[1]).toEqual(100000001);
            expect(webapi.devkit_MultiOptionSetCode.Value[2]).toEqual(100000002);
            expect(webapi.devkit_MultiOptionSetCode.FormattedValue.length).toEqual(3);
            expect(webapi.devkit_MultiOptionSetCode.FormattedValue[0]).toEqual("Crm 4");
            expect(webapi.devkit_MultiOptionSetCode.FormattedValue[1]).toEqual("Crm 2011");
            expect(webapi.devkit_MultiOptionSetCode.FormattedValue[2]).toEqual("Crm 2013");
            expect(webapi.devkit_YesAndNo.Value).toBeTruthy();
            expect(webapi.devkit_YesAndNo.FormattedValue).toEqual("Yes");
            expect(webapi.devkit_YesAndNoCalculated.Value).toBeTruthy();
            expect(webapi.devkit_YesAndNoCalculated.FormattedValue).toEqual("Yes");

            expect(webapi.getAliasedValue("a.devkit_singleoptionsetcode")).toEqual(100000000);
            var multi = webapi.getAliasedValue("a.devkit_multioptionsetcode", true);
            expect(multi.length).toEqual(3);
            expect(multi[0]).toEqual(100000000);
            expect(multi[1]).toEqual(100000001);
            expect(multi[2]).toEqual(100000002);

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
        it("Retrieve DateTime", function () { });
        it("Retrieve Number", function () { });
        it("Retrieve String", function () { });
    });
});