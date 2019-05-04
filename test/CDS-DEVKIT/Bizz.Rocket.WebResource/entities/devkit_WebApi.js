///<reference path='devkit_WebApi.d.ts' />
var formWebApi = (function () {
	function onLoad(executionContext) {

	}
    function onSave(executionContext) {
        console.clear();
        //TestReadOptionSet();
        //TestReadDateTime();
        //TestReadNumber();
        //TestString();
        //TestEntityImage();
        //TestPartyList();
    }

    function TestPartyList() {
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
        var req = new Rocket.WebApi.RetrieveRequest();
        req.async = false;
        req.entityName = "email";
        req.fetchXml = fetchXml;
        req.returnAllPages = true;
        var res = WebApiClient.Retrieve(req);
        var api = new Rocket.devkit_WebApiApi(res.value[0]);
        console.log(JSON.stringify(res));
        debugger;
    }

    function TestEntityImage() {
        var fetchData = {
            devkit_name: "IMAGE"
        };
        var fetchXml = [
            "<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>",
            "  <entity name='devkit_webapi'>",
            "    <attribute name='owneridname'/>",
            "    <attribute name='entityimageid'/>",
            "    <attribute name='entityimage_url'/>",
            "    <attribute name='entityimage_timestamp'/>",
            "    <filter type='and'>",
            "      <condition attribute='devkit_name' operator='eq' value='", fetchData.devkit_name, "'/>",
            "    </filter>",
            "  </entity>",
            "</fetch>",
        ].join("");
        var req = new Rocket.WebApi.RetrieveRequest();
        req.async = false;
        req.entityName = "devkit_webapi";
        req.fetchXml = fetchXml;
        req.returnAllPages = true;
        var res = WebApiClient.Retrieve(req);
        var api = new Rocket.devkit_WebApiApi(res.value[0]);
        console.log(JSON.stringify(res));
        debugger;
    }

    function TestString() {
        var fetchData = {
            devkit_name: "STRING"
        };
        var fetchXml = [
            "<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>",
            "  <entity name='devkit_webapi'>",
            "    <attribute name='devkit_name'/>",
            "    <attribute name='devkit_singlelineoftexturl'/>",
            "    <attribute name='devkit_singlelineoftexttickersymbol'/>",
            "    <attribute name='devkit_singlelineoftexttextarea'/>",
            "    <attribute name='devkit_singlelineoftexttext'/>",
            "    <attribute name='devkit_singlelineoftextphone'/>",
            "    <attribute name='devkit_singlelineoftextemail'/>",
            "    <attribute name='ownerid'/>",
            "    <attribute name='devkit_multipleliniesoftext'/>",
            "    <attribute name='devkit_linkwebapiid'/>",
            "    <attribute name='devkit_linkwebapiidname'/>",
            "    <attribute name='devkit_customerid'/>",
            "    <attribute name='devkit_webapiid'/>",
            "    <order attribute='devkit_name' descending='false'/>",
            "    <filter type='and'>",
            "      <condition attribute='devkit_name' operator='eq' value='", fetchData.devkit_name, "'/>",
            "    </filter>",
            "  </entity>",
            "</fetch>",
        ].join("");
        var req = new Rocket.WebApi.RetrieveRequest();
        req.async = false;
        req.entityName = "devkit_webapi";
        req.fetchXml = fetchXml;
        req.returnAllPages = true;
        var res = WebApiClient.Retrieve(req);
        var api = new Rocket.devkit_WebApiApi(res.value[0]);
        console.log(JSON.stringify(res));
        debugger;
    }

    function TestReadNumber() {
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
        var req = new Rocket.WebApi.RetrieveRequest();
        req.async = false;
        req.entityName = "devkit_webapi";
        req.fetchXml = fetchXml;
        req.returnAllPages = true;
        var res = WebApiClient.Retrieve(req);
        var api = new Rocket.devkit_WebApiApi(res.value[0]);
        console.log(JSON.stringify(res));
        debugger;
    }

    function TestReadDateTime() {
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
        var req = new Rocket.WebApi.RetrieveRequest();
        req.async = false;
        req.entityName = "devkit_webapi";
        req.fetchXml = fetchXml;
        req.returnAllPages = true;
        var res = WebApiClient.Retrieve(req);
        var api = new Rocket.devkit_WebApiApi(res.value[0]);
        console.log(JSON.stringify(res));
        debugger;
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
        var req = new Rocket.WebApi.RetrieveRequest();
        req.entityName = "devkit_webapi";
        req.fetchXml = fetchXml;
        req.async = false;
        req.returnAllPages = true;
        var res = WebApiClient.Retrieve(req);
        var api = new Rocket.devkit_WebApiApi(res.value[0]);
        console.log(JSON.stringify(res));
        debugger;
    }
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();