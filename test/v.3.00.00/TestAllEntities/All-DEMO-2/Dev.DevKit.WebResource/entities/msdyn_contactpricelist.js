//@ts-check
///<reference path="msdyn_contactpricelist.d.ts" />
"use strict";
var formmsdyn_contactpricelist_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_contactpricelist_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_contactpricelist_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();