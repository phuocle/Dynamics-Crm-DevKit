﻿//@ts-check
///<reference path="msdyn_problematicasset.d.ts" />
"use strict";
var formmsdyn_problematicasset_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_problematicasset_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_problematicasset_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();