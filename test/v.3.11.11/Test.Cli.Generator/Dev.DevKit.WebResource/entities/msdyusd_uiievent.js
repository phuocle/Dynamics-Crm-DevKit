//@ts-check
///<reference path="msdyusd_uiievent.d.ts" />
"use strict";
var formmsdyusd_uiievent_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyusd_uiievent_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyusd_uiievent_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();