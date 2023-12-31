//@ts-check
///<reference path="msdyn_quotelinetransactioncategory.d.ts" />
"use strict";
var formmsdyn_quotelinetransactioncategory_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_quotelinetransactioncategory_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_quotelinetransactioncategory_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();