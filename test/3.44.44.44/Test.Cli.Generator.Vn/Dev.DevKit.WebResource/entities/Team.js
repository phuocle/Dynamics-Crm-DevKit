//@ts-check
///<reference path="Team.d.ts" />
"use strict";
var formBieu_mau_nhom_Doanh_nghiep = (function () {
	"use strict";
	/** @type DevKit.FormBieu_mau_nhom_Doanh_nghiep */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormBieu_mau_nhom_Doanh_nghiep(executionContext);
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
var formTeam = (function () {
	"use strict";
	/** @type DevKit.FormTeam */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormTeam(executionContext);
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