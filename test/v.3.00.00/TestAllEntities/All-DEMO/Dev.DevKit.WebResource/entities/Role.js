//@ts-check
///<reference path="Role.d.ts" />
"use strict";
var formRole_Information = (function () {
	"use strict";
	/** @type DevKit.FormRole_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormRole_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();