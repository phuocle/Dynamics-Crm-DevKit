//@ts-check
///<reference path="FieldSecurityProfile.d.ts" />
"use strict";
var formFieldSecurityProfile_Information = (function () {
	"use strict";
	/** @type DevKit.FormFieldSecurityProfile_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormFieldSecurityProfile_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();