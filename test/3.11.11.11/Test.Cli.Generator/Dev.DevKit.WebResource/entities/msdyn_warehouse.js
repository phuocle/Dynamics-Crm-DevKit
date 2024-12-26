//@ts-check
///<reference path="msdyn_warehouse.d.ts" />
"use strict";
var formmsdyn_warehouse_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_warehouse_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_warehouse_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();