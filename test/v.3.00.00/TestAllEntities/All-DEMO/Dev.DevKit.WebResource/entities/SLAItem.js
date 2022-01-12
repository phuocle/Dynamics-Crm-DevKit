//@ts-check
///<reference path="SLAItem.d.ts" />
"use strict";
var formSLAItem_Information = (function () {
	"use strict";
	/** @type DevKit.FormSLAItem_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormSLAItem_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();