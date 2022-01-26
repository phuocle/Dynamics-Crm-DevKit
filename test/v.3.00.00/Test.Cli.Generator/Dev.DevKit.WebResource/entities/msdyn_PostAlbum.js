//@ts-check
///<reference path="msdyn_PostAlbum.d.ts" />
"use strict";
var formmsdyn_PostAlbum_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_PostAlbum_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_PostAlbum_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();