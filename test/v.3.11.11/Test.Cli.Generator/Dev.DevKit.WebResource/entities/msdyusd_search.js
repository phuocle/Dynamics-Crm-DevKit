//@ts-check
///<reference path="msdyusd_search.d.ts" />
"use strict";
var formmsdyusd_search_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyusd_search_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyusd_search_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();