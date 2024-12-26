//@ts-check
///<reference path="msdyn_InsightsStoreVirtualEntity.d.ts" />
"use strict";
var formmsdyn_InsightsStoreVirtualEntity_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_InsightsStoreVirtualEntity_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_InsightsStoreVirtualEntity_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();