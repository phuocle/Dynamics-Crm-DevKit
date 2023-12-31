//@ts-check
///<reference path="TextAnalyticsEntityMapping.d.ts" />
"use strict";
var formTextAnalyticsEntityMapping_Information = (function () {
	"use strict";
	/** @type DevKit.FormTextAnalyticsEntityMapping_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormTextAnalyticsEntityMapping_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();