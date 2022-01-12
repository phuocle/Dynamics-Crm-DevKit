//@ts-check
///<reference path="msdyn_helppage.d.ts" />
"use strict";
var formmsdyn_helppage_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_helppage_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_helppage_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();