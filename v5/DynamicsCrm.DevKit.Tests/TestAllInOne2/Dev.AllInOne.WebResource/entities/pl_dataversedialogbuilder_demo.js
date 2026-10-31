//@ts-check
///<reference path="pl_dataversedialogbuilder_demo.dialog.d.ts" />
"use strict";
var pl_dataversedialogbuilder_demo = (function () {
	"use strict";
	/** @type {DevKitDialog.pl_dataversedialogbuilder_demo} */
	let form;
	/** @param {any} executionContext */
	async function OnLoad(executionContext) {
		form = new DevKitDialog.pl_dataversedialogbuilder_demo(executionContext);
	}
	/** @param {any} executionContext */
	async function OkClick(executionContext) {
	}
	/** @param {any} executionContext */
	async function CancelClick(executionContext) {
	}
	return {
		OnLoad: OnLoad,
		OkClick: OkClick,
		CancelClick: CancelClick
	};
})();

