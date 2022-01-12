//@ts-check
///<reference path="UII_audit.d.ts" />
"use strict";
var formUII_audit_Information = (function () {
	"use strict";
	/** @type DevKit.FormUII_audit_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormUII_audit_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();