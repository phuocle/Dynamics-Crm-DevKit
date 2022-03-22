//@ts-check
///<reference path="Account.d.ts" />
"use strict";
var formAccount = (function () {
	"use strict";
	/** @type DevKit.FormAccount */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormAccount(executionContext)
		await TestWebApi();
	}
	async function onSave(executionContext) {
	}
	async function TestWebApi() {
		var fetchData = {
			accountid: form.EntityId
		};
		var fetchXml = `
<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>
  <entity name='account'>
    <attribute name='name'/>
    <attribute name='accountnumber'/>
    <attribute name='telephone1'/>
    <attribute name='creditlimit'/>
	<attribute name='creditlimit_base'/>
    <order attribute='name' descending='false'/>
    <filter type='and'>
      <condition attribute='accountid' operator='eq' value='${fetchData.accountid}'/>
    </filter>
  </entity>
</fetch>
`;
		fetchXml = "?fetchXml=" + encodeURIComponent(fetchXml);
		var rows = await Xrm.WebApi.retrieveMultipleRecords("account", fetchXml);
		var accountApi = new DevKit.AccountApi(rows.entities[0]);
		var accountnumber = accountApi.AccountNumber;
		accountApi.Name = "ABCD";
		accountApi.CreditLimit = null;
		accountApi.CreditLimit = 123.455;
		accountApi.PrimaryContactId = "AAAA";
		var a = accountApi.CreatedOn_UtcDateAndTime;
		var formatName = accountApi.FormattedValue.Name;
		if (accountApi.AccountCategoryCode === OptionSet.Account.AccountCategoryCode.Preferred_Customer) {
		}

		debugger;
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();