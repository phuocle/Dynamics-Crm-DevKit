﻿//@ts-check
///<reference path="msdyn_bookableresourcebookingquicknote.d.ts" />
"use strict";
var formBookable_Resource_Booking_Quick_Note = (function () {
	"use strict";
	/** @type DevKit.FormBookable_Resource_Booking_Quick_Note */
	var form = null;
	/** @param {any} executionContext */
	async function onLoad(executionContext) {
		form = new DevKit.FormBookable_Resource_Booking_Quick_Note(executionContext);
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