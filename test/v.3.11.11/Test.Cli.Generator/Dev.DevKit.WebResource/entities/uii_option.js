//@ts-check
///<reference path="uii_option.d.ts" />
"use strict";
var formuii_option_Information = (function () {
	"use strict";
	/** @type DevKit.Formuii_option_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formuii_option_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();