//@ts-check
///<reference path="msfp_unsubscribedrecipient.d.ts" />
"use strict";
var formmsfp_unsubscribedrecipient_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsfp_unsubscribedrecipient_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsfp_unsubscribedrecipient_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();