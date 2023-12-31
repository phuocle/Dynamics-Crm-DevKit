//@ts-check
///<reference path="Campaign.d.ts" />
"use strict";
var formCampaign = (function () {
	"use strict";
	/** @type DevKit.FormCampaign */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormCampaign(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();