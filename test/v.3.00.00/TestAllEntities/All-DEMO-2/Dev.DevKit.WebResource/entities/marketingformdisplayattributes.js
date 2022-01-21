//@ts-check
///<reference path="marketingformdisplayattributes.d.ts" />
"use strict";
var formmarketingformdisplayattributes_Information = (function () {
	"use strict";
	/** @type DevKit.Formmarketingformdisplayattributes_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmarketingformdisplayattributes_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();