//@ts-check
///<reference path="Task.d.ts" />
"use strict";
var formBieu_mau_tao_nhanh_nhiem_vu = (function () {
	"use strict";
	/** @type DevKit.FormBieu_mau_tao_nhanh_nhiem_vu */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormBieu_mau_tao_nhanh_nhiem_vu(executionContext);
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
var formNhiem_vu = (function () {
	"use strict";
	/** @type DevKit.FormNhiem_vu */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormNhiem_vu(executionContext);
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
var formNhiem_vu_Trai_nghiem_tuong_tac = (function () {
	"use strict";
	/** @type DevKit.FormNhiem_vu_Trai_nghiem_tuong_tac */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormNhiem_vu_Trai_nghiem_tuong_tac(executionContext);
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