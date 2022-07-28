//@ts-check
///<reference path="msdyn_channelprovider.d.ts" />
"use strict";
var formmsdyn_channelprovider_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_channelprovider_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_channelprovider_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();