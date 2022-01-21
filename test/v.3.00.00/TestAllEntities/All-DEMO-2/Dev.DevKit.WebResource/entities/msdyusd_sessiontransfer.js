//@ts-check
///<reference path="msdyusd_sessiontransfer.d.ts" />
"use strict";
var formmsdyusd_sessiontransfer_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyusd_sessiontransfer_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyusd_sessiontransfer_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();