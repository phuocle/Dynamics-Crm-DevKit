//@ts-check
///<reference path="msdyn_productinventory.d.ts" />
"use strict";
var formmsdyn_productinventory_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_productinventory_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_productinventory_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();