//@ts-check
///<reference path="ExternalPartyItem.d.ts" />
"use strict";
var formExternalPartyItem_Information = (function () {
	"use strict";
	/** @type DevKit.FormExternalPartyItem_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormExternalPartyItem_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();