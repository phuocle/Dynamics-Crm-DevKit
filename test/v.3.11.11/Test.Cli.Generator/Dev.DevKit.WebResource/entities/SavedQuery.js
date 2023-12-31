//@ts-check
///<reference path="SavedQuery.d.ts" />
"use strict";
var formSavedQuery_Information = (function () {
	"use strict";
	/** @type DevKit.FormSavedQuery_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormSavedQuery_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();