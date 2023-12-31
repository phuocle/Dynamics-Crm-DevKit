//@ts-check
///<reference path="msdyn_bookingalertstatus.d.ts" />
"use strict";
var formmsdyn_bookingalertstatus_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_bookingalertstatus_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_bookingalertstatus_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();