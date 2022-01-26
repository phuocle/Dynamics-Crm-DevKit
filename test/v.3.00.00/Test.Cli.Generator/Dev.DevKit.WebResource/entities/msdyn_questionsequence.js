//@ts-check
///<reference path="msdyn_questionsequence.d.ts" />
"use strict";
var formmsdyn_questionsequence_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_questionsequence_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_questionsequence_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formQuick_Create_Chat_Question = (function () {
	"use strict";
	/** @type DevKit.FormQuick_Create_Chat_Question */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormQuick_Create_Chat_Question(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();