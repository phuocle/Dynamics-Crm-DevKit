//@ts-check
///<reference path="ContractDetail.d.ts" />
"use strict";
var formContract_Detail = (function () {
	"use strict";
	/** @type DevKit.FormContract_Detail */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormContract_Detail(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formContractDetail_Information = (function () {
	"use strict";
	/** @type DevKit.FormContractDetail_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormContractDetail_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();