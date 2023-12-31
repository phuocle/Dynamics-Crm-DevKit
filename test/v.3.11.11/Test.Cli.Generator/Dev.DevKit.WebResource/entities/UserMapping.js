//@ts-check
///<reference path="UserMapping.d.ts" />
"use strict";
var formUserMapping_Information = (function () {
	"use strict";
	/** @type DevKit.FormUserMapping_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormUserMapping_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();