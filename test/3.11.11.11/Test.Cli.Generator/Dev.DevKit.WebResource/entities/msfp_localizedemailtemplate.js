//@ts-check
///<reference path="msfp_localizedemailtemplate.d.ts" />
"use strict";
var formmsfp_localizedemailtemplate_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsfp_localizedemailtemplate_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsfp_localizedemailtemplate_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();