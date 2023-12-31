//@ts-check
///<reference path="msdyusd_toolbarstrip.d.ts" />
"use strict";
var formmsdyusd_toolbarstrip_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyusd_toolbarstrip_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyusd_toolbarstrip_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();