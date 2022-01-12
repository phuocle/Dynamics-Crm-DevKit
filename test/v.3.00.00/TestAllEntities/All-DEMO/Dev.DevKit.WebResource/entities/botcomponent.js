//@ts-check
///<reference path="botcomponent.d.ts" />
"use strict";
var formbotcomponent_Information = (function () {
	"use strict";
	/** @type DevKit.Formbotcomponent_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formbotcomponent_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();