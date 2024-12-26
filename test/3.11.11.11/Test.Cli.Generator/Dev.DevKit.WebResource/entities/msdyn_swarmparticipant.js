//@ts-check
///<reference path="msdyn_swarmparticipant.d.ts" />
"use strict";
var formmsdyn_swarmparticipant_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_swarmparticipant_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_swarmparticipant_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();