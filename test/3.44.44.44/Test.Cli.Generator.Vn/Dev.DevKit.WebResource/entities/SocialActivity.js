//@ts-check
///<reference path="SocialActivity.d.ts" />
"use strict";
var formHoat_dong_mang_xa_hoi = (function () {
	"use strict";
	/** @type DevKit.FormHoat_dong_mang_xa_hoi */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormHoat_dong_mang_xa_hoi(executionContext);
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
var formHoat_dong_thuoc_Mang_xa_hoi_cho_Trai_nghiem_tuong_tac = (function () {
	"use strict";
	/** @type DevKit.FormHoat_dong_thuoc_Mang_xa_hoi_cho_Trai_nghiem_tuong_tac */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormHoat_dong_thuoc_Mang_xa_hoi_cho_Trai_nghiem_tuong_tac(executionContext);
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