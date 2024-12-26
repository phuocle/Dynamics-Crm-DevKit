//@ts-check
///<reference path="msdyn_swarm.d.ts" />
"use strict";
var formmsdyn_swarm_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_swarm_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_swarm_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formSwarm_full_page_control = (function () {
	"use strict";
	/** @type DevKit.FormSwarm_full_page_control */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormSwarm_full_page_control(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();