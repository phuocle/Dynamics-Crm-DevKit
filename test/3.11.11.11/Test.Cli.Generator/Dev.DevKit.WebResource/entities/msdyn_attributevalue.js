//@ts-check
///<reference path="msdyn_attributevalue.d.ts" />
"use strict";
var formmsdyn_attributevalue_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_attributevalue_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_attributevalue_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();