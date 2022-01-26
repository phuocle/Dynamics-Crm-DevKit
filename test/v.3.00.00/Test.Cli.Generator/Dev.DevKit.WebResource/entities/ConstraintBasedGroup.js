//@ts-check
///<reference path="ConstraintBasedGroup.d.ts" />
"use strict";
var formConstraintBasedGroup_Information = (function () {
	"use strict";
	/** @type DevKit.FormConstraintBasedGroup_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormConstraintBasedGroup_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();