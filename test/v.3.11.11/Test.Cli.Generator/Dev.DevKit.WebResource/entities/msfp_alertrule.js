//@ts-check
///<reference path="msfp_alertrule.d.ts" />
"use strict";
var formmsfp_alertrule_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsfp_alertrule_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsfp_alertrule_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();