//@ts-check
///<reference path="BusinessUnit.d.ts" />
"use strict";
var formBusinessUnit_Information = (function () {
	"use strict";
	/** @type DevKit.FormBusinessUnit_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormBusinessUnit_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();