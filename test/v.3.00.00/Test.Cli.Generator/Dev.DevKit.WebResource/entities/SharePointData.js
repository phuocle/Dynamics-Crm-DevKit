//@ts-check
///<reference path="SharePointData.d.ts" />
"use strict";
var formSharePointData_Information = (function () {
	"use strict";
	/** @type DevKit.FormSharePointData_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormSharePointData_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();