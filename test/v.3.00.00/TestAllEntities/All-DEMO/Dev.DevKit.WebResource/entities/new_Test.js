//@ts-check
///<reference path="new_Test.d.ts" />
"use strict";
var formnew_Test_Information = (function () {
	"use strict";
	/** @type DevKit.Formnew_Test_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formnew_Test_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();