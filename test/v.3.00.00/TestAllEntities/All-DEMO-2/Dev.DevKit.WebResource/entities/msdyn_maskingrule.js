//@ts-check
///<reference path="msdyn_maskingrule.d.ts" />
"use strict";
var formmsdyn_maskingrule_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_maskingrule_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_maskingrule_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();