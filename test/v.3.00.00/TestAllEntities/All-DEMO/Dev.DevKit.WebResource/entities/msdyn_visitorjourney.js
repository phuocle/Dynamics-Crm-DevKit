//@ts-check
///<reference path="msdyn_visitorjourney.d.ts" />
"use strict";
var formmsdyn_visitorjourney_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_visitorjourney_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_visitorjourney_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();