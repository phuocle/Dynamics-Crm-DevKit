//@ts-check
///<reference path="msdyn_appconfiguration.d.ts" />
"use strict";
var formmsdyn_appconfiguration_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_appconfiguration_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_appconfiguration_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formUsers = (function () {
	"use strict";
	/** @type DevKit.FormUsers */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormUsers(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();