///<reference path='devkit_WebApi.d.ts' />
var formWebApi = (function () {
	function onLoad(executionContext) {

	}
    function onSave(executionContext) {
        console.clear();
        TestReadOptionSet();
        TestReadDateTime();

    }

    function TestReadDateTime() {

    }

    function TestReadOptionSet() {
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
            "  </entity>",
            "</fetch>",
        ].join("");
        var req = new Rocket.WebApi.RetrieveRequest();
        req.entityName = "devkit_webapi";
        req.fetchXml = fetchXml;
        req.async = false;
        var res = WebApiClient.Retrieve(req);
        var api = new Rocket.devkit_WebApiApi(res.value[0]);
        debugger;
    }
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();