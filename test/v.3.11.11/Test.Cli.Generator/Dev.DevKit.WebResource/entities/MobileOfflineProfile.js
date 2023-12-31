//@ts-check
///<reference path="MobileOfflineProfile.d.ts" />
"use strict";
var formMobile_Offline_Profile = (function () {
	"use strict";
	/** @type DevKit.FormMobile_Offline_Profile */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormMobile_Offline_Profile(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();