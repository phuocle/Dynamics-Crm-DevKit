//@ts-check
///<reference path="SharePointSite.d.ts" />
"use strict";
var formSharePointSite_Information = (function () {
	"use strict";
	/** @type DevKit.FormSharePointSite_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormSharePointSite_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();