//@ts-check
///<reference path="package.d.ts" />
"use strict";
var formpackage_Information = (function () {
	"use strict";
	/** @type DevKit.Formpackage_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formpackage_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();