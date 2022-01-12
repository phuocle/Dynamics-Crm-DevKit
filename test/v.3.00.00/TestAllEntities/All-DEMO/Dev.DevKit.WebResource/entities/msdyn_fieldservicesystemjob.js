//@ts-check
///<reference path="msdyn_fieldservicesystemjob.d.ts" />
"use strict";
var formmsdyn_fieldservicesystemjob_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_fieldservicesystemjob_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_fieldservicesystemjob_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();