//@ts-check
///<reference path="msfp_satisfactionmetric.d.ts" />
"use strict";
var formmsfp_satisfactionmetric_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsfp_satisfactionmetric_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsfp_satisfactionmetric_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();