//@ts-check
///<reference path="msdyusd_languagemodule.d.ts" />
"use strict";
var formmsdyusd_languagemodule_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyusd_languagemodule_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyusd_languagemodule_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();