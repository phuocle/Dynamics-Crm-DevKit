//@ts-check
///<reference path="msevtmgt_bpf_9623d46752ae497989f62ac0d11dad99.d.ts" />
"use strict";
var formmsevtmgt_bpf_9623d46752ae497989f62ac0d11dad99_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsevtmgt_bpf_9623d46752ae497989f62ac0d11dad99_Information */
	var form = null;
	/** @param {any} executionContext */
	async function onLoad(executionContext) {
		form = new DevKit.Formmsevtmgt_bpf_9623d46752ae497989f62ac0d11dad99_Information(executionContext);
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