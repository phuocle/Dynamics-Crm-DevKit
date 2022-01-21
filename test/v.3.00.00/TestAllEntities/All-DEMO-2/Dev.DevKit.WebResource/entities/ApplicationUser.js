//@ts-check
///<reference path="ApplicationUser.d.ts" />
"use strict";
var formApplicationUser_Information = (function () {
	"use strict";
	/** @type DevKit.FormApplicationUser_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormApplicationUser_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();