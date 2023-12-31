//@ts-check
///<reference path="msdyn_routingconfigurationstep.d.ts" />
"use strict";
var formmsdyn_routingconfigurationstep_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_routingconfigurationstep_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_routingconfigurationstep_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();