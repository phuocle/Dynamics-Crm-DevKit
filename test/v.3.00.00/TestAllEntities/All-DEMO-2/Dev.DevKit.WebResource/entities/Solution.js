//@ts-check
///<reference path="Solution.d.ts" />
"use strict";
var formSolution_Information = (function () {
	"use strict";
	/** @type DevKit.FormSolution_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormSolution_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();