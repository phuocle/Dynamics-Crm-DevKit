//@ts-check
///<reference path="msdyn_propertylog.d.ts" />
"use strict";
var formmsdyn_propertylog_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_propertylog_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_propertylog_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formProperty_Log_Quick_Create = (function () {
	"use strict";
	/** @type DevKit.FormProperty_Log_Quick_Create */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormProperty_Log_Quick_Create(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();