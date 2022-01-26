//@ts-check
///<reference path="msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b.d.ts" />
"use strict";
var formmsdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();