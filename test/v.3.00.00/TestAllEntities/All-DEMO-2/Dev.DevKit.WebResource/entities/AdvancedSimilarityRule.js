//@ts-check
///<reference path="AdvancedSimilarityRule.d.ts" />
"use strict";
var formAdvancedSimilarityRule_Information = (function () {
	"use strict";
	/** @type DevKit.FormAdvancedSimilarityRule_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormAdvancedSimilarityRule_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();