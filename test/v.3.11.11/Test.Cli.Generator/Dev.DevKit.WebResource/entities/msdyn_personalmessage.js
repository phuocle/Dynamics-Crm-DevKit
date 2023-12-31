//@ts-check
///<reference path="msdyn_personalmessage.d.ts" />
"use strict";
var formmsdyn_personalmessage_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_personalmessage_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_personalmessage_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();