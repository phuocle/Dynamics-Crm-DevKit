//@ts-check
///<reference path="msdyn_SessionParticipantData.d.ts" />
"use strict";
var formmsdyn_SessionParticipantData_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_SessionParticipantData_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_SessionParticipantData_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();