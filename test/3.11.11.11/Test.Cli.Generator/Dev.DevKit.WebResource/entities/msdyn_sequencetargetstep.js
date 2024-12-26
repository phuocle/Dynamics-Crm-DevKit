//@ts-check
///<reference path="msdyn_sequencetargetstep.d.ts" />
"use strict";
var formmsdyn_sequencetargetstep_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_sequencetargetstep_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_sequencetargetstep_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();