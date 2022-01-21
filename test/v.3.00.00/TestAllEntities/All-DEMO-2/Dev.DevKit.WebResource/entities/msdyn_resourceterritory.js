//@ts-check
///<reference path="msdyn_resourceterritory.d.ts" />
"use strict";
var formmsdyn_resourceterritory_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_resourceterritory_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_resourceterritory_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();