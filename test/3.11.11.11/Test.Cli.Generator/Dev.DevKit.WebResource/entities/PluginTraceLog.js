//@ts-check
///<reference path="PluginTraceLog.d.ts" />
"use strict";
var formPluginTraceLog_Information = (function () {
	"use strict";
	/** @type DevKit.FormPluginTraceLog_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormPluginTraceLog_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();