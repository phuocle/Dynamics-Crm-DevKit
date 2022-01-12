//@ts-check
///<reference path="OpportunityClose.d.ts" />
"use strict";
var formOpportunityClose_Information = (function () {
	"use strict";
	/** @type DevKit.FormOpportunityClose_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormOpportunityClose_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formOpportunity_Close = (function () {
	"use strict";
	/** @type DevKit.FormOpportunity_Close */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormOpportunity_Close(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();