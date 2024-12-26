//@ts-check
///<reference path="msdyn_untrackedappointment.d.ts" />
"use strict";
var formmsdyn_untrackedappointment_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_untrackedappointment_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_untrackedappointment_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();