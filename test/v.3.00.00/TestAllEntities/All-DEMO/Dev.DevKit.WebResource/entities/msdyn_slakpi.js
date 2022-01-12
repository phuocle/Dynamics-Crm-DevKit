//@ts-check
///<reference path="msdyn_slakpi.d.ts" />
"use strict";
var formmsdyn_slakpi_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_slakpi_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_slakpi_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();