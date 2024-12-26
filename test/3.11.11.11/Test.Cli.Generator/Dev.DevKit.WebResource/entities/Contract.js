//@ts-check
///<reference path="Contract.d.ts" />
"use strict";
var formContract = (function () {
	"use strict";
	/** @type DevKit.FormContract */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormContract(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formContract_Information = (function () {
	"use strict";
	/** @type DevKit.FormContract_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormContract_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();