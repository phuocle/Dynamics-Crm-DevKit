﻿//@ts-check
///<reference path="msdyn_productivitymacroconnector.d.ts" />
"use strict";
var formmsdyn_productivitymacroconnector_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_productivitymacroconnector_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_productivitymacroconnector_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();