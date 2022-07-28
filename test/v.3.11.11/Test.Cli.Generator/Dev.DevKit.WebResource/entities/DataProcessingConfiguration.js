//@ts-check
///<reference path="DataProcessingConfiguration.d.ts" />
"use strict";
var formDataProcessingConfiguration_Information = (function () {
	"use strict";
	/** @type DevKit.FormDataProcessingConfiguration_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormDataProcessingConfiguration_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formDataProcessingConfiguration_Information2 = (function () {
	"use strict";
	/** @type DevKit.FormDataProcessingConfiguration_Information2 */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormDataProcessingConfiguration_Information2(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();