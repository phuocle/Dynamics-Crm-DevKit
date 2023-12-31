//@ts-check
///<reference path="msdyusd_entityassignment.d.ts" />
"use strict";
var formmsdyusd_entityassignment_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyusd_entityassignment_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyusd_entityassignment_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();