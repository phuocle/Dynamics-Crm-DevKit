//@ts-check
///<reference path="msdyn_agentstatushistory.d.ts" />
"use strict";
var formmsdyn_agentstatushistory_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_agentstatushistory_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_agentstatushistory_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();