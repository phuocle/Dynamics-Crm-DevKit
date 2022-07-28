//@ts-check
///<reference path="msdyusd_tracesourcesetting.d.ts" />
"use strict";
var formmsdyusd_tracesourcesetting_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyusd_tracesourcesetting_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyusd_tracesourcesetting_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();