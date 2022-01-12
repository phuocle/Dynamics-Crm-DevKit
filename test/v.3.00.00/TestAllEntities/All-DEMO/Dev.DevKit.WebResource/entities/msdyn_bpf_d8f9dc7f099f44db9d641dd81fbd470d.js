//@ts-check
///<reference path="msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d.d.ts" />
"use strict";
var formmsdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();