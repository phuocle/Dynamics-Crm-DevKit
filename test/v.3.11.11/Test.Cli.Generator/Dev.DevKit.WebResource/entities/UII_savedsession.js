//@ts-check
///<reference path="UII_savedsession.d.ts" />
"use strict";
var formUII_savedsession_Information = (function () {
	"use strict";
	/** @type DevKit.FormUII_savedsession_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormUII_savedsession_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();