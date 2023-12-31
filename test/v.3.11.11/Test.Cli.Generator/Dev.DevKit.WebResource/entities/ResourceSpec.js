//@ts-check
///<reference path="ResourceSpec.d.ts" />
"use strict";
var formResourceSpec_Information = (function () {
	"use strict";
	/** @type DevKit.FormResourceSpec_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormResourceSpec_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();