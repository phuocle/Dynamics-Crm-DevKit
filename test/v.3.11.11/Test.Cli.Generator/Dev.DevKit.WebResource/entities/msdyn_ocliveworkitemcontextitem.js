//@ts-check
///<reference path="msdyn_ocliveworkitemcontextitem.d.ts" />
"use strict";
var formmsdyn_ocliveworkitemcontextitem_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_ocliveworkitemcontextitem_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_ocliveworkitemcontextitem_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();