//@ts-check
///<reference path="msdyn_occustommessagingchannel.d.ts" />
"use strict";
var formmsdyn_occustommessagingchannel_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_occustommessagingchannel_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_occustommessagingchannel_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();