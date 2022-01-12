//@ts-check
///<reference path="Annotation.d.ts" />
"use strict";
var formAnnotation_Information = (function () {
	"use strict";
	/** @type DevKit.FormAnnotation_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormAnnotation_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formNote_Quick_Create_Form = (function () {
	"use strict";
	/** @type DevKit.FormNote_Quick_Create_Form */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormNote_Quick_Create_Form(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();