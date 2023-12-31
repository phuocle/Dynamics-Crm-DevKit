//@ts-check
///<reference path="MobileOfflineProfileItemAssociation.d.ts" />
"use strict";
var formMobile_Offline_Profile_Item_Association = (function () {
	"use strict";
	/** @type DevKit.FormMobile_Offline_Profile_Item_Association */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormMobile_Offline_Profile_Item_Association(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();