//@ts-check
///<reference path="msdyusd_agentscriptaction.d.ts" />
"use strict";
var formmsdyusd_agentscriptaction_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyusd_agentscriptaction_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyusd_agentscriptaction_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();