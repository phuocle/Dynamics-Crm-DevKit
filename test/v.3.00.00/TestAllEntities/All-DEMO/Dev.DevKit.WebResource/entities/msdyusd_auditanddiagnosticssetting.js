//@ts-check
///<reference path="msdyusd_auditanddiagnosticssetting.d.ts" />
"use strict";
var formmsdyusd_auditanddiagnosticssetting_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyusd_auditanddiagnosticssetting_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyusd_auditanddiagnosticssetting_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();