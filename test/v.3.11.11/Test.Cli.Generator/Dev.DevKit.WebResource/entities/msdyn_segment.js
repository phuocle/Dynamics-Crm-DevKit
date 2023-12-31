//@ts-check
///<reference path="msdyn_segment.d.ts" />
"use strict";
var formmsdyn_segment_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_segment_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_segment_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();