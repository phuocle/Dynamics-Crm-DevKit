﻿//@ts-check
///<reference path="msdyn_property.d.ts" />
"use strict";
var formmsdyn_property_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_property_Information */
	var form = null;
	/** @param {any} executionContext */
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_property_Information(executionContext);
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
var formProperty_Definition_Quick_Create = (function () {
	"use strict";
	/** @type DevKit.FormProperty_Definition_Quick_Create */
	var form = null;
	/** @param {any} executionContext */
	async function onLoad(executionContext) {
		form = new DevKit.FormProperty_Definition_Quick_Create(executionContext);
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