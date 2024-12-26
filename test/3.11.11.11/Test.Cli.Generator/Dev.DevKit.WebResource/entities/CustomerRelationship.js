//@ts-check
///<reference path="CustomerRelationship.d.ts" />
"use strict";
var formCustomerRelationship_Information = (function () {
	"use strict";
	/** @type DevKit.FormCustomerRelationship_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormCustomerRelationship_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();