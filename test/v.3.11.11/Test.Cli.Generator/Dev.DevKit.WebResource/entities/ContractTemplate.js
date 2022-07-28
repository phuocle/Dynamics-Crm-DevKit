//@ts-check
///<reference path="ContractTemplate.d.ts" />
"use strict";
var formContractTemplate_Information = (function () {
	"use strict";
	/** @type DevKit.FormContractTemplate_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormContractTemplate_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();