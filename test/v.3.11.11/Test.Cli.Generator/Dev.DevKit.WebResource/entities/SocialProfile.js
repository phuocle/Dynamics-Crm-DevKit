//@ts-check
///<reference path="SocialProfile.d.ts" />
"use strict";
var formSocial_Profile = (function () {
	"use strict";
	/** @type DevKit.FormSocial_Profile */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormSocial_Profile(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formSocial_Profile_for_Interactive_experience = (function () {
	"use strict";
	/** @type DevKit.FormSocial_Profile_for_Interactive_experience */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormSocial_Profile_for_Interactive_experience(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();