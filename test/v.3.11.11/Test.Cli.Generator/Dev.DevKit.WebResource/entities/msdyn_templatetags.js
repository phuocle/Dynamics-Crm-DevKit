//@ts-check
///<reference path="msdyn_templatetags.d.ts" />
"use strict";
var formmsdyn_templatetags_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_templatetags_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_templatetags_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();