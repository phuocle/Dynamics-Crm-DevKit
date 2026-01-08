import { PowerPagesScanReport } from './PowerPagesScanReport.form';

//const formPowerPagesScanReport_Information = (function () {
//	"use strict";
//
//	let form: PowerPagesScanReport.PowerPagesScanReport_Information;
//
//	async function onLoad(executionContext: any): Promise<void> {
//		form = new PowerPagesScanReport.PowerPagesScanReport_Information(executionContext);
//		registerEvents();
//		form.UiAddLoaded(UiAddLoaded);
//	}
//
//	function registerEvents(): void {
//		if (form.ExecutionContext.IsInitialLoad()) {
//		}
//	}
//
//	// ========================================================================
//	// BEGIN ON LOAD
//	// ========================================================================
//
//	async function UiAddLoaded(executionContext: any): Promise<void> {
//	}
//
//	// END ON LOAD
//	// ========================================================================
//
//	// ========================================================================
//	// BEGIN ON CHANGE
//	// ========================================================================
//
//	// END ON CHANGE
//	// ========================================================================
//
//	// ========================================================================
//	// BEGIN PRE SEARCH
//	// ========================================================================
//
//	// END PRE SEARCH
//	// ========================================================================
//
//	// ========================================================================
//	// BEGIN OTHERS
//	// ========================================================================
//
//	// END OTHERS
//	// ========================================================================
//
//	return {
//		OnLoad: onLoad
//	};
//})();

const formAllInOne = (function () {
	"use strict";

	let form: PowerPagesScanReport.AllInOne;

	async function onLoad(executionContext: any): Promise<void> {
		form = new PowerPagesScanReport.AllInOne(executionContext);
		registerEvents();
		form.UiAddLoaded(UiAddLoaded);
	}

	function registerEvents(): void {
		if (form.ExecutionContext.IsInitialLoad()) {
		}
	}

	// ========================================================================
	// BEGIN ON LOAD
	// ========================================================================

	async function UiAddLoaded(executionContext: any): Promise<void> {
	}

	// END ON LOAD
	// ========================================================================

	// ========================================================================
	// BEGIN ON CHANGE
	// ========================================================================

	// END ON CHANGE
	// ========================================================================

	// ========================================================================
	// BEGIN PRE SEARCH
	// ========================================================================

	// END PRE SEARCH
	// ========================================================================

	// ========================================================================
	// BEGIN OTHERS
	// ========================================================================

	// END OTHERS
	// ========================================================================

	return {
		OnLoad: onLoad
	};
})();

export { /* formPowerPagesScanReport_Information, */ formAllInOne };