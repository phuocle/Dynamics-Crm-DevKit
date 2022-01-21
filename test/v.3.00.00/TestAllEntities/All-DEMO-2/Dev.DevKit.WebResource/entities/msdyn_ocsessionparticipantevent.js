//@ts-check
///<reference path="msdyn_ocsessionparticipantevent.d.ts" />
"use strict";
var formmsdyn_ocsessionparticipantevent_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_ocsessionparticipantevent_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_ocsessionparticipantevent_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();