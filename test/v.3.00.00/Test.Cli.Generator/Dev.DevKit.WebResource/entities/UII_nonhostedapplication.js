//@ts-check
///<reference path="UII_nonhostedapplication.d.ts" />
"use strict";
var formUII_nonhostedapplication_Information = (function () {
	"use strict";
	/** @type DevKit.FormUII_nonhostedapplication_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormUII_nonhostedapplication_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();