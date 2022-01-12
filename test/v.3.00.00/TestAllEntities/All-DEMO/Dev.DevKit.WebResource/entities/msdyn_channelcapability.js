//@ts-check
///<reference path="msdyn_channelcapability.d.ts" />
"use strict";
var formmsdyn_channelcapability_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_channelcapability_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_channelcapability_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();