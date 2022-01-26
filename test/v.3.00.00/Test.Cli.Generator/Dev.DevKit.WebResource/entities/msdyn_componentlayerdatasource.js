//@ts-check
///<reference path="msdyn_componentlayerdatasource.d.ts" />
"use strict";
var formmsdyn_componentlayerdatasource_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_componentlayerdatasource_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_componentlayerdatasource_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();