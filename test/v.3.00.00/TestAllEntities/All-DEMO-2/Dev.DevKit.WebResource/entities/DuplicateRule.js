//@ts-check
///<reference path="DuplicateRule.d.ts" />
"use strict";
var formDuplicateRule_Information = (function () {
	"use strict";
	/** @type DevKit.FormDuplicateRule_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormDuplicateRule_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();