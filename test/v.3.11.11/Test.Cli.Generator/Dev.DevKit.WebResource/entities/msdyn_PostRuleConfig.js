//@ts-check
///<reference path="msdyn_PostRuleConfig.d.ts" />
"use strict";
var formAuto_post_rule = (function () {
	"use strict";
	/** @type DevKit.FormAuto_post_rule */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormAuto_post_rule(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formmsdyn_PostRuleConfig_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_PostRuleConfig_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_PostRuleConfig_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();