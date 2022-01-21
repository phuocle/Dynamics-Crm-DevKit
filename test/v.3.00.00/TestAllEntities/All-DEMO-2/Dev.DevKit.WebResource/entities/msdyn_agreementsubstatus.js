//@ts-check
///<reference path="msdyn_agreementsubstatus.d.ts" />
"use strict";
var formmsdyn_agreementsubstatus_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_agreementsubstatus_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_agreementsubstatus_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();