//@ts-check
///<reference path="msdyn_usersetting.d.ts" />
"use strict";
var formPersonalization_settings = (function () {
	"use strict";
	/** @type DevKit.FormPersonalization_settings */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormPersonalization_settings(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();