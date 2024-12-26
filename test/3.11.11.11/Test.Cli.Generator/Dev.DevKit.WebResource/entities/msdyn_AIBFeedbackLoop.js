//@ts-check
///<reference path="msdyn_AIBFeedbackLoop.d.ts" />
"use strict";
var formmsdyn_AIBFeedbackLoop_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_AIBFeedbackLoop_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_AIBFeedbackLoop_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();