//@ts-check
///<reference path="msdyn_liveworkstream.d.ts" />
"use strict";
var formmsdyn_liveworkstream_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_liveworkstream_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_liveworkstream_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formInformation_New = (function () {
	"use strict";
	/** @type DevKit.FormInformation_New */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormInformation_New(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();