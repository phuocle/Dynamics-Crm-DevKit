//@ts-check
///<reference path="msdyn_bookingalert.d.ts" />
"use strict";
var formmsdyn_bookingalert_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_bookingalert_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_bookingalert_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();