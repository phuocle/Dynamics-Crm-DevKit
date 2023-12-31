//@ts-check
///<reference path="msdyn_componentlayer.d.ts" />
"use strict";
var formmsdyn_componentlayer_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_componentlayer_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_componentlayer_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();