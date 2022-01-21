//@ts-check
///<reference path="msdyn_ocwhatsappchannelaccount.d.ts" />
"use strict";
var formmsdyn_ocwhatsappchannelaccount_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_ocwhatsappchannelaccount_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_ocwhatsappchannelaccount_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();