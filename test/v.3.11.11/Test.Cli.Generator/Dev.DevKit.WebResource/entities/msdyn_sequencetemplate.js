//@ts-check
///<reference path="msdyn_sequencetemplate.d.ts" />
"use strict";
var formmsdyn_sequencetemplate_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_sequencetemplate_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_sequencetemplate_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();