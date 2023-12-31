//@ts-check
///<reference path="msdyn_transcript.d.ts" />
"use strict";
var formmsdyn_transcript_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_transcript_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_transcript_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();