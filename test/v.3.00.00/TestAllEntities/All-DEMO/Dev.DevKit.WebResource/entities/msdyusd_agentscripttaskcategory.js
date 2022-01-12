//@ts-check
///<reference path="msdyusd_agentscripttaskcategory.d.ts" />
"use strict";
var formmsdyusd_agentscripttaskcategory_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyusd_agentscripttaskcategory_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyusd_agentscripttaskcategory_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();