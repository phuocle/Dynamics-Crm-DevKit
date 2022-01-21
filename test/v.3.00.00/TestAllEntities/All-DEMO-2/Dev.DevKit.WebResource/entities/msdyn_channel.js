//@ts-check
///<reference path="msdyn_channel.d.ts" />
"use strict";
var formmsdyn_channel_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_channel_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_channel_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();