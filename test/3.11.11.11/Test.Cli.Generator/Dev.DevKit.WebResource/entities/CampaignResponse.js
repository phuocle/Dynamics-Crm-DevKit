//@ts-check
///<reference path="CampaignResponse.d.ts" />
"use strict";
var formCampaign_Response = (function () {
	"use strict";
	/** @type DevKit.FormCampaign_Response */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormCampaign_Response(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formCampaign_Response2 = (function () {
	"use strict";
	/** @type DevKit.FormCampaign_Response2 */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormCampaign_Response2(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();