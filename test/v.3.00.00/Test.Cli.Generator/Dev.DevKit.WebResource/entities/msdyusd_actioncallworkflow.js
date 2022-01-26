//@ts-check
///<reference path="msdyusd_actioncallworkflow.d.ts" />
"use strict";
var formmsdyusd_actioncallworkflow_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyusd_actioncallworkflow_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyusd_actioncallworkflow_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();