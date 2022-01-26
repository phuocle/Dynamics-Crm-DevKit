//@ts-check
///<reference path="MobileOfflineProfileItem.d.ts" />
"use strict";
var formMobile_Offline_Profile_Item = (function () {
	"use strict";
	/** @type DevKit.FormMobile_Offline_Profile_Item */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormMobile_Offline_Profile_Item(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();