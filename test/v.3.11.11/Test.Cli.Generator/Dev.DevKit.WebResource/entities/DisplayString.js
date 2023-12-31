//@ts-check
///<reference path="DisplayString.d.ts" />
"use strict";
var formDisplayString_Information = (function () {
	"use strict";
	/** @type DevKit.FormDisplayString_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormDisplayString_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();