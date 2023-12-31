//@ts-check
///<reference path="msdyn_ocfbpage.d.ts" />
"use strict";
var formmsdyn_ocfbpage_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_ocfbpage_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_ocfbpage_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();