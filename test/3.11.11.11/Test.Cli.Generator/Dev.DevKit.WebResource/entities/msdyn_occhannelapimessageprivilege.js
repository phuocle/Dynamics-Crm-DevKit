﻿//@ts-check
///<reference path="msdyn_occhannelapimessageprivilege.d.ts" />
"use strict";
var formmsdyn_occhannelapimessageprivilege_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_occhannelapimessageprivilege_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_occhannelapimessageprivilege_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();