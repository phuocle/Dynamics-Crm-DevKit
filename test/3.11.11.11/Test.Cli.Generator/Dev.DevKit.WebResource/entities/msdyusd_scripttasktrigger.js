//@ts-check
///<reference path="msdyusd_scripttasktrigger.d.ts" />
"use strict";
var formmsdyusd_scripttasktrigger_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyusd_scripttasktrigger_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyusd_scripttasktrigger_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();