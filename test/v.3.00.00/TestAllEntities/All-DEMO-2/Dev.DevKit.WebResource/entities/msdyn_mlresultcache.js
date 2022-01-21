//@ts-check
///<reference path="msdyn_mlresultcache.d.ts" />
"use strict";
var formmsdyn_mlresultcache_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_mlresultcache_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_mlresultcache_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();