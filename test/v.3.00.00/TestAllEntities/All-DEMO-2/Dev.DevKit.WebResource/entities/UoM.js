//@ts-check
///<reference path="UoM.d.ts" />
"use strict";
var formUoM_Information = (function () {
	"use strict";
	/** @type DevKit.FormUoM_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormUoM_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formUnit_of_Measure_Quick_Create = (function () {
	"use strict";
	/** @type DevKit.FormUnit_of_Measure_Quick_Create */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormUnit_of_Measure_Quick_Create(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();