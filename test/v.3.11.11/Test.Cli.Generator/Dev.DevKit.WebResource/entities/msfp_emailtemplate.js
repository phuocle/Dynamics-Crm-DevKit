//@ts-check
///<reference path="msfp_emailtemplate.d.ts" />
"use strict";
var formmsfp_emailtemplate_New_Form = (function () {
	"use strict";
	/** @type DevKit.Formmsfp_emailtemplate_New_Form */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsfp_emailtemplate_New_Form(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();