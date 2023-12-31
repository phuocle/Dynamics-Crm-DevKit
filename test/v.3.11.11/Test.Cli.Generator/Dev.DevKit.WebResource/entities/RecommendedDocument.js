//@ts-check
///<reference path="RecommendedDocument.d.ts" />
"use strict";
var formRecommendedDocument_Information = (function () {
	"use strict";
	/** @type DevKit.FormRecommendedDocument_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormRecommendedDocument_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();