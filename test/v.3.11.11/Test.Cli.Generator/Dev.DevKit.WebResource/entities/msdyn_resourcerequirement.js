//@ts-check
///<reference path="msdyn_resourcerequirement.d.ts" />
"use strict";
var formInfomation = (function () {
	"use strict";
	/** @type DevKit.FormInfomation */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormInfomation(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formmsdyn_resourcerequirement_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_resourcerequirement_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_resourcerequirement_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formmsdyn_resourcerequirement_Information2 = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_resourcerequirement_Information2 */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_resourcerequirement_Information2(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();