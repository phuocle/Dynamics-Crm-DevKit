//@ts-check
///<reference path="EntitlementTemplate.d.ts" />
"use strict";
var formEntitlement_Template = (function () {
	"use strict";
	/** @type DevKit.FormEntitlement_Template */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormEntitlement_Template(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();