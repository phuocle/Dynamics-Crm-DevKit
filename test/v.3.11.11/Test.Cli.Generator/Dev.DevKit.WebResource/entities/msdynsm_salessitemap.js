//@ts-check
///<reference path="msdynsm_salessitemap.d.ts" />
"use strict";
var formmsdynsm_salessitemap_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdynsm_salessitemap_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdynsm_salessitemap_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();