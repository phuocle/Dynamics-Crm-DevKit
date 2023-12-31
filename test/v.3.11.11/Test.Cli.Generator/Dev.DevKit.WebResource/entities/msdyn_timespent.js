//@ts-check
///<reference path="msdyn_timespent.d.ts" />
"use strict";
var formmsdyn_timespent_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_timespent_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_timespent_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();