//@ts-check
///<reference path="SocialActivity.d.ts" />
"use strict";
var formSocial_Activity = (function () {
	"use strict";
	/** @type DevKit.FormSocial_Activity */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormSocial_Activity(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formSocial_Activity_for_Interactive_experience = (function () {
	"use strict";
	/** @type DevKit.FormSocial_Activity_for_Interactive_experience */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormSocial_Activity_for_Interactive_experience(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();