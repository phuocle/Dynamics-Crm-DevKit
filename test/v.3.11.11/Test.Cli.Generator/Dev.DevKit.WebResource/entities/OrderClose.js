//@ts-check
///<reference path="OrderClose.d.ts" />
"use strict";
var formOrderClose_Information = (function () {
	"use strict";
	/** @type DevKit.FormOrderClose_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormOrderClose_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();