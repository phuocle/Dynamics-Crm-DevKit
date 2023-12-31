//@ts-check
///<reference path="CampaignActivity.d.ts" />
"use strict";
var formCampaign_Activity = (function () {
	"use strict";
	/** @type DevKit.FormCampaign_Activity */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormCampaign_Activity(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formCampaign_Activity_deprecated = (function () {
	"use strict";
	/** @type DevKit.FormCampaign_Activity_deprecated */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormCampaign_Activity_deprecated(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();