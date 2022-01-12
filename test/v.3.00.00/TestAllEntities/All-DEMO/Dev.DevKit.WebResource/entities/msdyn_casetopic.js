//@ts-check
///<reference path="msdyn_casetopic.d.ts" />
"use strict";
var formmsdyn_casetopic_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_casetopic_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_casetopic_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();