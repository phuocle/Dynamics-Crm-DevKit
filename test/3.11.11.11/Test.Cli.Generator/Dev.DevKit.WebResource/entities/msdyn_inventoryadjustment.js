//@ts-check
///<reference path="msdyn_inventoryadjustment.d.ts" />
"use strict";
var formmsdyn_inventoryadjustment_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_inventoryadjustment_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_inventoryadjustment_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();