//@ts-check
///<reference path="msdyn_rtv.d.ts" />
"use strict";
var formRTV = (function () {
	"use strict";
	/** @type DevKit.FormRTV */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormRTV(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();