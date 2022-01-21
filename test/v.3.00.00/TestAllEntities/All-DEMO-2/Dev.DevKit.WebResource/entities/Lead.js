//@ts-check
///<reference path="Lead.d.ts" />
"use strict";
var formLead = (function () {
	"use strict";
	/** @type DevKit.FormLead */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormLead(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formLead_Quick_Create = (function () {
	"use strict";
	/** @type DevKit.FormLead_Quick_Create */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormLead_Quick_Create(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formLead_Sales_Insights = (function () {
	"use strict";
	/** @type DevKit.FormLead_Sales_Insights */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormLead_Sales_Insights(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();