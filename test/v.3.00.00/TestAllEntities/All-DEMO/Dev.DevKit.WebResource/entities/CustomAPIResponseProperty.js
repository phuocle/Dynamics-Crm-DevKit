//@ts-check
///<reference path="CustomAPIResponseProperty.d.ts" />
"use strict";
var formCustomAPIResponseProperty_Information = (function () {
	"use strict";
	/** @type DevKit.FormCustomAPIResponseProperty_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormCustomAPIResponseProperty_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();