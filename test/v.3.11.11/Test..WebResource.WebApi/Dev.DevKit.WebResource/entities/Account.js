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
	<attribute name='devkit_categorycode'/>
	<attribute name='primarycontactid'/>
    <order attribute='name' descending='false'/>
    <link-entity name='contact' from='contactid' to='primarycontactid' visible='false' link-type='outer' alias='primarycontactid'>
      <attribute name='lastname'/>
      <attribute name='fullname'/>
      <attribute name='firstname'/>
    </link-entity>
    <link-entity name='account' from='accountid' to='parentaccountid' visible='false' link-type='outer' alias='parentaccountid'>
      <attribute name='devkit_categorycode'/>
    </link-entity>
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
		var formatName = accountApi.FormattedValue.CreditLimit;
		accountApi.OwnerId_systemuser
		if (accountApi.AccountCategoryCode === OptionSet.Account.AccountCategoryCode.Preferred_Customer) {
		}
		var contactFirstName = accountApi.getAliasedValue("primarycontactid.firstname");
		var contactFirstName2 = accountApi.getAliasedFormattedValue("primarycontactid.firstname");
		var a2 = accountApi.getAliasedValue("parentaccountid.devkit_categorycode", true);
		var a3 = accountApi.getAliasedFormattedValue("parentaccountid.devkit_categorycode", true);
		debugger;

		var create = new DevKit.AccountApi();
		create.Name = "ABC";
		create.AccountCategoryCode = OptionSet.Account.AccountCategoryCode.Standard;
		create.devkit_CategoryCode = [OptionSet.Account.devkit_CategoryCode.Bu_siness, OptionSet.Account.devkit_CategoryCode.Family];
		create.PrimaryContactId = "5099a63b-b7a9-ec11-9840-00224817a323";
		//var accountId = await Xrm.WebApi.createRecord(create.EntityName, create.Entity);
		debugger;
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();