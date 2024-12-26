//@ts-check
///<reference path="msdyn_ocapplepay.d.ts" />
"use strict";
var formmsdyn_ocapplepay_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_ocapplepay_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_ocapplepay_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();