﻿//@ts-check
///<reference path="ChannelPropertyGroup.d.ts" />
"use strict";
var formNhom_Thuoc_tinh_Kenh = (function () {
	"use strict";
	/** @type DevKit.FormNhom_Thuoc_tinh_Kenh */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormNhom_Thuoc_tinh_Kenh(executionContext);
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