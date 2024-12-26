//@ts-check
///<reference path="msdyn_ocsitdskill.d.ts" />
"use strict";
var formmsdyn_ocsitdskill_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_ocsitdskill_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_ocsitdskill_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();