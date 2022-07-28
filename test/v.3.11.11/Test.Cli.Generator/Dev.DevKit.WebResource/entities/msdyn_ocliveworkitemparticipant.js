//@ts-check
///<reference path="msdyn_ocliveworkitemparticipant.d.ts" />
"use strict";
var formmsdyn_ocliveworkitemparticipant_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_ocliveworkitemparticipant_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_ocliveworkitemparticipant_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();