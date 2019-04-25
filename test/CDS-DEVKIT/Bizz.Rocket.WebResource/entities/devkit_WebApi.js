///<reference path='devkit_WebApi.d.ts' />
var formWebApi = (function () {
	function onLoad(executionContext) {

	}
    function onSave(executionContext) {
        console.clear();
        var devkit_WebApiId = TestReadOptionSet();


    }

    function equals(a, b, message) {
        try {
            if (a.toString() === b.toString()) {
                console.log("PASSED: " + message);
                return;
            }
        }
        catch {
        }
        console.log("FAILED: " + message);
    }

    function TestReadOptionSet() {


        console.log(" *** BEGIN TEST READ WEBAPI-OPTIONSET *** ");
        var fetchData = {
            devkit_name: "OPTIONSET"
        };
        var fetchXml = [
            "<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>",
            "  <entity name='devkit_webapi'>",
            "    <attribute name='devkit_webapiid'/>",
            "    <attribute name='devkit_multioptionsetcode'/>",
            "    <attribute name='devkit_singleoptionsetcode'/>",
            "    <attribute name='devkit_calculatedsingleoptionsetcalculated'/>",
            "    <attribute name='statecode'/>",
            "    <attribute name='statuscode'/>",
            "    <order attribute='devkit_singleoptionsetcode' descending='false'/>",
            "    <filter type='and'>",
            "      <condition attribute='devkit_name' operator='eq' value='", fetchData.devkit_name, "'/>",
            "    </filter>",
            "  </entity>",
            "</fetch>",
        ].join("");
        var req = new Rocket.WebApi.RetrieveRequest();
        req.entityName = "devkit_webapi";
        req.fetchXml = fetchXml;
        req.async = false;
        var res = WebApiClient.Retrieve(req);
        var api = new Rocket.devkit_WebApiApi(res.value[0]);

        var a = new Rocket.devkit_WebApiApi("");
/*
{
    "@odata.etag": "W/\"569129\"",
    "statecode": 0,
    "devkit_webapiid": "d7f649ca-d864-e911-a991-000d3a802ab7",
    "devkit_calculatedsingleoptionsetcalculated": 100000000,
    "devkit_singleoptionsetcode": 100000000,
    "devkit_multioptionsetcode": "100000000,100000001,100000002",
    "statuscode": 1
}
*/
        var a = api.devkit_MultiOptionSetCode.Value;

        equals(parseInt(api.OptionSet.devkit_SingleOptionSetCode.Crm_4), parseInt(api.devkit_SingleOptionSetCode.Value), "devkit_SingleOptionSetCode.Value");
        equals("Crm 4", api.devkit_SingleOptionSetCode.FormattedValue, "devkit_SingleOptionSetCode.FormattedValue");

        equals(parseInt(api.OptionSet.devkit_CalculatedSingleOptionSetCalculated.Crm_4), parseInt(api.devkit_CalculatedSingleOptionSetCalculated.Value), "devkit_CalculatedSingleOptionSetCalculated.Value");
        equals("Crm 4", api.devkit_CalculatedSingleOptionSetCalculated.FormattedValue, "devkit_CalculatedSingleOptionSetCalculated.FormattedValue");

        equals(parseInt(api.OptionSet.statecode.Active), parseInt(api.statecode.Value), "statecode.Value");
        equals("Active", api.statecode.FormattedValue, "statecode.FormattedValue");

        equals(parseInt(api.OptionSet.statuscode.Active), parseInt(api.statuscode.Value), "statuscode.Value");
        equals("Active", api.statuscode.FormattedValue, "statuscode.FormattedValue");

        debugger;


        console.log(" *** END TEST READ WEBAPI-OPTIONSET *** ");
    }
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();