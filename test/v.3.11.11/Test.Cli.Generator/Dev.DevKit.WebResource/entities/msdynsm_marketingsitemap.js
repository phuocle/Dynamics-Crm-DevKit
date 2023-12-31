//@ts-check
///<reference path="msdynsm_marketingsitemap.d.ts" />
"use strict";
var formmsdynsm_marketingsitemap_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdynsm_marketingsitemap_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdynsm_marketingsitemap_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();