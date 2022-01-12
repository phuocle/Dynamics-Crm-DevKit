//@ts-check
///<reference path="msdyn_chatwidgetlanguage.d.ts" />
"use strict";
var formmsdyn_chatwidgetlanguage_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_chatwidgetlanguage_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_chatwidgetlanguage_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();