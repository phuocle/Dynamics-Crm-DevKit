//@ts-check
///<reference path="RollupField.d.ts" />
"use strict";
var formRollupField_Information = (function () {
	"use strict";
	/** @type DevKit.FormRollupField_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormRollupField_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();