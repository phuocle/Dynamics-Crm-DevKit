//@ts-check
///<reference path="Service.d.ts" />
"use strict";
var formService_Information = (function () {
	"use strict";
	/** @type DevKit.FormService_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormService_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();