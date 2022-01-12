//@ts-check
///<reference path="msdyn_journalline.d.ts" />
"use strict";
var formmsdyn_journalline_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_journalline_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_journalline_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formmsdyn_journalline_Quick_Create = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_journalline_Quick_Create */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_journalline_Quick_Create(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();