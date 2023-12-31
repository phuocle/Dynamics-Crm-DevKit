//@ts-check
///<reference path="ConnectionRole.d.ts" />
"use strict";
var formConnectionRole_Information = (function () {
	"use strict";
	/** @type DevKit.FormConnectionRole_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormConnectionRole_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();