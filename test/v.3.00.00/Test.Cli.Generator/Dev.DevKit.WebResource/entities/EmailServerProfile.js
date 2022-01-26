//@ts-check
///<reference path="EmailServerProfile.d.ts" />
"use strict";
var formEmailServerProfile_Information = (function () {
	"use strict";
	/** @type DevKit.FormEmailServerProfile_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormEmailServerProfile_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();