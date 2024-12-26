//@ts-check
///<reference path="Category.d.ts" />
"use strict";
var formTao_nhanh_the_loai = (function () {
	"use strict";
	/** @type DevKit.FormTao_nhanh_the_loai */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormTao_nhanh_the_loai(executionContext);
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
var formThe_loai = (function () {
	"use strict";
	/** @type DevKit.FormThe_loai */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormThe_loai(executionContext);
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
var formTuong_tac_Chinh_cua_The_loai = (function () {
	"use strict";
	/** @type DevKit.FormTuong_tac_Chinh_cua_The_loai */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormTuong_tac_Chinh_cua_The_loai(executionContext);
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