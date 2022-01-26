//@ts-check
///<reference path="msdyn_orderlinetransactionclassification.d.ts" />
"use strict";
var formmsdyn_orderlinetransactionclassification_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_orderlinetransactionclassification_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_orderlinetransactionclassification_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();