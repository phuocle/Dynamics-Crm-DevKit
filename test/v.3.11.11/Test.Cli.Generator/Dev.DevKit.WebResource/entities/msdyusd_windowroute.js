//@ts-check
///<reference path="msdyusd_windowroute.d.ts" />
"use strict";
var formmsdyusd_windowroute_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyusd_windowroute_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyusd_windowroute_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();