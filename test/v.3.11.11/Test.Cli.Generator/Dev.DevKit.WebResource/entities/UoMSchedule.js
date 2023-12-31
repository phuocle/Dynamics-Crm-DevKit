//@ts-check
///<reference path="UoMSchedule.d.ts" />
"use strict";
var formUoMSchedule_Information = (function () {
	"use strict";
	/** @type DevKit.FormUoMSchedule_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormUoMSchedule_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();