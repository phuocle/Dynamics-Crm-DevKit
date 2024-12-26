//@ts-check
///<reference path="SystemUser.d.ts" />
"use strict";
var formBieu_mau_nguoi_dung_Doanh_nghiep = (function () {
	"use strict";
	/** @type DevKit.FormBieu_mau_nguoi_dung_Doanh_nghiep */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormBieu_mau_nguoi_dung_Doanh_nghiep(executionContext);
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
var formNguoi_dung = (function () {
	"use strict";
	/** @type DevKit.FormNguoi_dung */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormNguoi_dung(executionContext);
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
var formNguoi_dung_Ung_dung = (function () {
	"use strict";
	/** @type DevKit.FormNguoi_dung_Ung_dung */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormNguoi_dung_Ung_dung(executionContext);
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