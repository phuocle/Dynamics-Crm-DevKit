//@ts-check
///<reference path="msdyn_swarmparticipantrule.d.ts" />
"use strict";
var formmsdyn_swarmparticipantrule_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_swarmparticipantrule_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_swarmparticipantrule_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();