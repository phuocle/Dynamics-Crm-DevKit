//@ts-check
///<reference path="CanvasAppExtendedMetadata.d.ts" />
"use strict";
var formCanvasAppExtendedMetadata_Information = (function () {
	"use strict";
	/** @type DevKit.FormCanvasAppExtendedMetadata_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormCanvasAppExtendedMetadata_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();