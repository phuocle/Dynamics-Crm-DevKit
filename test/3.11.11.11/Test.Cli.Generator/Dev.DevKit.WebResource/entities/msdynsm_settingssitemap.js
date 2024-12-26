//@ts-check
///<reference path="msdynsm_settingssitemap.d.ts" />
"use strict";
var formmsdynsm_settingssitemap_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdynsm_settingssitemap_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdynsm_settingssitemap_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();