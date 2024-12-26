//@ts-check
///<reference path="VirtualEntityMetadata.d.ts" />
"use strict";
var formVirtualEntityMetadata_Information = (function () {
	"use strict";
	/** @type DevKit.FormVirtualEntityMetadata_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormVirtualEntityMetadata_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();