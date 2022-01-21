//@ts-check
///<reference path="msdyusd_usersettings.d.ts" />
"use strict";
var formmsdyusd_usersettings_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyusd_usersettings_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyusd_usersettings_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();