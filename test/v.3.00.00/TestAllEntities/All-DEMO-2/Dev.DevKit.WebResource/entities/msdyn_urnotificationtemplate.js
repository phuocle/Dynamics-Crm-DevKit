//@ts-check
///<reference path="msdyn_urnotificationtemplate.d.ts" />
"use strict";
var formmsdyn_urnotificationtemplate_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_urnotificationtemplate_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_urnotificationtemplate_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();