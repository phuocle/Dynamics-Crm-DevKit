//@ts-check
///<reference path="msdyusd_entitysearch.d.ts" />
"use strict";
var formmsdyusd_entitysearch_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyusd_entitysearch_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyusd_entitysearch_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();