//@ts-check
///<reference path="usermobileofflineprofilemembership.d.ts" />
"use strict";
var formusermobileofflineprofilemembership_Information = (function () {
	"use strict";
	/** @type DevKit.Formusermobileofflineprofilemembership_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formusermobileofflineprofilemembership_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();