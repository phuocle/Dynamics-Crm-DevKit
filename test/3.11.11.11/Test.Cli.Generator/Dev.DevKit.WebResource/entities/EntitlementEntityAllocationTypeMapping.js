//@ts-check
///<reference path="EntitlementEntityAllocationTypeMapping.d.ts" />
"use strict";
var formEntitlementEntityAllocationTypeMapping_Information = (function () {
	"use strict";
	/** @type DevKit.FormEntitlementEntityAllocationTypeMapping_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormEntitlementEntityAllocationTypeMapping_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();