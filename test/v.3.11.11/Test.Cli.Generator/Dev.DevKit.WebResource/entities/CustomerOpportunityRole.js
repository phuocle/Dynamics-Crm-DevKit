//@ts-check
///<reference path="CustomerOpportunityRole.d.ts" />
"use strict";
var formCustomerOpportunityRole_Information = (function () {
	"use strict";
	/** @type DevKit.FormCustomerOpportunityRole_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormCustomerOpportunityRole_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();