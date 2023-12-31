//@ts-check
///<reference path="msdyn_fieldservicepricelistitem.d.ts" />
"use strict";
var formmsdyn_fieldservicepricelistitem_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_fieldservicepricelistitem_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_fieldservicepricelistitem_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();