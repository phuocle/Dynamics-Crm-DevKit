//@ts-check
///<reference path="ExternalParty.d.ts" />
"use strict";
var formExternalParty_Information = (function () {
	"use strict";
	/** @type DevKit.FormExternalParty_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormExternalParty_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();