﻿//@ts-check
///<reference path="msdyn_teamschatsuggestion.d.ts" />
"use strict";
var formmsdyn_teamschatsuggestion_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_teamschatsuggestion_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_teamschatsuggestion_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();