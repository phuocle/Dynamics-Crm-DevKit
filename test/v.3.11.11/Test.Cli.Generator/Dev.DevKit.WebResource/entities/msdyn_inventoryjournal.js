//@ts-check
///<reference path="msdyn_inventoryjournal.d.ts" />
"use strict";
var formmsdyn_inventoryjournal_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_inventoryjournal_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_inventoryjournal_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();