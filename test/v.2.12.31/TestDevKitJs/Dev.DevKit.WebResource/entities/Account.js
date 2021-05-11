//@ts-check
///<reference path="Account.d.ts" />
"use strict";
var formAccount = (function () {
	"use strict";
	async function onLoad(executionContext) {
		checkIsFormUpdate(executionContext);
		await TestWebApi();
	}
	async function onSave(executionContext) {
	}
	async function TestWebApi() {
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
        debugger;
    }
	function checkIsFormUpdate(executionContext) {
		var form = new DevKit.FormAccount(executionContext);
		if (form.FormType === OptionSet.FormType.Update) {
			form.Body.Name.Disabled = true;
        }
    }
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();