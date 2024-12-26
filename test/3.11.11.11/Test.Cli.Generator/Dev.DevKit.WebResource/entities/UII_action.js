//@ts-check
///<reference path="UII_action.d.ts" />
"use strict";
var formUII_action_Information = (function () {
	"use strict";
	/** @type DevKit.FormUII_action_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormUII_action_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();