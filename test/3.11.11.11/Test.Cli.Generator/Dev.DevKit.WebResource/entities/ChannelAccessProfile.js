//@ts-check
///<reference path="ChannelAccessProfile.d.ts" />
"use strict";
var formChannelAccessProfile_Information = (function () {
	"use strict";
	/** @type DevKit.FormChannelAccessProfile_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormChannelAccessProfile_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();