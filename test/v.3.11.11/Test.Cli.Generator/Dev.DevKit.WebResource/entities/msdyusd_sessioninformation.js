//@ts-check
///<reference path="msdyusd_sessioninformation.d.ts" />
"use strict";
var formmsdyusd_sessioninformation_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyusd_sessioninformation_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyusd_sessioninformation_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();