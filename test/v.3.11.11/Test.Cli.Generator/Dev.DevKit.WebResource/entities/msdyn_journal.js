//@ts-check
///<reference path="msdyn_journal.d.ts" />
"use strict";
var formmsdyn_journal_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_journal_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_journal_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();