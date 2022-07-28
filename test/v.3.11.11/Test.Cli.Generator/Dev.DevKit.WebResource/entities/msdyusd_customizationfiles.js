//@ts-check
///<reference path="msdyusd_customizationfiles.d.ts" />
"use strict";
var formmsdyusd_customizationfiles_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyusd_customizationfiles_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyusd_customizationfiles_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();