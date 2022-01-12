//@ts-check
///<reference path="msdyn_liveworkitemevent.d.ts" />
"use strict";
var formmsdyn_liveworkitemevent_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_liveworkitemevent_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_liveworkitemevent_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();