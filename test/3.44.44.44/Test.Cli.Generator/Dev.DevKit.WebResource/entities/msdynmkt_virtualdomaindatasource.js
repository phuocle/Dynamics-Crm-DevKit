﻿//@ts-check
///<reference path="msdynmkt_virtualdomaindatasource.d.ts" />
"use strict";
var formmsdynmkt_virtualdomaindatasource_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdynmkt_virtualdomaindatasource_Information */
	var form = null;
	/** @param {any} executionContext */
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdynmkt_virtualdomaindatasource_Information(executionContext);
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