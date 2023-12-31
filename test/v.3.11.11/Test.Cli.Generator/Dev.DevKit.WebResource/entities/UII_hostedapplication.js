//@ts-check
///<reference path="UII_hostedapplication.d.ts" />
"use strict";
var formUII_hostedapplication_Information = (function () {
	"use strict";
	/** @type DevKit.FormUII_hostedapplication_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormUII_hostedapplication_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();