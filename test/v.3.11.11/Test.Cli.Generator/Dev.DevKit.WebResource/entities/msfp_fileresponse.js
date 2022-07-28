//@ts-check
///<reference path="msfp_fileresponse.d.ts" />
"use strict";
var formmsfp_fileresponse_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsfp_fileresponse_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsfp_fileresponse_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();