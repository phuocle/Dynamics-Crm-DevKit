//@ts-check
///<reference path="msdyn_bookingchange.d.ts" />
"use strict";
var formmsdyn_bookingchange_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_bookingchange_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_bookingchange_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();