//@ts-check
///<reference path="Annotation.d.ts" />
"use strict";
var formBieu_mau_tao_nhanh_ghi_chu = (function () {
	"use strict";
	/** @type DevKit.FormBieu_mau_tao_nhanh_ghi_chu */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormBieu_mau_tao_nhanh_ghi_chu(executionContext);
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
var formThong_tin = (function () {
	"use strict";
	/** @type DevKit.FormThong_tin */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormThong_tin(executionContext);
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