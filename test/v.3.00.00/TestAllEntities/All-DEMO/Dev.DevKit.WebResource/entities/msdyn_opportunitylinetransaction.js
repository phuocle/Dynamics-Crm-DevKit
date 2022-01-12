//@ts-check
///<reference path="msdyn_opportunitylinetransaction.d.ts" />
"use strict";
var formmsdyn_opportunitylinetransaction_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_opportunitylinetransaction_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_opportunitylinetransaction_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();