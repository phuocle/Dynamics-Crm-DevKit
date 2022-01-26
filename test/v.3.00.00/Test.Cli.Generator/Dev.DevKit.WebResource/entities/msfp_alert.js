//@ts-check
///<reference path="msfp_alert.d.ts" />
"use strict";
var formmsfp_alert_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsfp_alert_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsfp_alert_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();