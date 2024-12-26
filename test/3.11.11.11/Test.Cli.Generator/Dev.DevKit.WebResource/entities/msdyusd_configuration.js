//@ts-check
///<reference path="msdyusd_configuration.d.ts" />
"use strict";
var formmsdyusd_configuration_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyusd_configuration_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyusd_configuration_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();