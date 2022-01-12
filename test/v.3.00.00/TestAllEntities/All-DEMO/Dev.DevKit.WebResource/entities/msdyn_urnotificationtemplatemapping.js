//@ts-check
///<reference path="msdyn_urnotificationtemplatemapping.d.ts" />
"use strict";
var formmsdyn_urnotificationtemplatemapping_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_urnotificationtemplatemapping_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_urnotificationtemplatemapping_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();