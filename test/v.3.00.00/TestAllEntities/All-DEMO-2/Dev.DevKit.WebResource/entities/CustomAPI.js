//@ts-check
///<reference path="CustomAPI.d.ts" />
"use strict";
var formCustomAPI_Information = (function () {
	"use strict";
	/** @type DevKit.FormCustomAPI_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormCustomAPI_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();