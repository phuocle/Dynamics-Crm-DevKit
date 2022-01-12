//@ts-check
///<reference path="msdyn_sequencestat.d.ts" />
"use strict";
var formmsdyn_sequencestat_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_sequencestat_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_sequencestat_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();