//@ts-check
///<reference path='devkit_WebApi.d.ts' />
var formWebApi = (function () {
    function onLoad(executionContext) {
    }
    async function onSave(executionContext) {
        await Test_retrieveMultipleRecords();
    }

    async function Test_retrieveMultipleRecords() {
        var fetchData = {
            devkit_name: "ABC"
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
        debugger;
    }

    return {
        OnLoad: onLoad,
        OnSave: onSave
    };
})();