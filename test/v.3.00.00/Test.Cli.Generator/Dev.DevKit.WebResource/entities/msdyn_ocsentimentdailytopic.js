//@ts-check
///<reference path="msdyn_ocsentimentdailytopic.d.ts" />
"use strict";
var formmsdyn_ocsentimentdailytopic_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_ocsentimentdailytopic_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_ocsentimentdailytopic_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();