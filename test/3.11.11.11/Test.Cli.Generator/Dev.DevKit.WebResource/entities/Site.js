//@ts-check
///<reference path="Site.d.ts" />
"use strict";
var formSite_Information = (function () {
	"use strict";
	/** @type DevKit.FormSite_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormSite_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();