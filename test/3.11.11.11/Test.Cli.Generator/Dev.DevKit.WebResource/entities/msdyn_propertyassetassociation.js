﻿//@ts-check
///<reference path="msdyn_propertyassetassociation.d.ts" />
"use strict";
var formmsdyn_propertyassetassociation_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_propertyassetassociation_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_propertyassetassociation_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formProperty_Asset_Association_Quick_Create = (function () {
	"use strict";
	/** @type DevKit.FormProperty_Asset_Association_Quick_Create */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormProperty_Asset_Association_Quick_Create(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();