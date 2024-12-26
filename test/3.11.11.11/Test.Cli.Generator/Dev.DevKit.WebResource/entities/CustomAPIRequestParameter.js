//@ts-check
///<reference path="CustomAPIRequestParameter.d.ts" />
"use strict";
var formCustomAPIRequestParameter_Information = (function () {
	"use strict";
	/** @type DevKit.FormCustomAPIRequestParameter_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormCustomAPIRequestParameter_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();