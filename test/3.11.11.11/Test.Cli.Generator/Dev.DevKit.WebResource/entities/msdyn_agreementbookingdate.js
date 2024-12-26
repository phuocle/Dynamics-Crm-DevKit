//@ts-check
///<reference path="msdyn_agreementbookingdate.d.ts" />
"use strict";
var formmsdyn_agreementbookingdate_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_agreementbookingdate_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_agreementbookingdate_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();