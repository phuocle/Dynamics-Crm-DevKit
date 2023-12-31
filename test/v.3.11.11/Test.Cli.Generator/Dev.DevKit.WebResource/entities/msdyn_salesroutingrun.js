//@ts-check
///<reference path="msdyn_salesroutingrun.d.ts" />
"use strict";
var formmsdyn_salesroutingrun_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_salesroutingrun_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_salesroutingrun_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();