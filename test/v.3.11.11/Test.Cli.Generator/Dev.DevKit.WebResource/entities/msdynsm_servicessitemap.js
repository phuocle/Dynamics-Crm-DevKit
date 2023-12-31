//@ts-check
///<reference path="msdynsm_servicessitemap.d.ts" />
"use strict";
var formmsdynsm_servicessitemap_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdynsm_servicessitemap_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdynsm_servicessitemap_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();