﻿//@ts-check
///<reference path="msdyn_contractperformance.d.ts" />
"use strict";
var formmsdyn_contractperformance_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_contractperformance_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_contractperformance_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();