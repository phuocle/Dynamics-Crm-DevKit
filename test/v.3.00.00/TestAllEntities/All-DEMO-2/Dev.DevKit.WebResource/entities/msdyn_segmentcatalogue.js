﻿//@ts-check
///<reference path="msdyn_segmentcatalogue.d.ts" />
"use strict";
var formmsdyn_segmentcatalogue_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_segmentcatalogue_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_segmentcatalogue_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();