//@ts-check
///<reference path="msdyusd_toolbarbutton.d.ts" />
"use strict";
var formmsdyusd_toolbarbutton_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyusd_toolbarbutton_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyusd_toolbarbutton_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();