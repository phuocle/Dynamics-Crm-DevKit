//@ts-check
///<reference path="msdyn_processnotes.d.ts" />
"use strict";
var formmsdyn_processnotes_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_processnotes_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_processnotes_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();