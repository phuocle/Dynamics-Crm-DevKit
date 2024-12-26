//@ts-check
///<reference path="PhoneCall.d.ts" />
"use strict";
var formBieu_mau_tao_nhanh_cuoc_goi_dien_thoai = (function () {
	"use strict";
	/** @type DevKit.FormBieu_mau_tao_nhanh_cuoc_goi_dien_thoai */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormBieu_mau_tao_nhanh_cuoc_goi_dien_thoai(executionContext);
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
var formCuoc_goi_dien_thoai = (function () {
	"use strict";
	/** @type DevKit.FormCuoc_goi_dien_thoai */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormCuoc_goi_dien_thoai(executionContext);
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
var formCuoc_goi_Dien_thoai_Trai_nghiem_tuong_tac = (function () {
	"use strict";
	/** @type DevKit.FormCuoc_goi_Dien_thoai_Trai_nghiem_tuong_tac */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormCuoc_goi_Dien_thoai_Trai_nghiem_tuong_tac(executionContext);
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