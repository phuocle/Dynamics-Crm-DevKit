//@ts-check
///<reference path="msdyn_inventorytransfer.d.ts" />
"use strict";
var formmsdyn_inventorytransfer_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_inventorytransfer_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_inventorytransfer_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();