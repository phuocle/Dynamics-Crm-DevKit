//@ts-check
///<reference path="msdyn_ocrequest.d.ts" />
"use strict";
var formmsdyn_ocrequest_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_ocrequest_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_ocrequest_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();