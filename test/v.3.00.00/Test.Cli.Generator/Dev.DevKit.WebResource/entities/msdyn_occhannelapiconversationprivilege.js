//@ts-check
///<reference path="msdyn_occhannelapiconversationprivilege.d.ts" />
"use strict";
var formmsdyn_occhannelapiconversationprivilege_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_occhannelapiconversationprivilege_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_occhannelapiconversationprivilege_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();