//@ts-check
///<reference path="msdyn_dataexport.d.ts" />
"use strict";
var formmsdyn_dataexport_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_dataexport_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_dataexport_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();