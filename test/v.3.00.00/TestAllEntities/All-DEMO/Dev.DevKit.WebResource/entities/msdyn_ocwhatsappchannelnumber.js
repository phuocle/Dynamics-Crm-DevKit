//@ts-check
///<reference path="msdyn_ocwhatsappchannelnumber.d.ts" />
"use strict";
var formmsdyn_ocwhatsappchannelnumber_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_ocwhatsappchannelnumber_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_ocwhatsappchannelnumber_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();