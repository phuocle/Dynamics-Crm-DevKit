//@ts-check
///<reference path="Template.d.ts" />
"use strict";
var formTemplate_Information = (function () {
	"use strict";
	/** @type DevKit.FormTemplate_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormTemplate_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formTemplate = (function () {
	"use strict";
	/** @type DevKit.FormTemplate */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormTemplate(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();