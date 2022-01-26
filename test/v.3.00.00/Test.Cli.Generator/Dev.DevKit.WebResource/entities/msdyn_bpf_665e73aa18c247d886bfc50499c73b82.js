//@ts-check
///<reference path="msdyn_bpf_665e73aa18c247d886bfc50499c73b82.d.ts" />
"use strict";
var formmsdyn_bpf_665e73aa18c247d886bfc50499c73b82_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_bpf_665e73aa18c247d886bfc50499c73b82_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_bpf_665e73aa18c247d886bfc50499c73b82_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();