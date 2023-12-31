//@ts-check
///<reference path="msdyn_opportunitypricelist.d.ts" />
"use strict";
var formmsdyn_opportunitypricelist_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_opportunitypricelist_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_opportunitypricelist_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();