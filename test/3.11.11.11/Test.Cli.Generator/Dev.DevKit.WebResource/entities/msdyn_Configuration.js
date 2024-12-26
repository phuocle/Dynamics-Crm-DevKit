//@ts-check
///<reference path="msdyn_Configuration.d.ts" />
"use strict";
var formmsdyn_Configuration_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_Configuration_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_Configuration_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formmsdyn_Configuration_Information2 = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_Configuration_Information2 */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_Configuration_Information2(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();