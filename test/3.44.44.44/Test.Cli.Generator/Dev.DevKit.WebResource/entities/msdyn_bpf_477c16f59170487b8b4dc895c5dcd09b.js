//@ts-check
///<reference path="msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b.d.ts" />
"use strict";
var formmsdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Information */
	var form = null;
	/** @param {any} executionContext */
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Information(executionContext);
		registerEvents();
		await onLoadData();
	}
	function registerEvents() {
		if (form.ExecutionContext.IsInitialLoad()) {
		}
	}
	//BEGIN ON LOAD ========================================================
	async function onLoadData() {
	}
	//END ON LOAD ==========================================================
	//BEGIN ON CHANGE ======================================================

	//END ON CHANGE ========================================================
	//BEGIN PRE SEARCH =====================================================

	//END PRE SEARCH =======================================================
	//BEGIN OTHERS =========================================================

	//END OTHERS ===========================================================
	return {
		OnLoad: onLoad
	};
})();