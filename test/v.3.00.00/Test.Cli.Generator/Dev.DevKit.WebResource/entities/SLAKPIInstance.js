//@ts-check
///<reference path="SLAKPIInstance.d.ts" />
"use strict";
var formSLA_KPI_Instance = (function () {
	"use strict";
	/** @type DevKit.FormSLA_KPI_Instance */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormSLA_KPI_Instance(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();